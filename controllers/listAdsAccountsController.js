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
        customer_client.status
      FROM customer_client
      WHERE customer_client.status = 'ENABLED'
  
    `;

    const clientsResponse = await mccCustomer.query(queryClients);

    // Step 2: For each linked account, fetch its descriptive_name
    const accounts = await Promise.all(
      clientsResponse.map(async (clientRow) => {
        const resourceName = clientRow.customer_client.client_customer; // e.g. "customers/2071626531"
        const customerId = resourceName.split('/')[1];

        const linkedCustomer = client.Customer({
          customer_id: customerId,
          login_customer_id: '5956407828', // still manager account for auth
          refresh_token: tokens.refresh_token,
        });

        // Query customer resource for descriptive_name
        const queryName = `
          SELECT
            customer.descriptive_name
          FROM customer
          WHERE customer.resource_name = '${resourceName}'
        `;

        const nameResponse = await linkedCustomer.query(queryName);
        const descriptiveName =
          nameResponse.length > 0
            ? nameResponse[0].customer.descriptive_name
            : 'Unknown';

        return {
          customer_id: customerId,
          name: descriptiveName,
          is_manager: clientRow.customer_client.manager,
          level: clientRow.customer_client.level,
          status: clientRow.customer_client.status,
        };
      })
    );

    res.json({ accounts });
  } catch (error) {
    console.error('Error fetching account list:', error);
    res.status(500).json({ error: error.message });
  }
};
