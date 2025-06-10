const { oauth2Client } = require('../utils/googleClient');
const { GoogleAdsApi } = require('google-ads-api');

exports.listAdsAccounts = async (req, res) => {
  try {
    const { tokens } = req.token;
    oauth2Client.setCredentials(tokens);

    const client = new GoogleAdsApi({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      developer_token: process.env.DEVELOPER_TOKEN,
    });

    // Set login_customer_id for manager account context
    const mccCustomer = client.Customer({
      customer_id: '5956407828', // Your manager account ID
      login_customer_id: '5956407828', // Important: set login_customer_id to manager's ID
      refresh_token: tokens.refresh_token,
    });

    // Step 1: Fetch linked accounts
    const queryClients = `
      SELECT
        customer_client.client_customer,
        customer_client.level,
        customer_client.manager,
        customer_client.status,
        customer_client.descriptive_name
      FROM customer_client
      WHERE customer_client.status = 'ENABLED'
  
    `;

    const clientsResponse = await mccCustomer.query(queryClients);

    const accounts = clientsResponse.map((clientRow) => {
      const resourceName = clientRow.customer_client.client_customer;
      const customerId = resourceName.split('/')[1];

      return {
        customer_id: customerId,
        name: clientRow.customer_client.descriptive_name,
      };
    });

    res.json({ accounts });
  } catch (error) {
    console.error('Error fetching account list:', error);
    res.status(500).json({ error: error.message });
  }
};
