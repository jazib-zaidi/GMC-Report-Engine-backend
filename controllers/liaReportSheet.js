const { oauth2Client, google } = require('../utils/googleClient');

exports.liaReportSheet = async (req, res) => {
  try {
    const { tokens } = req.token;
    const { exportData } = req.body;

    if (!tokens) {
      return res.status(401).send('No tokens found');
    }

    const getProductByChannel = (channel) => {
      const filteredProductData = exportData?.liaReportData?.results.filter(
        (item) => item.product_channel == channel
      );
      return filteredProductData;
    };

    const getProductByStore = (storeId) => {
      const filteredProductData = exportData?.liaReportData?.results.filter(
        (item) => item?.product_store_id == storeId
      );

      return filteredProductData;
    };

    const storeId = () => {
      return exportData.liaReportData.formattedStoreQueryData
        .filter((item) => item.store_id)
        .map((data) => `Store - ${data.store_id}`);
    };

    const getCTR = (clicks, impressions) => {
      return impressions > 0
        ? ((clicks / impressions) * 100).toFixed(2) + '%'
        : '0%';
    };

    const getROAS = (revenue, cost) => {
      return cost > 0 ? (revenue / cost).toFixed(2) : '0';
    };

    oauth2Client.setCredentials(tokens);
    const reportName = `${exportData?.adsAccount?.name} |  ${exportData?.adsAccount?.customer_id} Report`;
    const sheets = google.sheets({
      version: 'v4',
      auth: oauth2Client,
      timeout: 10000,
    });
    function formatNumber(num) {
      return num.toLocaleString();
    }
    // Create spreadsheet with 3 sheets

    const sheetTitles = [
      'Dashboard',
      'Channel - Online',
      'Channel - Local',
      ...storeId(),
      'AI Insight',
    ];

    const createResponse = await sheets.spreadsheets.create({
      resource: {
        properties: {
          title: reportName || 'LIA Report',
        },
        sheets: sheetTitles.map((title) => ({
          properties: { title },
        })),
      },
    });

    const spreadsheetId = createResponse.data.spreadsheetId;
    const channel = exportData.liaReportData.data.map((item) => {
      return item;
    });

    // // Format data for 'Report Dashboard'

    const channelRows = exportData.liaReportData.data.map((data) => {
      const ctr =
        data.impressions === 0
          ? 0
          : ((data.clicks / data.impressions) * 100).toFixed(2) + '%';
      const roas =
        data.cost === 0
          ? data.conversions_value > 0
            ? '∞'
            : 0
          : ((data.conversions_value / data.cost) * 100).toFixed(2);

      return [
        data.product_channel,
        formatNumber(data.impressions),
        formatNumber(data.clicks),
        formatNumber(ctr),
        formatNumber(data.conversions.toFixed(2)),
        data.cost.toFixed(2),
        formatNumber(roas),
      ];
    });
    const StoreRows = exportData.liaReportData.formattedStoreQueryData
      .filter((item) => item?.store_id)
      .map((data) => {
        const ctr =
          data.impressions === 0
            ? 0
            : ((data.clicks / data.impressions) * 100).toFixed(2) + '%';
        const roas =
          data.cost === 0
            ? data.conversions_value > 0
              ? '∞'
              : 0
            : ((data.conversions_value / data.cost) * 100).toFixed(2);

        return [
          data.store_id,
          formatNumber(data.impressions),
          formatNumber(data.clicks),
          formatNumber(ctr),
          formatNumber(data.conversions.toFixed(2)),
          data.cost.toFixed(2),
          formatNumber(roas),
        ];
      });

    const DashboardHeaders = [
      ['Report timeframe', ''],
      ['Total Clicks', exportData?.dashboardProf?.Total_Clicks], // Row 1
      ['ROAS', exportData?.dashboardProf?.ROAS], // Row 3
      ['Ad Spend', exportData?.dashboardProf?.Ad_Spend], // Row 4
      ['Revenue', exportData?.dashboardProf?.Revenue], // Row 5
      [''],
      ['Channel Performance', ''],
      [
        'Channel',
        'Impressions',
        'Clicks',
        'CTR',
        'Conversions',
        'Cost',
        'ROAS',
      ],
      ...channelRows,
    ];

    let productType = [];
    let googleProductCategory = [];
    for (let i = 0; i < 5; i++) {
      productType.push(`Product Type ${i + 1}`);
      googleProductCategory.push(`Google Product Category ${i + 1}`);
    }

    function getChannelSummary(data, channel) {
      const filteredProducts = data.filter(
        (item) => item.product_channel === channel
      );

      const totalClicks = filteredProducts.reduce(
        (sum, item) => sum + (item.clicks || 0),
        0
      );
      const totalCost = filteredProducts.reduce(
        (sum, item) => sum + (item.cost || 0),
        0
      );
      const totalRevenue = filteredProducts.reduce(
        (sum, item) => sum + (item.conversions_value || 0),
        0
      );
      const roas = totalCost > 0 ? (totalRevenue / totalCost).toFixed(2) : '0';

      return {
        totalClicks,
        roas,
        totalCost: totalCost.toFixed(2),
        totalRevenue: totalRevenue.toFixed(2),
      };
    }

    const onlineHeader = [
      [
        'Total Clicks',
        getChannelSummary(exportData?.liaReportData?.results, 'ONLINE')
          .totalClicks,
      ], // Row 1
      [
        'ROAS',
        getChannelSummary(exportData?.liaReportData?.results, 'ONLINE').roas,
      ], // Row 3
      [
        'Ad Spend',
        getChannelSummary(exportData?.liaReportData?.results, 'ONLINE')
          .totalCost,
      ], // Row 4
      [
        'Revenue',
        getChannelSummary(exportData?.liaReportData?.results, 'ONLINE')
          .totalRevenue,
      ], // Row 5
      [''],
      ['Online Product Performance', ''],
      [
        'Item Id',
        'Title',
        'Brand',
        ...productType,
        ...googleProductCategory,
        'Impressions',
        'Clicks',
        'CTR',
        'Conversions',
        'Cost',
        'ROAS',
      ],
    ];

    const onlineProductRows = getProductByChannel('ONLINE')?.map((item) => [
      item.product_item_id,
      item.product_title,
      item.product_brand,
      item.product_type_l1 || 'Empty',
      item.product_type_l2 || 'Empty',
      item.product_type_l3 || 'Empty',
      item.product_type_l4 || 'Empty',
      item.product_type_l5 || 'Empty',
      item.product_category_level1 || 'Empty',
      item.product_category_level2 || 'Empty',
      item.product_category_level3 || 'Empty',
      item.product_category_level4 || 'Empty',
      item.product_category_level5 || 'Empty',
      item.impressions,
      item.clicks,
      getCTR(item.clicks, item.impressions),
      item.conversions,
      item.cost.toFixed(2),
      getROAS(item.conversions_value, item.cost),
    ]);

    onlineHeader.push(...onlineProductRows);

    const localHeader = [
      [
        'Total Clicks',
        getChannelSummary(exportData?.liaReportData?.results, 'LOCAL')
          .totalClicks,
      ], // Row 1
      [
        'ROAS',
        getChannelSummary(exportData?.liaReportData?.results, 'LOCAL').roas,
      ], // Row 3
      [
        'Ad Spend',
        getChannelSummary(exportData?.liaReportData?.results, 'LOCAL')
          .totalCost,
      ], // Row 4
      [
        'Revenue',
        getChannelSummary(exportData?.liaReportData?.results, 'LOCAL')
          .totalRevenue,
      ], // Row 5
      [''],
      ['All Store', ''],
      [
        'Store Id',
        'Impressions',
        'Clicks',
        'CTR',
        'Conversions',
        'Cost',
        'ROAS',
      ],
      ...StoreRows,
    ];

    await sheets.spreadsheets.values.update(
      {
        spreadsheetId,
        range: 'Dashboard!A1',
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: DashboardHeaders,
        },
      },
      {
        timeout: 60000, // <-- 60 seconds
      }
    );

    await sheets.spreadsheets.values.update(
      {
        spreadsheetId,
        range: 'Channel - Online!A1',
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: onlineHeader,
        },
      },
      {
        timeout: 60000, // <-- 60 seconds
      }
    );
    await sheets.spreadsheets.values.update(
      {
        spreadsheetId,
        range: 'Channel - Local!A1',
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: localHeader,
        },
      },
      {
        timeout: 60000, // <-- 60 seconds
      }
    );

    const storeData = exportData.liaReportData.formattedStoreQueryData;

    for (const item of storeData) {
      if (!item.store_id) continue;

      const sheetTitle = `Store - ${item.store_id}`;
      const ctr =
        item.impressions === 0
          ? '0%'
          : `${((item.clicks / item.impressions) * 100).toFixed(2)}%`;

      const roas =
        item.cost === 0
          ? item.conversions_value > 0
            ? '∞'
            : '0'
          : ((item.conversions_value / item.cost) * 100).toFixed(2);
      const PerStoreProductRows = getProductByStore(item.store_id)?.map(
        (item) => [
          item.product_item_id,
          item.product_title,
          item.product_brand,
          item.product_type_l1 || 'Empty',
          item.product_type_l2 || 'Empty',
          item.product_type_l3 || 'Empty',
          item.product_type_l4 || 'Empty',
          item.product_type_l5 || 'Empty',
          item.product_category_level1 || 'Empty',
          item.product_category_level2 || 'Empty',
          item.product_category_level3 || 'Empty',
          item.product_category_level4 || 'Empty',
          item.product_category_level5 || 'Empty',
          item.impressions,
          item.clicks,
          getCTR(item.clicks, item.impressions),
          item.conversions,
          item.cost.toFixed(2),
          getROAS(item.conversions_value, item.cost),
        ]
      );

      const values = [
        ['Store ID', item.store_id],
        ['Impressions', formatNumber(item.impressions)],
        ['Clicks', formatNumber(item.clicks)],
        ['CTR', ctr],
        ['Conversions', formatNumber(item.conversions)],
        ['Cost', item.cost.toFixed(2)],
        ['ROAS', typeof roas === 'string' ? roas : formatNumber(roas)],
        [''],
        ['Product Performance', ''],
        [
          'Item Id',
          'Title',
          'Brand',
          ...productType,
          ...googleProductCategory,
          'Impressions',
          'Clicks',
          'CTR',
          'Conversions',
          'Cost',
          'ROAS',
        ],
        ...PerStoreProductRows,
      ];

      await sheets.spreadsheets.values.update(
        {
          spreadsheetId,
          range: `'${sheetTitle}'!A1`,
          valueInputOption: 'USER_ENTERED',
          resource: {
            values,
          },
        },
        {
          timeout: 60000, // <-- 60 seconds
        }
      );
    }
    const formatted = exportData.AiInsigth.map(({ question, answer }) => {
      const shortDescription = answer.response?.[0]?.shortDescription || '';
      const tableRows = answer.response.map((product) => ({
        title: product.product_title,
        cost: product.cost,
        conversions: product.conversions,
        clicks: product.clicks,
        impressions: product.impressions,
      }));
      return {
        question,
        shortDescription,
        table: tableRows,
      };
    });

    const flattenedData = [];

    formatted.forEach(({ question, shortDescription, table }) => {
      table.forEach((product) => {
        flattenedData.push([
          question,
          shortDescription,
          product.title,
          product.cost,
          product.conversions,
          product.clicks,
          product.impressions,
        ]);
      });
    });

    await sheets.spreadsheets.values.update(
      {
        spreadsheetId,
        range: 'AI Insight!A1',
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [
            [
              'Question',
              'Short Description',
              'Product Title',
              'Cost',
              'Conversions',
              'Clicks',
              'Impressions',
            ],
            ...flattenedData,
          ],
        },
      },
      {
        timeout: 60000, // <-- 60 seconds
      }
    );

    res.send({
      message: 'Spreadsheet with multiple sheets created and data added!',

      url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating multi-sheet spreadsheet');
  }
};
