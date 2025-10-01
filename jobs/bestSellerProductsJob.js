const { oauth2Client, google } = require('../utils/googleClient');
const { GoogleAdsApi } = require('google-ads-api');
const db = require('../utils/db'); // however you store tokens/sheet_id

// This job runs automatically by cron
async function bestSellerProductsJob() {
  try {
    // 🔑 Load tokens and sheet_id from DB
    const { tokens, customer_id, sheet_id } = await db.getJobConfig();

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

    // Calculate last 30 days
    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    const startDate = new Date(today.setDate(today.getDate() - 30))
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

    // Aggregate conversions
    const productMap = {};
    rows.forEach((row) => {
      const id = row.segments.product_item_id;
      if (!productMap[id]) {
        productMap[id] = {
          product_id: id,
          product_title: row.segments.product_title,
          conversions: 0,
          revenue: 0,
        };
      }
      productMap[id].conversions += row.metrics.conversions || 0;
      productMap[id].revenue += row.metrics.conversions_value || 0;
    });

    const sorted = Object.values(productMap).sort(
      (a, b) => b.conversions - a.conversions
    );

    const topProducts = sorted.slice(0, 50);

    // ✅ Write to Google Sheets
    if (sheet_id) {
      const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

      const values = [
        ['Product ID', 'Product Title', 'Conversions', 'Revenue'],
        ...topProducts.map((p) => [
          p.product_id,
          p.product_title,
          p.conversions,
          p.revenue,
        ]),
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId: sheet_id,
        range: 'Sheet1!A1',
        valueInputOption: 'RAW',
        requestBody: { values },
      });
    }

    console.log('✅ Monthly report updated successfully');
  } catch (err) {
    console.error('❌ Cron job failed:', err.message);
  }
}

module.exports = { bestSellerProductsJob };
