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

exports.googleProductsAudit = async (req, res) => {
  try {
    const gmcAccountId = Number(req.query.merchantId) || 238564716;

    const delayMs = Number.isFinite(Number(req.query.delay))
      ? Number(req.query.delay)
      : 0;

    const { tokens } = req.token;
    oauth2Client.setCredentials(tokens);
    const content = google.content({ version: 'v2.1', auth: oauth2Client });

    // to get product add products.list

    const prod = await content.products.list({
      merchantId: gmcAccountId,
      maxResults: 2,
    });

    for (let i = 0; i < (prod.data.resources || []).length; i++) {
      const missingAttributes = await findMissingGMCAttributes(
        prod.data.resources[i]
      );
      console.log(missingAttributes);
    }
    console.log(prod.data.resources);

    // Fetch ALL pages
    const items = await fetchAllProductStatuses(content, gmcAccountId, {
      delay: delayMs,
    });

    return res.json({
      message: 'Fetched all product statuses',
      merchantId: gmcAccountId,
      totalItems: items.length,
      items,
    });
  } catch (err) {
    console.error('Error in googleProductsAudit handler:', err);
    return res.status(500).json({
      message: 'Failed to fetch product statuses',
      error: err.message,
    });
  }
};
