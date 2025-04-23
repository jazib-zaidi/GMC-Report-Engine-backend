const jwt = require('jsonwebtoken');
const { oauth2Client, google } = require('../utils/googleClient');
exports.googleProductCategory = async (req, res) => {
  try {
    const { tokens } = req.token;
    oauth2Client.setCredentials(tokens);

    const content = google.content({ version: 'v2.1', auth: oauth2Client });

    const response = await content.reports.search({
      merchantId: gmcAccountId,
      requestBody: {
        query: `
        SELECT product_view.id,
        FROM ProductView
      `,
        pageSize: 5000,
      },
    });

    const filteredAccounts = accountDetails.filter(Boolean);

    res.json({ accounts: filteredAccounts });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'Failed to fetch merchant accounts.', errr: err });
  }
};
