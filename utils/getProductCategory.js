const GoogleProductCategory = require('../models/GoogleProductCategory');

const getProductCategory = async (merchantId, offerId) => {
  try {
    // Build the query based on available parameters
    let query = { merchantId };

    if (offerId) {
      query.offerId = offerId;
    }

    const productCategory = await GoogleProductCategory.findOne(query);

    // Check if no product category was found
    if (!productCategory) {
      // Return a default response or empty category if no result found
      return {
        categoryL1: 'No Category',
        categoryL2: 'No Category',
        categoryL3: 'No Category',
        categoryL4: 'No Category',
        categoryL5: 'No Category',
      };
    }

    return productCategory;
  } catch (error) {
    console.error('Error fetching product category:', error);
    throw new Error('Failed to fetch product category.');
  }
};

module.exports = { getProductCategory };
