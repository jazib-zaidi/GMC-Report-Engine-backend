const productType = Array.from({ length: 5 })
  .map((_, i) => {
    return `segments.product_type_l${i + 1}`;
  })
  .join(',');

const customLabel = Array.from({ length: 5 })
  .map((_, i) => {
    return `segments.custom_label${i}`;
  })
  .join(',');

const googleProductCategory = Array.from({ length: 5 })
  .map((_, i) => {
    return `segments.category_l${i + 1}`;
  })
  .join(',');
const liaGoogleProductCategory = Array.from({ length: 5 })
  .map((_, i) => {
    return `segments.product_category_level${i + 1}`;
  })
  .join(',');

function getTotalMetrics(products) {
  let totalImpressions = 0;
  let totalClicks = 0;
  let totalConversions = 0;

  for (const item of products) {
    totalImpressions += parseInt(item.metrics.impressions || 0, 10);
    totalClicks += parseInt(item.metrics.clicks || 0, 10);
    totalConversions += parseInt(item.metrics.conversions || 0, 10);
  }

  // Aggregate CTR = total clicks / total impressions
  const aggregateCtr =
    totalImpressions > 0 ? totalClicks / totalImpressions : 0;

  return {
    impressions: totalImpressions,
    clicks: totalClicks,
    conversions: totalConversions,
    ctr: aggregateCtr, // Use this for total view
  };
}

function getAllCommonProducts(currentData, previousData) {
  const previousIds = new Set(
    previousData.map((item) => item.segments.offerId)
  );

  const current = currentData.filter((item) =>
    previousIds.has(item.segments.offerId)
  );

  const commonIds = new Set(current.map((item) => item.segments.offerId));

  const previous = previousData.filter((item) =>
    commonIds.has(item.segments.offerId)
  );

  return { current, previous };
}

function groupByOfferId(data) {
  const map = new Map();
  for (const item of data) {
    const offerId = item.segments.offerId;
    if (!map.has(offerId)) {
      map.set(offerId, []);
    }
    map.get(offerId).push(item);
  }
  return map;
}

function getAllCommonProductsWithImpressions(currentData, previousData) {
  const currentGrouped = groupByOfferId(currentData);
  const previousGrouped = groupByOfferId(previousData);

  const filteredCurrent = [];
  const filteredPrevious = [];

  for (const [offerId, currentItems] of currentGrouped.entries()) {
    const previousItems = previousGrouped.get(offerId);
    if (!previousItems) continue;

    // Check if ALL current and ALL previous items have impressions > 0
    const currentHasImpressions = currentItems.every(
      (item) => parseInt(item.metrics.impressions, 10) > 0
    );
    const previousHasImpressions = previousItems.every(
      (item) => parseInt(item.metrics.impressions, 10) > 0
    );

    if (currentHasImpressions && previousHasImpressions) {
      filteredCurrent.push(...currentItems);
      filteredPrevious.push(...previousItems);
    }
  }

  return {
    current: filteredCurrent,
    previous: filteredPrevious,
  };
}

function groupAndSumByOfferId(data) {
  const grouped = new Map();

  for (const item of data) {
    const id = item.segments.offerId;
    const title = item.segments.title || '';

    const clicks = parseInt(item.metrics.clicks || '0', 10);
    const impressions = parseInt(item.metrics.impressions || '0', 10);

    if (!grouped.has(id)) {
      grouped.set(id, { clicks: 0, impressions: 0, title });
    }

    const agg = grouped.get(id);
    agg.clicks += clicks;
    agg.impressions += impressions;
  }

  return grouped;
}

