const { oauth2Client } = require('../utils/googleClient');
const { GoogleAdsApi } = require('google-ads-api');
const { google } = require('googleapis');

exports.bestSellerProducts = async (req, res) => {
  try {
    const { tokens } = req.token;
    const { customer_id, time_frame, sheet_id } = req.query;
    oauth2Client.setCredentials(tokens);

    const client = new GoogleAdsApi({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      developer_token: process.env.DEVELOPER_TOKEN,
    });

    const customer = client.Customer({
      customer_id,
      login_customer_id: process.env.LOGIN_CUSTOMER_ID,
      refresh_token: tokens.refresh_token,
    });

    const timeFrame = Number(time_frame) || 90;
    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    const startDate = new Date(today.setDate(today.getDate() - timeFrame))
      .toISOString()
      .split('T')[0];

    const query = `
      SELECT
        segments.product_item_id,
        segments.product_title,
        metrics.conversions,
        metrics.conversions_value
      FROM shopping_performance_view
      WHERE segments.date BETWEEN '${startDate}' AND '${endDate}'
    `;

    const rows = await customer.query(query);

    const productMap = {};
    rows.forEach((row) => {
      const id = row.segments?.product_item_id;
      if (!productMap[id]) {
        productMap[id] = {
          product_id: id,
          product_title: row.segments?.product_title,
          conversions: 0,
          revenue: 0,
          custom_label: '',
        };
      }
      productMap[id].conversions += row.metrics.conversions || 0;
      productMap[id].revenue += row.metrics.conversions_value || 0;
      productMap[
        id
      ].custom_label = `Top ${req.query.limit} Best-Selling Products`;
    });

    const sorted = Object.values(productMap).sort(
      (a, b) => b.conversions - a.conversions
    );

    const topN = req.query.limit ? parseInt(req.query.limit, 10) : 50;
    const topProducts = sorted.slice(0, topN);

    if (sheet_id) {
      const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

      await sheets.spreadsheets.values.clear({
        spreadsheetId: sheet_id,
        range: 'Sheet1!A:Z',
      });

      const values = [
        [
          'Product ID',
          'Product Title',
          'Conversions',
          'Revenue',
          'Custom Label',
        ],
        ...topProducts.map((p) => [
          p.product_id,
          p.product_title,
          p.conversions,
          p.revenue,
          p.custom_label,
        ]),
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId: sheet_id,
        range: 'Sheet1!A1',
        valueInputOption: 'RAW',
        requestBody: { values },
      });
    }

    res.json({
      msg: 'success',
      top_products: topProducts,
    });
  } catch (error) {
    console.error('Google Ads API error:', error);
    res.status(500).json({ error: error.message });
  }
};
