const { oauth2Client, google } = require('../utils/googleClient');

exports.fetchReports = async (req, res) => {
  try {
    const { tokens } = req.token;
    const { gmcAccountId, date, filter } = req.body;

    if (!gmcAccountId) {
      return res
        .status(400)
        .json({ message: 'Missing gmcAccountId in request body' });
    }

    oauth2Client.setCredentials(tokens);
    const content = google.content({ version: 'v2.1', auth: oauth2Client });
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const fetchAllDataRecursively = async (
      gmcAccountId,
      query,
      pageToken = null,
      allResults = [],
      count = 0
    ) => {
      if (count > 0) await sleep(300);

      const response = await content.reports.search({
        merchantId: gmcAccountId,
        requestBody: {
          query: query,
          pageSize: 5000,
          pageToken: pageToken || undefined,
        },
      });

      allResults = allResults.concat(response.data?.results || []);

      if (response.data?.nextPageToken) {
        return fetchAllDataRecursively(
          gmcAccountId,
          query,
          response.data.nextPageToken,
          allResults,
          count + 1
        );
      }

      return allResults;
    };

    //https://developers.google.com/shopping-content/reference/rest/v2.1/reports/search#Segments
    //https://developers.google.com/shopping-content/guides/reports/fields?hl=en

    const productType = Array.from({ length: 5 })
      .map((_, i) => {
        return `segments.product_type_l${i + 1}`;
      })
      .join(',');

    const customLabel = Array.from({ length: 5 })
      .map((_, i) => {
        return `segments.custom_label${i}`;
      })
      .join(',');

    const getAllResults = async (gmcAccountId, startDate, endDate, filter) => {
      let currentQuery = `
        SELECT segments.offer_id, segments.date, segments.title, segments.brand, ${productType}, ${customLabel},
               metrics.clicks, metrics.impressions, metrics.ctr, metrics.conversions
        FROM MerchantPerformanceView
        WHERE segments.date BETWEEN '${startDate}' AND '${endDate}'
          AND segments.program = 'FREE_PRODUCT_LISTING'

      `;

      const previousYearStart = new Date(startDate);
      previousYearStart.setFullYear(previousYearStart.getFullYear() - 1);

      const previousYearEnd = new Date(endDate);
      previousYearEnd.setFullYear(previousYearEnd.getFullYear() - 1);

      let previousQuery = `
        SELECT segments.offer_id, segments.date, segments.title, segments.brand,segments.custom_label0,
               metrics.clicks, metrics.impressions, metrics.ctr, metrics.conversions
        FROM MerchantPerformanceView
        WHERE segments.date BETWEEN '${
          previousYearStart.toISOString().split('T')[0]
        }' AND '${previousYearEnd.toISOString().split('T')[0]}'
          AND segments.program = 'FREE_PRODUCT_LISTING'
      `;
      function camelToSnakeCase(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
      }
      const combinedFilter = () => {
        return `segments.${camelToSnakeCase(filter.selectedAttribute)} = "${
          filter.searchValue
        }"`;
      };

      if (filter?.selectedAttribute) {
        currentQuery += ` AND ${combinedFilter()}`;
        previousQuery += ` AND ${combinedFilter()}`;
      }

      const [current, previous] = await Promise.all([
        fetchAllDataRecursively(gmcAccountId, currentQuery),
        fetchAllDataRecursively(gmcAccountId, previousQuery),
      ]);

      return { current, previous };
    };

    const getBrandResults = async (gmcAccountId, startDate, endDate) => {
      let currentQuery = `
        SELECT segments.brand,
               metrics.clicks, metrics.impressions, metrics.ctr, metrics.conversions
        FROM MerchantPerformanceView
        WHERE segments.date BETWEEN '${startDate}' AND '${endDate}'
          AND segments.program = 'FREE_PRODUCT_LISTING'
      `;

      const previousYearStart = new Date(startDate);
      previousYearStart.setFullYear(previousYearStart.getFullYear() - 1);

      const previousYearEnd = new Date(endDate);
      previousYearEnd.setFullYear(previousYearEnd.getFullYear() - 1);

      let previousQuery = `
        SELECT  segments.brand,
               metrics.clicks, metrics.impressions, metrics.ctr, metrics.conversions
        FROM MerchantPerformanceView
        WHERE segments.date BETWEEN '${
          previousYearStart.toISOString().split('T')[0]
        }' AND '${previousYearEnd.toISOString().split('T')[0]}'
          AND segments.program = 'FREE_PRODUCT_LISTING'
      `;
      function camelToSnakeCase(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
      }
      const combinedFilter = () => {
        return `segments.${camelToSnakeCase(filter.selectedAttribute)} = "${
          filter.searchValue
        }"`;
      };

      if (filter?.selectedAttribute) {
        currentQuery += ` AND ${combinedFilter()}`;
        previousQuery += ` AND ${combinedFilter()}`;
      }

      const [current, previous] = await Promise.all([
        fetchAllDataRecursively(gmcAccountId, currentQuery),
        fetchAllDataRecursively(gmcAccountId, previousQuery),
      ]);

      return { current, previous };
    };

    const getSelectedColumnResults = async (
      gmcAccountId,
      startDate,
      endDate,
      type
    ) => {
      let currentQuery = `
        SELECT segments.${type},
               metrics.clicks, metrics.impressions, metrics.ctr, metrics.conversions
        FROM MerchantPerformanceView
        WHERE segments.date BETWEEN '${startDate}' AND '${endDate}'
          AND segments.program = 'FREE_PRODUCT_LISTING'
      `;

      const previousYearStart = new Date(startDate);
      previousYearStart.setFullYear(previousYearStart.getFullYear() - 1);

      const previousYearEnd = new Date(endDate);
      previousYearEnd.setFullYear(previousYearEnd.getFullYear() - 1);

      let previousQuery = `
        SELECT  segments.${type},
               metrics.clicks, metrics.impressions, metrics.ctr, metrics.conversions
        FROM MerchantPerformanceView
        WHERE segments.date BETWEEN '${
          previousYearStart.toISOString().split('T')[0]
        }' AND '${previousYearEnd.toISOString().split('T')[0]}'
          AND segments.program = 'FREE_PRODUCT_LISTING'
      `;
      function camelToSnakeCase(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
      }
      const combinedFilter = () => {
        return `segments.${camelToSnakeCase(filter.selectedAttribute)} = "${
          filter.searchValue
        }"`;
      };

      if (filter?.selectedAttribute) {
        currentQuery += ` AND ${combinedFilter()}`;
        previousQuery += ` AND ${combinedFilter()}`;
      }
      const [current, previous] = await Promise.all([
        fetchAllDataRecursively(gmcAccountId, currentQuery),
        fetchAllDataRecursively(gmcAccountId, previousQuery),
      ]);

      return { current, previous };
    };

    const allBrandResults = await getBrandResults(
      gmcAccountId,
      date.startDate,
      date.endDate
    );
    const productTypeL1 = await getSelectedColumnResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      'product_type_l1'
    );
    const productTypeL2 = await getSelectedColumnResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      'product_type_l2'
    );
    const productTypeL3 = await getSelectedColumnResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      'product_type_l3'
    );
    const productTypeL4 = await getSelectedColumnResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      'product_type_l4'
    );
    const productTypeL5 = await getSelectedColumnResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      'product_type_l5'
    );

    const categoryL1 = await getSelectedColumnResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      'category_l1'
    );
    const categoryL2 = await getSelectedColumnResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      'category_l2'
    );
    const categoryL3 = await getSelectedColumnResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      'category_l3'
    );
    const categoryL4 = await getSelectedColumnResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      'category_l4'
    );
    const categoryL5 = await getSelectedColumnResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      'category_l5'
    );

    const { current, previous } = await getAllResults(
      gmcAccountId,
      date.startDate,
      date.endDate,
      filter
    );

    const summarize = (data) => {
      if (!data) return { impressions: 0, clicks: 0 };
      let impressions = 0,
        clicks = 0;
      data.forEach((r) => {
        impressions += +r.metrics.impressions;
        clicks += +r.metrics.clicks;
      });
      return { impressions, clicks };
    };

    const formatNumber = (num) => {
      return num.toLocaleString('en-US');
    };

    const calculateChange = (current, previous) => {
      const change = current - previous;
      const percentChange =
        previous === 0 ? 0 : ((change / previous) * 100).toFixed(2);

      return {
        change: formatNumber(change),
        percent: `${percentChange}%`,
      };
    };
    const currentSummary = summarize(current);
    const previousSummary = summarize(previous);

    const segmentByMonth = (data = []) => {
      const result = {};

      data.forEach((entry) => {
        const dateSegment = entry?.segments?.date;
        const metrics = entry?.metrics;

        if (!dateSegment || !metrics) return;

        const monthNum = dateSegment.month;
        const year = dateSegment.year;
        const monthKey = `${year}-${String(monthNum).padStart(2, '0')}`;
        const monthLabel = new Date(year, monthNum - 1).toLocaleString(
          'default',
          { month: 'short' }
        );

        if (!result[monthKey]) {
          result[monthKey] = {
            name: monthLabel,
            impressions: 0,
            clicks: 0,
            conversions: 0,
          };
        }

        result[monthKey].impressions += parseInt(metrics.impressions || 0);
        result[monthKey].clicks += parseInt(metrics.clicks || 0);
        result[monthKey].conversions += parseInt(metrics.conversions || 0);
      });

      return Object.entries(result)
        .sort(([a], [b]) => new Date(a) - new Date(b))
        .map(([_, value]) => value);
    };

    // to fetch google product categery for all product
    // const newData = await content.reports.search({
    //   merchantId: gmcAccountId,
    //   requestBody: {
    //     query: `
    //     SELECT product_view.id,product_view.category_l1,product_view.category_l2,product_view.category_l3,product_view.category_l4,product_view.category_l5
    //     FROM ProductView
    //   `,
    //     pageSize: 5000,
    //   },
    // });

    res.json({
      current: {
        summary: {
          impressions: formatNumber(currentSummary.impressions),
          clicks: formatNumber(currentSummary.clicks),
        },
        data: current,
        chartData: segmentByMonth(current),
        brand: allBrandResults.current,
        productTypeL1: productTypeL1?.current,
        productTypeL2: productTypeL2?.current,
        productTypeL3: productTypeL3?.current,
        productTypeL4: productTypeL4?.current,
        productTypeL5: productTypeL5?.current,
        categoryL1: categoryL1?.current,
        categoryL2: categoryL2?.current,
        categoryL3: categoryL3?.current,
        categoryL4: categoryL4?.current,
        categoryL5: categoryL5?.current,
      },
      previous: {
        summary: {
          impressions: formatNumber(previousSummary.impressions),
          clicks: formatNumber(previousSummary.clicks),
        },
        data: previous,
        chartData: segmentByMonth(previous),
        brand: allBrandResults.previous,
        productTypeL1: productTypeL1.previous,
        productTypeL2: productTypeL2.previous,
        productTypeL3: productTypeL3.previous,
        productTypeL4: productTypeL4.previous,
        productTypeL5: productTypeL5.previous,
        categoryL1: categoryL1.previous,
        categoryL2: categoryL2.previous,
        categoryL3: categoryL3.previous,
        categoryL4: categoryL4.previous,
        categoryL5: categoryL5.previous,
      },

      change: {
        impressions: calculateChange(
          currentSummary.impressions,
          previousSummary.impressions
        ),
        clicks: calculateChange(currentSummary.clicks, previousSummary.clicks),
      },
    });
  } catch (error) {
    console.error('Error fetching reports:', error);

    if (error?.response?.data?.error) {
      return res.status(502).json({
        message: 'Google API error',
        details: error.response.data.error,
      });
    }

    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};
