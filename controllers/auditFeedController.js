const { oauth2Client, google } = require('../utils/googleClient');

async function fetchAllProductStatuses(content, merchantId) {
  let allItems = [];
  let pageToken = null;

  do {
    const res = await content.productstatuses.list({
      merchantId,
      pageToken: pageToken || undefined,
      maxResults: 250,
    });

    const items = res?.data?.resources || [];
    allItems.push(...items);
    pageToken = res?.data?.nextPageToken || null;
  } while (false);

  return allItems;
}

async function fetchAllProductsList(content, merchantId) {
  let allItems = [];
  let pageToken = null;

  do {
    const res = await content.products.list({
      merchantId,
      pageToken: pageToken || undefined,
      maxResults: 250,
    });

    const items = res?.data?.resources || [];
    allItems.push(...items);
    pageToken = res?.data?.nextPageToken || null;
  } while (pageToken);

  return allItems;
}
function formatDate(date) {
  return date.toISOString().split('T')[0];
}
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchAllDataRecursively = async (
  gmcAccountId,
  query,
  content,
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
      content,
      response.data.nextPageToken,
      allResults,
      count + 1
    );
  }

  return allResults;
};
exports.googleProductsAudit = async (req, res) => {
  try {
    const gmcAccountId = Number(req.query.merchantId) || 238564716;

    const delayMs = Number.isFinite(Number(req.query.delay))
      ? Number(req.query.delay)
      : 0;

    const { tokens } = req.token;
    oauth2Client.setCredentials(tokens);
    const content = google.content({ version: 'v2.1', auth: oauth2Client });

    const accountStatuses = await content.accountstatuses.get({
      merchantId: gmcAccountId,
      accountId: gmcAccountId,
    });

    const allFeed = await content.datafeeds.list({
      merchantId: gmcAccountId,
      accountId: gmcAccountId,
    });

    const account = await content.accounts.get({
      merchantId: gmcAccountId,
      accountId: gmcAccountId,
    });

    return res.json({
      account: account.data,
      allFeed: allFeed.data,
      accountstatuses: accountStatuses.data,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Failed to fetch product statuses',
      error: err.message,
    });
  }
};

exports.fetchAllProducts = async (req, res) => {
  try {
    const gmcAccountId = Number(req.query.merchantId) || 238564716;

    const { tokens } = req.token;

    oauth2Client.setCredentials(tokens);
    const content = google.content({ version: 'v2.1', auth: oauth2Client });
    // Fetch ALL pages
    const items = await fetchAllProductsList(content, gmcAccountId);

    // Build a 30-day window for metrics summary
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 30);

    // Query MerchantPerformanceView for clicks/impressions by offer_id
    let metricsQuery = `
SELECT
  segments.offer_id,
  metrics.clicks,
  metrics.impressions
FROM MerchantPerformanceView
WHERE segments.date BETWEEN '${formatDate(start)}' AND '${formatDate(end)}'
`;

    let metricsResults = [];
    try {
      metricsResults = await fetchAllDataRecursively(
        gmcAccountId,
        metricsQuery,
        content
      );
    } catch (e) {
      // If metrics fetch fails, keep items response, summary will be zeros
      metricsResults = [];
    }

    const toNumber = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    };

    // Aggregate metrics by offerId across the date range
    const metricsByOffer = new Map();
    for (const row of metricsResults || []) {
      const offerId =
        row?.segments?.offerId ||
        row?.segments?.offer_id ||
        row?.segments?.offerID;
      if (!offerId) continue;
      const clicks = toNumber(row?.metrics?.clicks);
      const impressions = toNumber(row?.metrics?.impressions);
      const prev = metricsByOffer.get(offerId) || { clicks: 0, impressions: 0 };
      metricsByOffer.set(offerId, {
        clicks: prev.clicks + clicks,
        impressions: prev.impressions + impressions,
      });
    }

    // Catalog offer IDs set
    const catalogOfferIds = new Set(
      (items || [])
        .map((p) => p?.offerId || p?.offer_id || p?.offerID)
        .filter(Boolean)
    );

    // Compute counts/totals limited to current catalog
    let productsWithImpressions = 0;
    let productsWithClicks = 0;
    let totalImpressions = 0;
    let totalClicks = 0;

    for (const offerId of catalogOfferIds) {
      const m = metricsByOffer.get(offerId);
      if (!m) continue;
      if (m.impressions > 0) {
        productsWithImpressions += 1;
        totalImpressions += m.impressions;
      }
      if (m.clicks > 0) {
        productsWithClicks += 1;
        totalClicks += m.clicks;
      }
    }

    const productsWithoutImpressions =
      catalogOfferIds.size - productsWithImpressions;
    const productsWithoutClicks = catalogOfferIds.size - productsWithClicks;

    const summary = {
      productsWithImpressions: {
        count: productsWithImpressions,
        totalImpressions,
      },
      productsWithoutImpressions: {
        count: Math.max(productsWithoutImpressions, 0),
      },
      productsWithClicks: {
        count: productsWithClicks,
        totalClicks,
      },
      productsWithoutClicks: {
        count: Math.max(productsWithoutClicks, 0),
      },
    };

    return res.json({
      // message: 'Fetched all product',
      // merchantId: gmcAccountId,
      // totalItems: items.length,
      summary,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Failed to fetch product statuses',
      error: err.message,
    });
  }
};

