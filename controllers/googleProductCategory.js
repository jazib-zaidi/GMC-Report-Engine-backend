const { oauth2Client, google } = require('../utils/googleClient');
const GoogleProductCategory = require('../models/GoogleProductCategory');

exports.googleProductCategory = async (req, res) => {
  try {
    const gmcAccountId = req.query.gmcAccountId;
    const { tokens } = req.token;

    oauth2Client.setCredentials(tokens);

    const content = google.content({ version: 'v2.1', auth: oauth2Client });

    // Recursive function to fetch all pages of product data
    const fetchAllDataRecursively = async (
      gmcAccountId,
      query,
      pageToken = null,
      allResults = [],
      delay = 1000 // delay in milliseconds (1 second)
    ) => {
      try {
        // Introduce a delay before making the API request
        await new Promise((resolve) => setTimeout(resolve, delay));

        const response = await content.reports.search({
          merchantId: gmcAccountId,
          requestBody: {
            query: query,
            pageSize: 5000,
            pageToken: pageToken || undefined,
          },
        });

        // Concatenate the current results to the accumulated results
        allResults = allResults.concat(response.data?.results || []);

        // If there is a nextPageToken, continue fetching recursively
        if (response.data?.nextPageToken) {
          console.log('Next page token:', response.data.nextPageToken);
          return fetchAllDataRecursively(
            gmcAccountId,
            query,
            response.data.nextPageToken,
            allResults,
            delay // Keep the delay the same for each recursive call
          );
        }

        return allResults;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Error fetching paginated data');
      }
    };

    const currentQuery = `
SELECT product_view.id, product_view.offer_id, product_view.category_l1, product_view.category_l2, product_view.category_l3, product_view.category_l4, product_view.category_l5
FROM ProductView
`;

    const products = await fetchAllDataRecursively(gmcAccountId, currentQuery);

    if (products.length === 0) {
      return res.status(404).json({ message: 'No product categories found.' });
    }

    const formattedCategories = products.map((item) => ({
      merchantId: gmcAccountId,
      offerId: item.productView.offerId,
      id: item.productView.id,
      categoryL1: item.productView.categoryL1 || 'Empty',
      categoryL2: item.productView.categoryL2 || 'Empty',
      categoryL3: item.productView.categoryL3 || 'Empty',
      categoryL4: item.productView.categoryL4 || 'Empty',
      categoryL5: item.productView.categoryL5 || 'Empty',
    }));

    await GoogleProductCategory.insertMany(formattedCategories);

    // Send success response
    res.json({ message: 'Google Product Categories saved successfully.' });
  } catch (err) {
    console.error('Error in googleProductCategory handler:', err);
    res.status(500).json({
      error: 'Failed to fetch and save Google product category.',
      err: err.message,
    });
  }
};
