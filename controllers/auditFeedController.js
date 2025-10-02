// controllers/googleProductsAudit.js
const { oauth2Client, google } = require('../utils/googleClient');

/**
 * Fetch ALL productstatuses via Content API v2.1 (recursive pagination)
 */
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
  } while (pageToken);

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

exports.googleProductsAudit = async (req, res) => {
  try {
    const gmcAccountId = Number(req.query.merchantId) || 238564716;

    const delayMs = Number.isFinite(Number(req.query.delay))
      ? Number(req.query.delay)
      : 0;

    const { tokens } = req.token;
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    oauth2Client.setCredentials(tokens);
    const content = google.content({ version: 'v2.1', auth: oauth2Client });
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

    // Fetch ALL pages
    const items = await fetchAllProductStatuses(content, gmcAccountId);

    function formatDate(date) {
      return date.toISOString().split('T')[0]; // YYYY-MM-DD
    }

    const end = new Date(); // today
    const start = new Date();
    start.setDate(end.getDate() - 30); // go back 30 days

    let query = `
        SELECT segments.offer_id,segments.title, segments.brand,
               metrics.clicks, metrics.impressions, metrics.ctr
        FROM MerchantPerformanceView
        WHERE segments.date BETWEEN '${formatDate(start)}' AND '${formatDate(
      end
    )}'
      `;
    const response = await fetchAllDataRecursively(gmcAccountId, query);

    return res.json({
      message: 'Fetched all product statuses',
      merchantId: gmcAccountId,
      totalItems: items.length,
      itemStatus: items,
      productMetrics: response,
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

    return res.json({
      message: 'Fetched all product',
      merchantId: gmcAccountId,
      totalItems: items.length,
      items,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Failed to fetch product statuses',
      error: err.message,
    });
  }
};