function generateCohortAnalysis(currentData, previousData) {
  const groupedCurrent = groupAndSumByOfferId(currentData);
  const groupedPrevious = groupAndSumByOfferId(previousData);

  const allIds = new Set([...groupedCurrent.keys(), ...groupedPrevious.keys()]);
  const analysis = [];

  for (const id of allIds) {
    const current = groupedCurrent.get(id) || { clicks: 0, impressions: 0 };
    const previous = groupedPrevious.get(id) || {
      clicks: 0,
      impressions: 0,
    };

    const clicksDiff = current.clicks - previous.clicks;
    const impressionsDiff = current.impressions - previous.impressions;

    const clicksChangePct =
      previous.clicks === 0
        ? null
        : ((clicksDiff / previous.clicks) * 100).toFixed(2);

    const impressionsChangePct =
      previous.impressions === 0
        ? null
        : ((impressionsDiff / previous.impressions) * 100).toFixed(2);

    analysis.push({
      offerId: id,
      title: current.title || previous.title || '',
      currentClicks: current.clicks,
      previousClicks: previous.clicks,
      clicksChangeNumber: clicksDiff,
      clicksChangePct,

      currentImpressions: current.impressions,
      previousImpressions: previous.impressions,
      impressionsChangeNumber: impressionsDiff,
      impressionsChangePct,
    });
  }

  return analysis;
}

function getSegmentedCohortData(currentData, previousData, segmentKey) {
  // Aggregate data by offerId first
  const aggregateByOfferId = (data) => {
    const map = new Map();
    for (const item of data) {
      const id = item.segments.offerId;
      const existing = map.get(id) || {
        ...item,
        metrics: { clicks: 0, impressions: 0 },
      };

      existing.metrics.clicks += parseInt(item.metrics.clicks, 10);
      existing.metrics.impressions += parseInt(item.metrics.impressions, 10);
      map.set(id, existing);
    }
    return map;
  };

  const currentMap = aggregateByOfferId(currentData);
  const previousMap = aggregateByOfferId(previousData);

  // Collect offerIds present in both
  const commonIds = [...currentMap.keys()].filter((id) => previousMap.has(id));

  // Segment data by segmentKey (e.g., brand, categoryL2)
  const segmentedData = {};

  for (const offerId of commonIds) {
    const currentItem = currentMap.get(offerId);
    const previousItem = previousMap.get(offerId);

    const segmentValue = currentItem.segments[segmentKey] || 'Unknown';

    if (!segmentedData[segmentValue]) {
      segmentedData[segmentValue] = {
        segment: segmentValue,
        currentClicks: 0,
        previousClicks: 0,
        currentImpressions: 0,
        previousImpressions: 0,
      };
    }

    segmentedData[segmentValue].currentClicks += currentItem.metrics.clicks;
    segmentedData[segmentValue].previousClicks += previousItem.metrics.clicks;
    segmentedData[segmentValue].currentImpressions +=
      currentItem.metrics.impressions;
    segmentedData[segmentValue].previousImpressions +=
      previousItem.metrics.impressions;
  }

  // Add deltas
  const result = Object.values(segmentedData).map((entry) => {
    const {
      currentClicks,
      previousClicks,
      currentImpressions,
      previousImpressions,
    } = entry;

    const clicksChangeNumber = currentClicks - previousClicks;
    const impressionsChangeNumber = currentImpressions - previousImpressions;

    const clicksChangePct = previousClicks
      ? ((clicksChangeNumber / previousClicks) * 100).toFixed(2)
      : 'N/A';
    const impressionsChangePct = previousImpressions
      ? ((impressionsChangeNumber / previousImpressions) * 100).toFixed(2)
      : 'N/A';

    return {
      ...entry,
      clicksChangeNumber,
      clicksChangePct,
      impressionsChangeNumber,
      impressionsChangePct,
    };
  });

  return result;
}

module.exports = {
  productType,
  customLabel,
  googleProductCategory,
  getAllCommonProducts,
  getAllCommonProductsWithImpressions,
  getTotalMetrics,
  groupAndSumByOfferId,
  generateCohortAnalysis,
  getSegmentedCohortData,
  liaGoogleProductCategory,
};
