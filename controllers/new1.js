// controllers/googleProductsAudit.js
const { oauth2Client, google } = require('../utils/googleClient');
const { findMissingGMCAttributes } = require('../utils/AiQueryGeneration');

/**
 * Fetch ALL productstatuses via Content API v2.1 (recursive pagination)
 */
async function fetchAllProductStatuses(content, merchantId, { delay = 0 }) {
  let allItems = [];
  let pageToken = null;

  do {
    if (delay) await new Promise((r) => setTimeout(r, delay));

    const res = await content.products.list({
      merchantId,
      pageToken: pageToken || undefined,
      maxResults: 250,
    });

    const items = res?.data?.resources || [];
    allItems.push(...items);
    pageToken = res?.data?.nextPageToken || null;
    console.log(pageToken);
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
    // const items = await fetchAllProductStatuses(content, gmcAccountId, {
    //   delay: delayMs,
    // });

    // to get product add products.list

    // const prod = await content.products.list({
    //   merchantId: gmcAccountId,
    // });
    // console.log(prod);
    let query = `
        SELECT segments.offer_id,segments.title, segments.brand,
               metrics.clicks, metrics.impressions
        FROM MerchantPerformanceView
        WHERE segments.date BETWEEN '2025-09-01' AND '2025-09-30'
      `;
    const response = await fetchAllDataRecursively(gmcAccountId, query);

    // console.log(response);
    // for (let i = 0; i < (prod.data.resources || []).length; i++) {
    //   const missingAttributes = await findMissingGMCAttributes(
    //     prod.data.resources[i]
    //   );
    //   console.log(missingAttributes);
    // }
    // console.log(prod.data.resources);

    // Fetch ALL pages
    // const items = await fetchAllProductStatuses(content, gmcAccountId, {
    //   delay: delayMs,
    // });
    const items = [];

    return res.json({
      message: 'Fetched all product statuses',
      merchantId: gmcAccountId,
      totalItems: items.length,
      // total: response.length,
      // itemStatus: prod,
      response,
    });
  } catch (err) {
    console.error('Error in googleProductsAudit handler:', err);
    return res.status(500).json({
      message: 'Failed to fetch product statuses',
      error: err.message,
    });
  }
};
