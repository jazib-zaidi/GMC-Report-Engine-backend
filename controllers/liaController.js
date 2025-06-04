const {
  productType,
  googleProductCategory,
  liaGoogleProductCategory,
} = require('../utils/getCategory');
const { oauth2Client } = require('../utils/googleClient');
const { GoogleAdsApi } = require('google-ads-api');
const { loadTaxonomyMap } = require('../utils/loadTaxonomyMap');
const { generateQuery, aiDescription } = require('../utils/AiQueryGeneration');
const productData = require('../rundna.json');
const { getGAQLForQuestion } = require('../utles/utls');
function formatNumber(num) {
  return num?.toLocaleString();
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value || 0);
};
exports.lia = async (req, res) => {
  try {
    const { tokens } = req.token;
    oauth2Client.setCredentials(tokens);

    const client = new GoogleAdsApi({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      developer_token: process.env.DEVELOPER_TOKEN,
    });

    const { channel, dateRange, adsAccountId } = req.body;

    const ProductChannelEnum = {
      0: 'UNSPECIFIED',
      1: 'UNKNOWN',
      2: 'ONLINE',
      3: 'LOCAL',
    };
    // customer_id: '7464049119',

    const customer = client.Customer({
      customer_id: adsAccountId, // Your manager account ID
      login_customer_id: '5956407828',
      refresh_token: tokens.refresh_token,
    });

    const filters = [];
    let startDate = '2025-04-23';
    let endDate = '2025-05-22';
    filters.push(
      `segments.date BETWEEN '${dateRange.startDate}' AND '${dateRange.endDate}'`
    );

    if (
      channel.toUpperCase() === 'LOCAL' ||
      channel.toUpperCase() === 'ONLINE'
    ) {
      filters.push(`segments.product_channel = '${channel.toUpperCase()}'`);
    }

    const query = `
      SELECT
        segments.product_title,
        segments.product_store_id,
        segments.product_merchant_id,
        segments.product_item_id,
        ${productType},
        ${liaGoogleProductCategory},
        metrics.clicks,
        metrics.conversions,
        metrics.cost_micros,
        metrics.conversions_value,
        metrics.impressions,
        segments.product_channel,
        segments.product_brand,
        segments.product_country
      FROM shopping_performance_view
      WHERE ${filters.join(' AND ')}
    `;

    const storeQuery = `
      SELECT
        segments.product_channel,
        metrics.clicks,
        metrics.impressions,
        metrics.conversions,
        metrics.cost_micros,
        metrics.conversions_value
      FROM shopping_performance_view
        WHERE ${filters.join(' AND ')}
    `;

    const storeData = await customer.query(storeQuery);
    const storeQueryFeild = `
      SELECT
        segments.product_store_id,
        metrics.clicks,
        metrics.impressions,
        metrics.conversions,
        metrics.cost_micros,
        metrics.conversions_value
      FROM shopping_performance_view
        WHERE ${filters.join(' AND ')}
    `;
    const unitsSold = `
      SELECT
        segments.product_channel,
         metrics.units_sold
         FROM shopping_performance_view
        WHERE ${filters.join(' AND ')}
    `;

    const storequeryData = await customer.query(storeQueryFeild);
    const units_sold = await customer.query(unitsSold);

    const formattedStoreData = storeData.map((row) => ({
      product_channel:
        ProductChannelEnum[row.segments?.product_channel] || 'UNKNOWN',
      store_id: row.segments?.product_store_id,
      clicks: row.metrics?.clicks || 0,
      impressions: row.metrics?.impressions || 0,
      conversions: row.metrics?.conversions || 0,
      cost: (row.metrics?.cost_micros || 0) / 1_000_000,
      conversions_value: row.metrics?.conversions_value || 0,
    }));
    const formattedStoreQueryData = storequeryData.map((row) => ({
      store_id: row.segments?.product_store_id,
      clicks: row.metrics?.clicks || 0,
      impressions: row.metrics?.impressions || 0,
      conversions: row.metrics?.conversions || 0,
      cost: (row.metrics?.cost_micros || 0) / 1_000_000,
      conversions_value: row.metrics?.conversions_value || 0,
    }));
    const response = await customer.query(query);
    const extractCategoryId = (resourceName) => {
      if (!resourceName) return null;
      const match = resourceName.match(/~(\d+)$/);
      return match ? match[1] : null;
    };
    const taxonomyMap = loadTaxonomyMap();
    const results = response.map((row) => {
      const level1Id = extractCategoryId(row.segments?.product_category_level1);
      const level2Id = extractCategoryId(row.segments?.product_category_level2);
      const level3Id = extractCategoryId(row.segments?.product_category_level3);
      const level4Id = extractCategoryId(row.segments?.product_category_level4);

      const metaData = productData[row.segments?.product_merchant_id]?.filter(
        (item) =>
          item['Item ID']?.toLowerCase() ===
          row.segments?.product_item_id?.toLowerCase()
      );

      return {
        product_title: row.segments?.product_title,
        product_store_id: row.segments?.product_store_id,
        product_merchant_id: row.segments?.product_merchant_id,
        product_item_id: row.segments?.product_item_id,
        clicks: row.metrics?.clicks || 0,
        conversions: row.metrics?.conversions || 0,
        impressions: row.metrics?.impressions || 0,
        cost: (row.metrics?.cost_micros || 0) / 1_000_000,
        conversions_value: row.metrics?.conversions_value || 0,
        channel: row.segments?.product_channel,
        product_channel:
          ProductChannelEnum[row.segments?.product_channel] || 'UNKNOWN',

        product_brand: row.segments?.product_brand,
        product_country: row.segments?.product_country,
        product_type_l1: row.segments?.product_type_l1 || '',
        product_type_l2: row.segments?.product_type_l2 || '',
        product_type_l3: row.segments?.product_type_l3 || '',
        product_type_l4: row.segments?.product_type_l4 || '',
        product_type_l5: row.segments?.product_type_l5 || '',
        product_category_level1: taxonomyMap[level1Id] || '',
        product_category_level2: taxonomyMap[level2Id] || '',
        product_category_level3: taxonomyMap[level3Id] || '',
        product_category_level4: taxonomyMap[level4Id] || '',
        metaData: metaData || [],
      };
    });

    const storeProductMap = {};

    for (const row of results) {
      const storeId = row.product_store_id || 'UNKNOWN';
      if (!storeProductMap[storeId]) {
        storeProductMap[storeId] = [];
      }
      storeProductMap[storeId].push(row);
    }

    const topProductsPerStore = {};

    for (const [storeId, products] of Object.entries(storeProductMap)) {
      const sorted = products.sort(
        (a, b) => (b.conversions || 0) - (a.conversions || 0)
      );
      topProductsPerStore[storeId] = sorted.slice(0, 5);
    }

    res.json({
      data: formattedStoreData,
      topProductsPerStore,
      results,
      formattedStoreQueryData,
      units_sold,
    });
  } catch (error) {
    console.error('Google Ads API error:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.liaStoreData = async (req, res) => {
  try {
    const { tokens } = req.token;
    oauth2Client.setCredentials(tokens);

    const client = new GoogleAdsApi({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      developer_token: process.env.DEVELOPER_TOKEN,
    });

    const { dateRange, adsAccountId, storeId } = req.body;
    const taxonomyMap = loadTaxonomyMap();
    const customer = client.Customer({
      customer_id: adsAccountId, // Your manager account ID
      login_customer_id: '5956407828',
      refresh_token: tokens.refresh_token,
    });

    const filters = [];

    filters.push(
      `segments.date BETWEEN '${dateRange.startDate}' AND '${dateRange.endDate}'`
    );
    filters.push(`segments.product_store_id = '${storeId}'`);
    const extractCategoryId = (resourceName) => {
      if (!resourceName) return null;
      const match = resourceName.match(/~(\d+)$/);
      return match ? match[1] : null;
    };

    const query = `
      SELECT
        segments.product_title,
        segments.product_store_id,
        segments.product_merchant_id,
        segments.product_item_id,
        ${productType},
        ${liaGoogleProductCategory},
        metrics.clicks,
        metrics.conversions,
        metrics.cost_micros,
        metrics.conversions_value,
        metrics.impressions,
        segments.product_channel,
        segments.product_brand,
        segments.product_country
      FROM shopping_performance_view
      WHERE ${filters.join(' AND ')}
    `;

    const response = await customer.query(query);

    const results = response.map((row) => {
      const level1Id = extractCategoryId(row.segments?.product_category_level1);
      const level2Id = extractCategoryId(row.segments?.product_category_level2);
      const level3Id = extractCategoryId(row.segments?.product_category_level3);
      const level4Id = extractCategoryId(row.segments?.product_category_level4);
      const metaData = productData[row.segments?.product_merchant_id]?.filter(
        (item) =>
          item['Item ID']?.toLowerCase() ===
          row.segments?.product_item_id?.toLowerCase()
      );

      return {
        product_title: row.segments?.product_title,
        product_store_id: row.segments?.product_store_id,
        product_merchant_id: row.segments?.product_merchant_id,
        product_item_id: row.segments?.product_item_id,
        clicks: row.metrics?.clicks || 0,
        conversions: row.metrics?.conversions || 0,
        impressions: row.metrics?.impressions || 0,
        cost: (row.metrics?.cost_micros || 0) / 1_000_000,
        conversions_value: row.metrics?.conversions_value || 0,
        channel: row.segments?.product_channel,
        product_brand: row.segments?.product_brand,
        product_country: row.segments?.product_country,
        product_type_l1: row.segments?.product_type_l1 || '',
        product_type_l2: row.segments?.product_type_l2 || '',
        product_type_l3: row.segments?.product_type_l3 || '',
        product_type_l4: row.segments?.product_type_l4 || '',
        product_type_l5: row.segments?.product_type_l5 || '',
        product_category_level1: taxonomyMap[level1Id] || '',
        product_category_level2: taxonomyMap[level2Id] || '',
        product_category_level3: taxonomyMap[level3Id] || '',
        product_category_level4: taxonomyMap[level4Id] || '',
        metaData: metaData || [],
      };
    });

    res.json({
      data: results,
    });
  } catch (error) {
    console.error('Google Ads API error:', error);
    res.status(500).json({ error: error.message });
  }
};
exports.AiInsigth = async (req, res) => {
  try {
    const { tokens } = req.token;
    oauth2Client.setCredentials(tokens);
    const { question, adsAccountId } = req.body;
    const client = new GoogleAdsApi({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      developer_token: process.env.DEVELOPER_TOKEN,
    });

    const customer = client.Customer({
      customer_id: adsAccountId, // Your manager account ID
      login_customer_id: '5956407828',
      refresh_token: tokens.refresh_token,
    });
    const extractCategoryId = (resourceName) => {
      if (!resourceName) return null;
      const match = resourceName.match(/~(\d+)$/);
      return match ? match[1] : null;
    };
    // const queryDataRaw = await generateQuery(question);

    let startDate = '2025-05-05';
    let endDate = '2025-06-04';

    const query = getGAQLForQuestion(question, startDate, endDate);

    const ProductChannelEnum = {
      0: 'UNSPECIFIED',
      1: 'UNKNOWN',
      2: 'ONLINE',
      3: 'LOCAL',
    };

    const response = await customer.query(query);

    const shortDescription = await aiDescription(
      question,
      response.slice(0, 10),
      (totalproduct = response.length)
    );

    const results = response.slice(0, 10).map((row) => {
      const metaData = productData[row.segments?.product_merchant_id]?.filter(
        (item) =>
          item['Item ID']?.toLowerCase() ===
          row.segments?.product_item_id?.toLowerCase()
      );

      return {
        product_title: row.segments?.product_title,
        product_store_id: row.segments?.product_store_id,
        product_merchant_id: row.segments?.product_merchant_id,
        product_item_id: row.segments?.product_item_id,
        clicks: row.metrics?.clicks || 0,
        ctr: formatNumber(row?.metrics?.ctr) || 0,
        roas: formatNumber(
          row?.metrics?.conversions_value /
            (row.metrics.cost_micros / 1_000_000)
        ),
        conversions: formatNumber(row.metrics?.conversions) || 0,
        impressions: formatNumber(row.metrics?.impressions) || 0,
        cost: formatNumber(row.metrics?.cost_micros / 1_000_000) || 0,
        conversions_value: formatNumber(row.metrics?.conversions_value) || 0,
        metaData: metaData || [],
        shortDescription,
      };
    });

    res.json({
      question: question,
      response: results,
      queryData: query,
      data: response,
    });
  } catch (error) {
    console.error('Google Ads API error:', error);
    res.status(500).json({ error: error.message });
  }
};