exports.fetchAllProductsMatrix = async (req, res) => {
  try {
    const gmcAccountId = Number(req.query.merchantId) || 5437860171;

    const { tokens } = req.token;

    oauth2Client.setCredentials(tokens);
    const content = google.content({ version: 'v2.1', auth: oauth2Client });
    const end = new Date(); // today
    const start = new Date();
    start.setDate(end.getDate() - 30); // go back 30 days

    let query = `
SELECT
  segments.offer_id,
  metrics.clicks,
  metrics.impressions
FROM MerchantPerformanceView
WHERE segments.date BETWEEN '${formatDate(start)}' AND '${formatDate(end)}'
`;

    const allItems = await fetchAllDataRecursively(
      gmcAccountId,
      query,
      content
    );

    // Build summary counts/totals from the matrix results
    const toNumber = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    };

    let productsWithImpressions = 0;
    let productsWithoutImpressions = 0;
    let totalImpressions = 0;
    let productsWithClicks = 0;
    let productsWithoutClicks = 0;
    let totalClicks = 0;

    for (const row of allItems || []) {
      const impressions = toNumber(row?.metrics?.impressions);
      const clicks = toNumber(row?.metrics?.clicks);
      if (impressions > 0) {
        productsWithImpressions += 1;
        totalImpressions += impressions;
      } else {
        productsWithoutImpressions += 1;
      }
      if (clicks > 0) {
        productsWithClicks += 1;
        totalClicks += clicks;
      } else {
        productsWithoutClicks += 1;
      }
    }

    const summary = {
      productsWithImpressions: {
        count: productsWithImpressions,
        totalImpressions,
      },
      productsWithoutImpressions: {
        count: productsWithoutImpressions,
      },
      productsWithClicks: {
        count: productsWithClicks,
        totalClicks,
      },
      productsWithoutClicks: {
        count: productsWithoutClicks,
      },
    };

    return res.json({
      message: 'Fetched all product',
      merchantId: gmcAccountId,
      totalItems: allItems.length,
      // items: allItems,
      summary,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Failed to fetch product',
      error: err.message,
    });
  }
};

// New: Paginated fetch based on type (with/without impressions/clicks)
// Query params:
// - merchantId: number (optional)
// - type: withImpressions | withoutImpressions | withClicks | withoutClicks (required)
// - startDate, endDate: YYYY-MM-DD (optional, defaults last 30 days)
// - pageSize: number (default 50, max 5000 for reports, 250 for products)
// - pageToken: string (for pagination; for "without" types this is products.nextPageToken)
exports.fetchProductsMatrixPaginated = async (req, res) => {
  try {
    const gmcAccountId = Number(req.query.merchantId) || 238564716;
    const type = String(req.query.type || '').trim();
    if (!type) {
      return res.status(400).json({ message: 'type is required' });
    }

    const parseDate = (d) => (d ? new Date(d) : null);
    const end = parseDate(req.query.endDate) || new Date();
    const start =
      parseDate(req.query.startDate) ||
      new Date(new Date(end).setDate(end.getDate() - 30));

    const pageSizeRaw = Number(req.query.pageSize) || 50;
    const pageSize = Math.max(1, Math.min(pageSizeRaw, 5000)); // reports supports up to 5000
    const pageToken = req.query.pageToken || undefined;

    const { tokens } = req.token;
    oauth2Client.setCredentials(tokens);
    const content = google.content({ version: 'v2.1', auth: oauth2Client });

    const toNumber = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    };

    // Helper to run a single-page reports.search
    const searchReports = async (query, pageSize, pageToken) => {
      const resp = await content.reports.search({
        merchantId: gmcAccountId,
        requestBody: {
          query,
          pageSize,
          pageToken: pageToken || undefined,
        },
      });
      return {
        items: resp.data?.results || [],
        nextPageToken: resp.data?.nextPageToken || null,
      };
    };
    const metricWhereByType = {
      withImpressions: 'metrics.impressions > 0',
      withClicks: 'metrics.clicks > 0',
      withoutImpressions: 'metrics.impressions = 0',
      withoutClicks: 'metrics.clicks = 0',
    };

    const whereMetric = metricWhereByType[type];
    if (!whereMetric) {
      return res.status(400).json({
        message:
          'Invalid type. Use one of: withImpressions, withoutImpressions, withClicks, withoutClicks',
      });
    }

    const query = `
SELECT
  segments.offer_id,
  segments.title,
  metrics.clicks,
  metrics.impressions,
  metrics.ctr
FROM MerchantPerformanceView
WHERE segments.date BETWEEN '${formatDate(start)}' AND '${formatDate(
      end
    )}' AND ${whereMetric}
`;
    const { items, nextPageToken } = await searchReports(
      query,
      pageSize,
      pageToken
    );

    return res.json({
      message: 'Fetched products (reports) page',
      merchantId: gmcAccountId,
      type,
      pageSize,
      nextPageToken,
      items,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Failed to fetch paginated products',
      error: err.message,
    });
  }
};
