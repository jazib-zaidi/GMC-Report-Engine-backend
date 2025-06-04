function getGAQLForQuestion(question, startDate, endDate) {
  const dateFilter = `segments.date BETWEEN '${startDate}' AND '${endDate}'`;
  let queryData = '';

  switch (question) {
    case 'Which products have the highest ad spend but zero conversions?':
      queryData = `
        SELECT
        segments.product_title,
        segments.product_item_id,
          metrics.cost_micros,
        segments.product_merchant_id,
          metrics.conversions
        FROM shopping_performance_view
        WHERE ${dateFilter} AND metrics.conversions = 0
        ORDER BY metrics.cost_micros DESC
      `;
      break;

    case 'What are the top-performing products by ROAS?':
      queryData = `
SELECT
  segments.product_title,
  segments.product_item_id,
  segments.product_merchant_id,
  metrics.conversions_value,
  metrics.conversions,
  metrics.cost_micros
FROM shopping_performance_view
WHERE ${dateFilter}
  AND metrics.conversions > 0
  AND metrics.cost_micros > 0
ORDER BY metrics.conversions_value DESC
      `;
      break;

    case 'Which product have the lowest click-through rates?':
      queryData = `
        SELECT
        segments.product_title,
        segments.product_item_id,
        segments.product_merchant_id,
        metrics.ctr
        FROM shopping_performance_view
        WHERE ${dateFilter} 
        ORDER BY metrics.ctr ASC
      `;
      break;

    default:
      queryData = '-- Question not recognized --';
  }

  return queryData.trim();
}

module.exports = {
  getGAQLForQuestion,
};
