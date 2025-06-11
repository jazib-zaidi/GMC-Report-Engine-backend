const { oauth2Client, google } = require('../utils/googleClient');
const {
  productType,
  customLabel,
  googleProductCategory,
  getAllCommonProducts,
  getAllCommonProductsWithImpressions,
  getTotalMetrics,
  generateCohortAnalysis,
  getSegmentedCohortData,
} = require('../utils/getCategory');

exports.fetchReports = async (req, res) => {
  try {
    const { tokens } = req.token;
    const { gmcAccountId, date, filter, previousDateRange } = req.body;

    if (!gmcAccountId) {
      return res
        .status(400)
        .json({ message: 'Missing gmcAccountId in request body' });
    }

    oauth2Client.setCredentials(tokens);
    const content = google.content({ version: 'v2.1', auth: oauth2Client });
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const fetchAllDataRecursively = async (
      gmcAccountId,
      query,
      pageToken = null,
      allResults = [],
      count = 0
    ) => {
      if (count > 0) await sleep(300);

      const response = await content.reports.search({
        merchantId: gmcAccountId,
        requestBody: {
          query: query,
          pageSize: 5000,
          pageToken: pageToken || undefined,
        },
      });

      allResults = allResults.concat(response.data?.results || []);

      if (response.data?.nextPageToken) {
        return fetchAllDataRecursively(
          gmcAccountId,
          query,
          response.data.nextPageToken,
          allResults,
          count + 1
        );
      }

      return allResults;
    };

    const getAllResults = async (gmcAccountId, startDate, endDate, filter) => {
      let currentQuery = `
        SELECT segments.offer_id,segments.title, segments.brand, ${productType}, ${customLabel},${googleProductCategory},
               metrics.clicks, metrics.impressions, metrics.ctr, metrics.conversions
        FROM MerchantPerformanceView
        WHERE segments.date BETWEEN '${startDate}' AND '${endDate}'
        AND segments.program = 'FREE_PRODUCT_LISTING' 
      `;

      let previousStart, previousEnd;

      if (previousDateRange?.startDate && previousDateRange?.endDate) {
        previousStart = previousDateRange.startDate;
        previousEnd = previousDateRange.endDate;
      } else {
        const prevStart = new Date(startDate);
        const prevEnd = new Date(endDate);
        prevStart.setFullYear(prevStart.getFullYear() - 1);
        prevEnd.setFullYear(prevEnd.getFullYear() - 1);

        previousStart = prevStart.toISOString().split('T')[0];
        previousEnd = prevEnd.toISOString().split('T')[0];
      }

      let previousQuery = `
        SELECT segments.offer_id,  segments.title, segments.brand,${productType}, ${customLabel},${googleProductCategory},
               metrics.clicks, metrics.impressions, metrics.ctr, metrics.conversions
        FROM MerchantPerformanceView
        WHERE segments.date BETWEEN '${previousStart}' AND '${previousEnd}'
          AND segments.program = 'FREE_PRODUCT_LISTING'
      `;

      const [current, previous] = await Promise.all([
        fetchAllDataRecursively(gmcAccountId, currentQuery),
        fetchAllDataRecursively(gmcAccountId, previousQuery),
      ]);

      return { current, previous };
    };

    let { current, previous } = await getAllResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      filter
    );
    function applyFilterToCurrentAndMatchPrevious(data = {}, filter) {
      if (!filter?.selectedAttribute || !filter?.searchValue) return data;

      // Split multiline input into a Set of lowercase trimmed values
      const searchValues = new Set(
        filter.searchValue
          .split('\n')
          .map((val) => val.trim().toLowerCase())
          .filter(Boolean)
      );

      // Step 1: Identify offerIds where any item matches one of the values
      const matchingOfferIds = new Set();

      data.current.forEach((item) => {
        const attr = item.segments?.[filter.selectedAttribute];
        const offerId = item.segments?.offerId;

        if (
          typeof attr === 'string' &&
          searchValues.has(attr.toLowerCase()) &&
          offerId
        ) {
          matchingOfferIds.add(offerId);
        }
      });

      // Step 2: Keep all items (current/previous) that have a matching offerId
      const filteredCurrent = data.current.filter((item) =>
        matchingOfferIds.has(item.segments?.offerId)
      );

      const filteredPrevious = data.previous.filter((item) =>
        matchingOfferIds.has(item.segments?.offerId)
      );

      return {
        current: filteredCurrent,
        previous: filteredPrevious,
      };
    }

    let allCommonProducts = getAllCommonProducts(current, previous);

    let allProductDataWithImpressions = getAllCommonProductsWithImpressions(
      allCommonProducts.current,
      allCommonProducts.previous
    );

    allCommonProducts = applyFilterToCurrentAndMatchPrevious(
      allCommonProducts,
      filter
    );

    allProductDataWithImpressions = applyFilterToCurrentAndMatchPrevious(
      allProductDataWithImpressions,
      filter
    );

    const totalCurrentMetricsWithImpressions = getTotalMetrics(
      allProductDataWithImpressions.current
    );

    const totalCurrentMetrics = getTotalMetrics(allCommonProducts.current);

    const totalPreviousMetricsWithImpressions = getTotalMetrics(
      allProductDataWithImpressions.previous
    );
    const totalPreviousMetrics = getTotalMetrics(allCommonProducts.previous);

    const allCohortAnalysisData = generateCohortAnalysis(
      allCommonProducts.current,
      allCommonProducts.previous
    );

    const allCohortAnalysisDataWithImpressions = generateCohortAnalysis(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);

    const brandCohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'brand'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);
    const categoryL1Cohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'categoryL1'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);
    const categoryL2Cohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'categoryL2'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);
    const categoryL3Cohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'categoryL3'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);
    const categoryL4Cohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'categoryL4'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);
    const categoryL5Cohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'categoryL5'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);
    const productTypeL1Cohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'productTypeL1'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);
    const productTypeL2Cohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'productTypeL2'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);
    const productTypeL3Cohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'productTypeL3'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);
    const productTypeL4Cohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'productTypeL4'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);
    const productTypeL5Cohort = getSegmentedCohortData(
      allProductDataWithImpressions.current,
      allProductDataWithImpressions.previous,
      'productTypeL5'
    ).sort((a, b) => b.clicksChangeNumber - a.clicksChangeNumber);

    res.json({
      allProductData: {
        totalCurrentMetrics,
        totalPreviousMetrics,
        cohortAnalysisData: allCohortAnalysisData,
      },
      allProductDataWithImpressions: {
        totalCurrentMetricsWithImpressions,
        totalPreviousMetricsWithImpressions,
        allCohortAnalysisDataWithImpressions:
          allCohortAnalysisDataWithImpressions,
        brandCohort,
        categoryL1Cohort,
        categoryL2Cohort,
        categoryL3Cohort,
        categoryL4Cohort,
        categoryL5Cohort,
        productTypeL1Cohort,
        productTypeL2Cohort,
        productTypeL3Cohort,
        productTypeL4Cohort,
        productTypeL5Cohort,
      },
    });
  } catch (error) {
    console.error('Error fetching reports:', error);

    if (error?.response?.data?.error) {
      return res.status(502).json({
        message: 'Google API error',
        details: error.response.data.error,
      });
    }

    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};
