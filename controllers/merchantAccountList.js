const jwt = require('jsonwebtoken');
const { oauth2Client, google } = require('../utils/googleClient');

exports.merchantAccountList = async (req, res) => {
  try {
    const { tokens } = req.token;
    oauth2Client.setCredentials(tokens);

    const content = google.content({ version: 'v2.1', auth: oauth2Client });
    const authInfo = await content.accounts.authinfo();

    const accountIdentifiers = authInfo.data.accountIdentifiers || [];
    if (accountIdentifiers.length === 0) {
      return res.status(404).json({ error: 'No accounts found.' });
    }
    const accountDetails = await Promise.all(
      accountIdentifiers.map(async (account) => {
        if (!account.merchantId) {
          return null;
        }
        try {
          const { data } = await content.accounts.get({
            merchantId: account.merchantId,
            accountId: account.merchantId,
          });

          return {
            merchantId: account.merchantId,
            name: data.name,
            websiteUrl: data.websiteUrl,
          };
        } catch (err) {
          console.error(
            `Failed to fetch account ${account.merchantId}:`,
            err.message
          );
          return null;
        }
      })
    );

    const filteredAccounts = accountDetails.filter(Boolean);

    res.json({ accounts: filteredAccounts });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'Failed to fetch merchant accounts.', errr: err });
  }
};
