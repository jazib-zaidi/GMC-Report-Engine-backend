const { oauth2Client, google } = require('../utils/googleClient');

exports.liaReportSheet = async (req, res) => {
  try {
    const { tokens } = req.token;
    const { exportData } = req.body;

    if (!tokens) {
      return res.status(401).send('No tokens found');
    }
    const ProductChannelEnum = {
      0: 'UNSPECIFIED',
      1: 'UNKNOWN',
      2: 'ONLINE',
      3: 'LOCAL',
    };

    const getUnitSold = (sold, channel = null) => {
      let sum = 0;

      const data = sold.map((i) => {
        sum += i.metrics.units_sold;
        return {
          product_channel: ProductChannelEnum[i.segments.product_channel],
          units_sold: i.metrics.units_sold,
        };
      });

      if (channel) {
        const h = data.filter((item) => {
          if (item.product_channel == channel) {
            return item;
          }
        });
        sum = h[0]?.units_sold;
      }

      return Math.ceil(sum);
    };
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

    const mapabl = (id) => {
      const filterData = exportData?.mapableStore.filter((i) => {
        if (i.id == id.split('/')[1]) {
          return i;
        }
      });

      return filterData[0]?.name || id;
    };
    const storeId = () => {
      return exportData.liaReportData.formattedStoreQueryData
        .filter((item) => item.store_id)
        .map((data) => `Store - ${mapabl(data.store_id)}`);
    };

    const getCTR = (clicks, impressions) => {
      return impressions > 0
        ? ((clicks / impressions) * 100).toFixed(2) + '%'
        : '0%';
    };

    const getROAS = (revenue, cost) => {
      return cost > 0 ? Number((revenue / cost).toFixed(2)) : '0';
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
      // 'AI Insight',
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

    const sheetIdMap = {};
    createResponse.data.sheets.forEach((sheet) => {
      sheetIdMap[sheet.properties.title] = sheet.properties.sheetId;
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
      const roas = getROAS(data.conversions_value, data.cost);
      const sheetMap = {
        ONLINE: 'Channel - Online',
        LOCAL: 'Channel - Local',
      };
      const sheetTitle =
        sheetMap[data.product_channel.toUpperCase()] || 'Unknown';
      const gid = sheetIdMap[sheetTitle] || 0;
      const link = `=HYPERLINK("#gid=${gid}", "${data.product_channel}")`;
      return [
        link,
        formatNumber(data.impressions),
        formatNumber(data.clicks),
        formatNumber(ctr),
        formatNumber(data.conversions.toFixed(2)),
        '$' + data.cost.toFixed(2),
        formatNumber(roas),
        formatNumber(
          getUnitSold(exportData.liaReportData.units_sold, data.product_channel)
        ),
      ];
    });
    const StoreRows = exportData.liaReportData.formattedStoreQueryData
      .filter((item) => item?.store_id)
      .map((data) => {
        const ctr =
          data.impressions === 0
            ? 0
            : ((data.clicks / data.impressions) * 100).toFixed(2) + '%';
        const roas = getROAS(data.conversions_value, data.cost);

        const storeId = 'Store - ' + mapabl(data.store_id);

        const gid = sheetIdMap[storeId] || 0;
        const link = `=HYPERLINK("#gid=${gid}", "${mapabl(data.store_id)}")`;
        return [
          link,
          formatNumber(data.impressions),
          formatNumber(data.clicks),
          formatNumber(ctr),
          formatNumber(data.conversions.toFixed(2)),
          '$' + data.cost.toFixed(2),
          formatNumber(roas),
        ];
      });

    const DashboardHeaders = [
      ['Report timeframe', '07 May 2025 – 06 Jun 2025'],
      [
        'Total Clicks',
        exportData?.dashboardProf?.Total_Clicks,
        '',
        "Units sold data isn't available at the store level",
      ], // Row 1
      [
        'Conv. value / cost',
        exportData?.dashboardProf?.ROAS,
        '',
        "Store visits aren't available from Google's API – please log in to Google Ads.",
      ], // Row 3
      ['Ad Spend', exportData?.dashboardProf?.Ad_Spend], // Row 4
      ['Revenue', exportData?.dashboardProf?.Revenue], // Row 5
      [
        'Unit Sold',
        formatNumber(getUnitSold(exportData.liaReportData?.units_sold)),
      ], // Row 5
      [''],
      ['Channel Performance', ''],
      [
        'Channel',
        'Impressions',
        'Clicks',
        'CTR',
        'Conversions',
        'Cost',
        'Conv. value / cost',
        'Unit Sold',
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

    const gid = sheetIdMap['Dashboard'] || 0;
    const link = `=HYPERLINK("#gid=${gid}", "<- Go Back To Dashboard")`;
    const onlineHeader = [
      [link, ''],
      [''],
      [
        'Total Clicks',
        getChannelSummary(exportData?.liaReportData?.results, 'ONLINE')
          .totalClicks,
      ], // Row 1
      [
        'Conv. value / cost',
        getChannelSummary(exportData?.liaReportData?.results, 'ONLINE').roas,
      ], // Row 3
      [
        'Ad Spend',
        '$' +
          getChannelSummary(exportData?.liaReportData?.results, 'ONLINE')
            .totalCost,
      ], // Row 4
      [
        'Revenue',
        '$' +
          getChannelSummary(exportData?.liaReportData?.results, 'ONLINE')
            .totalRevenue,
      ], // Row 5
      [
        'Unit Sold',
        formatNumber(
          getUnitSold(exportData.liaReportData.units_sold, 'ONLINE')
        ),
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
        'Conv. value / cost',
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
      '$' + item.cost.toFixed(2),
      getROAS(item.conversions_value, item.cost),
    ]);

    onlineHeader.push(...onlineProductRows);
    const gidd = sheetIdMap['Dashboard'] || 0;
    const linkk = `=HYPERLINK("#gid=${gidd}", "<- Go Back To Dashboard")`;
    const localHeader = [
      [linkk, ''],
      [''],
      [
        'Total Clicks',
        getChannelSummary(exportData?.liaReportData?.results, 'LOCAL')
          .totalClicks,
      ], // Row 1
      [
        'Conv. value / cost',
        getChannelSummary(exportData?.liaReportData?.results, 'LOCAL').roas,
      ], // Row 3
      [
        'Ad Spend',
        '$' +
          getChannelSummary(exportData?.liaReportData?.results, 'LOCAL')
            .totalCost,
      ], // Row 4
      [
        'Revenue',
        '$' +
          getChannelSummary(exportData?.liaReportData?.results, 'LOCAL')
            .totalRevenue,
      ], // Row 5
      [
        'Unit Sold',
        formatNumber(getUnitSold(exportData.liaReportData.units_sold, 'LOCAL')),
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
        'Conv. value / cost',
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
    const metadata = await sheets.spreadsheets.get({ spreadsheetId });
    const sheet = metadata.data.sheets.find(
      (s) => s.properties.title === 'Dashboard'
    );
    const Channel_Online = metadata.data.sheets.find(
      (s) => s.properties.title === 'Channel - Online'
    );
    const Channel_Local = metadata.data.sheets.find(
      (s) => s.properties.title === 'Channel - Local'
    );
    const sheetId = sheet.properties.sheetId;
    const Channel_Online_id = Channel_Online.properties.sheetId;
    const Channel_Local_id = Channel_Local.properties.sheetId;

    // Define the data range (adjust row/column count as needed)
    const totalRows = 20; // e.g., 20 rows including header
    const totalColumns = 5; // e.g., 5 columns

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      resource: {
        requests: [
          // 1. Bold header styling
          {
            repeatCell: {
              range: {
                sheetId: sheetId,
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: 2,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 0.898,
                    blue: 0.6,
                  },
                  textFormat: {
                    bold: true,
                    fontSize: 10,
                  },
                  horizontalAlignment: 'CENTER',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },
          {
            repeatCell: {
              range: {
                sheetId: sheetId,
                startRowIndex: 1,
                endRowIndex: 6,
                startColumnIndex: 1,
                endColumnIndex: 2,
              },
              cell: {
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },
          {
            repeatCell: {
              range: {
                sheetId: sheetId,
                startRowIndex: 1,
                endRowIndex: 8,
                startColumnIndex: 0,
                endColumnIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: {
                    bold: true,
                    fontSize: 10,
                  },
                  horizontalAlignment: 'LEFT',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },

          // 2. Resize columns
          {
            updateDimensionProperties: {
              range: {
                sheetId: sheetId,
                dimension: 'COLUMNS',
                startIndex: 0,
                endIndex: 7,
              },
              properties: {
                pixelSize: 150,
              },
              fields: 'pixelSize',
            },
          },

          // // 3. Freeze the header row
          // {
          //   updateSheetProperties: {
          //     properties: {
          //       sheetId: sheetId,
          //       gridProperties: {
          //         frozenRowCount: 1,
          //       },
          //     },
          //     fields: 'gridProperties.frozenRowCount',
          //   },
          // },

          // adding background
          {
            repeatCell: {
              range: {
                sheetId: sheetId,
                startRowIndex: 8,
                endRowIndex: 9,
                startColumnIndex: 0,
                endColumnIndex: 8,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 0.898,
                    blue: 0.6,
                  },
                  textFormat: {
                    bold: true,
                    fontSize: 10,
                  },
                  horizontalAlignment: 'CENTER',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },

          // 4. Add borders around each cell in the range
          {
            updateBorders: {
              range: {
                sheetId: sheetId,
                startRowIndex: 0,
                endRowIndex: 6,
                startColumnIndex: 0,
                endColumnIndex: 2,
              },

              top: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              bottom: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              left: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              right: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerHorizontal: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerVertical: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
            },
          },
          {
            updateBorders: {
              range: {
                sheetId: sheetId,
                startRowIndex: 8,
                endRowIndex: 11,
                startColumnIndex: 0,
                endColumnIndex: 8,
              },

              top: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              bottom: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              left: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              right: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerHorizontal: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerVertical: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
            },
          },
        ],
      },
    });
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      resource: {
        requests: [
          // 1. Bold header styling

          {
            repeatCell: {
              range: {
                sheetId: Channel_Online_id,
                startRowIndex: 2,
                endRowIndex: 7,
                startColumnIndex: 1,
                endColumnIndex: 2,
              },
              cell: {
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },
          {
            repeatCell: {
              range: {
                sheetId: Channel_Online_id,
                startRowIndex: 1,
                endRowIndex: 9,
                startColumnIndex: 0,
                endColumnIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: {
                    bold: true,
                    fontSize: 10,
                  },
                  horizontalAlignment: 'LEFT',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },
          {
            repeatCell: {
              range: {
                sheetId: Channel_Online_id,
                startRowIndex: 2,
                endRowIndex: 7,
                startColumnIndex: 0,
                endColumnIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 0.898,
                    blue: 0.6,
                  },
                  textFormat: {
                    bold: true,
                    fontSize: 10,
                  },
                  horizontalAlignment: 'LEFT',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },

          // 2. Resize columns
          {
            updateDimensionProperties: {
              range: {
                sheetId: Channel_Online_id,
                dimension: 'COLUMNS',
                startIndex: 0,
                endIndex: totalColumns,
              },
              properties: {
                pixelSize: 180,
              },
              fields: 'pixelSize',
            },
          },

          // // 3. Freeze the header row
          // {
          //   updateSheetProperties: {
          //     properties: {
          //       sheetId: sheetId,
          //       gridProperties: {
          //         frozenRowCount: 1,
          //       },
          //     },
          //     fields: 'gridProperties.frozenRowCount',
          //   },
          // },

          // adding background
          {
            repeatCell: {
              range: {
                sheetId: Channel_Online_id,
                startRowIndex: 9,
                endRowIndex: 10,
                startColumnIndex: 0,
                endColumnIndex: 19,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 0.898,
                    blue: 0.6,
                  },
                  textFormat: {
                    bold: true,
                    fontSize: 10,
                  },
                  horizontalAlignment: 'CENTER',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },

          // 4. Add borders around each cell in the range
          {
            updateBorders: {
              range: {
                sheetId: Channel_Online_id,
                startRowIndex: 2,
                endRowIndex: 7,
                startColumnIndex: 0,
                endColumnIndex: 2,
              },

              top: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              bottom: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              left: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              right: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerHorizontal: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerVertical: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
            },
          },
          {
            updateBorders: {
              range: {
                sheetId: Channel_Online_id,
                startRowIndex: 9,
                endRowIndex: onlineProductRows.length,
                startColumnIndex: 0,
                endColumnIndex: 19,
              },

              top: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              bottom: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              left: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              right: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerHorizontal: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerVertical: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
            },
          },
        ],
      },
    });

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      resource: {
        requests: [
          // 1. Bold header styling

          {
            repeatCell: {
              range: {
                sheetId: Channel_Local_id,
                startRowIndex: 2,
                endRowIndex: 7,
                startColumnIndex: 1,
                endColumnIndex: 2,
              },
              cell: {
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },
          {
            repeatCell: {
              range: {
                sheetId: Channel_Local_id,
                startRowIndex: 1,
                endRowIndex: 9,
                startColumnIndex: 0,
                endColumnIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: {
                    bold: true,
                    fontSize: 10,
                  },
                  horizontalAlignment: 'LEFT',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },
          {
            repeatCell: {
              range: {
                sheetId: Channel_Local_id,
                startRowIndex: 2,
                endRowIndex: 7,
                startColumnIndex: 0,
                endColumnIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 0.898,
                    blue: 0.6,
                  },
                  textFormat: {
                    bold: true,
                    fontSize: 10,
                  },
                  horizontalAlignment: 'LEFT',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },

          // 2. Resize columns
          {
            updateDimensionProperties: {
              range: {
                sheetId: Channel_Local_id,
                dimension: 'COLUMNS',
                startIndex: 0,
                endIndex: totalColumns,
              },
              properties: {
                pixelSize: 180,
              },
              fields: 'pixelSize',
            },
          },

          // // 3. Freeze the header row
          // {
          //   updateSheetProperties: {
          //     properties: {
          //       sheetId: sheetId,
          //       gridProperties: {
          //         frozenRowCount: 1,
          //       },
          //     },
          //     fields: 'gridProperties.frozenRowCount',
          //   },
          // },

          // adding background
          {
            repeatCell: {
              range: {
                sheetId: Channel_Local_id,
                startRowIndex: 9,
                endRowIndex: 10,
                startColumnIndex: 0,
                endColumnIndex: 7,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 0.898,
                    blue: 0.6,
                  },
                  textFormat: {
                    bold: true,
                    fontSize: 10,
                  },
                  horizontalAlignment: 'CENTER',
                },
              },
              fields:
                'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },

          // 4. Add borders around each cell in the range
          {
            updateBorders: {
              range: {
                sheetId: Channel_Local_id,
                startRowIndex: 2,
                endRowIndex: 7,
                startColumnIndex: 0,
                endColumnIndex: 2,
              },

              top: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              bottom: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              left: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              right: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerHorizontal: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerVertical: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
            },
          },
          {
            updateBorders: {
              range: {
                sheetId: Channel_Local_id,
                startRowIndex: 9,
                endRowIndex: 9 + StoreRows.length + 1,
                startColumnIndex: 0,
                endColumnIndex: 7,
              },

              top: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              bottom: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              left: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              right: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerHorizontal: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
              innerVertical: {
                style: 'SOLID',
                width: 1,
                color: { red: 0, green: 0, blue: 0 },
              },
            },
          },
        ],
      },
    });

    //
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

      const sheetTitle = `Store - ${mapabl(item.store_id)}`;
      const ctr =
        item.impressions === 0
          ? '0%'
          : `${((item.clicks / item.impressions) * 100).toFixed(2)}%`;

      const roas =
        item.cost === 0
          ? item.conversions_value > 0
            ? '∞'
            : '0'
          : (item.conversions_value / item.cost).toFixed(2);
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
          '$' + item.cost.toFixed(2),
          getROAS(item.conversions_value, item.cost),
        ]
      );
      const sheetMap = {
        ONLINE: 'Channel - Online',
        LOCAL: 'Channel - Local',
      };

      const gid = sheetIdMap['Channel - Local'] || 0;
      const link = `=HYPERLINK("#gid=${gid}", "< Go Back to Local")`;
      const values = [
        [link, ''],
        [''],
        [
          'Store Name',
          `=HYPERLINK("https://www.google.com/search?q=${mapabl(
            item.store_id
          )}", "${mapabl(item.store_id)}")`,
        ],
        ['Impressions', formatNumber(item.impressions)],
        ['Clicks', formatNumber(item.clicks)],
        ['CTR', ctr],
        ['Conversions', formatNumber(item.conversions)],
        ['Cost', '$' + item.cost.toFixed(2)],
        [
          'Conv. value / cost',
          typeof roas === 'string' ? roas : formatNumber(roas),
        ],
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
          'Conv. value / cost',
        ],
        ...PerStoreProductRows,
      ];

      let Store_Local = metadata.data.sheets.find(
        (s) => s.properties.title === sheetTitle
      );
      const Store_Local_Id = Store_Local.properties.sheetId;

      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        resource: {
          requests: [
            // 1. Bold header styling

            {
              repeatCell: {
                range: {
                  sheetId: Store_Local_Id,
                  startRowIndex: 2,
                  endRowIndex: 9,
                  startColumnIndex: 1,
                  endColumnIndex: 2,
                },
                cell: {
                  userEnteredFormat: {
                    horizontalAlignment: 'RIGHT',
                  },
                },
                fields:
                  'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
              },
            },
            {
              repeatCell: {
                range: {
                  sheetId: Store_Local_Id,
                  startRowIndex: 1,
                  endRowIndex: 11,
                  startColumnIndex: 0,
                  endColumnIndex: 1,
                },
                cell: {
                  userEnteredFormat: {
                    textFormat: {
                      bold: true,
                      fontSize: 10,
                    },
                    horizontalAlignment: 'LEFT',
                  },
                },
                fields:
                  'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
              },
            },
            {
              repeatCell: {
                range: {
                  sheetId: Store_Local_Id,
                  startRowIndex: 2,
                  endRowIndex: 9,
                  startColumnIndex: 0,
                  endColumnIndex: 1,
                },
                cell: {
                  userEnteredFormat: {
                    backgroundColor: {
                      red: 1,
                      green: 0.898,
                      blue: 0.6,
                    },
                    textFormat: {
                      bold: true,
                      fontSize: 10,
                    },
                    horizontalAlignment: 'LEFT',
                  },
                },
                fields:
                  'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
              },
            },

            // 2. Resize columns
            {
              updateDimensionProperties: {
                range: {
                  sheetId: Store_Local_Id,
                  dimension: 'COLUMNS',
                  startIndex: 0,
                  endIndex: 19,
                },
                properties: {
                  pixelSize: 150,
                },
                fields: 'pixelSize',
              },
            },

            // // 3. Freeze the header row
            // {
            //   updateSheetProperties: {
            //     properties: {
            //       sheetId: sheetId,
            //       gridProperties: {
            //         frozenRowCount: 1,
            //       },
            //     },
            //     fields: 'gridProperties.frozenRowCount',
            //   },
            // },

            // adding background
            {
              repeatCell: {
                range: {
                  sheetId: Store_Local_Id,
                  startRowIndex: 11,
                  endRowIndex: 12,
                  startColumnIndex: 0,
                  endColumnIndex: 19,
                },
                cell: {
                  userEnteredFormat: {
                    backgroundColor: {
                      red: 1,
                      green: 0.898,
                      blue: 0.6,
                    },
                    textFormat: {
                      bold: true,
                      fontSize: 10,
                    },
                    horizontalAlignment: 'CENTER',
                  },
                },
                fields:
                  'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
              },
            },

            // 4. Add borders around each cell in the range
            {
              updateBorders: {
                range: {
                  sheetId: Store_Local_Id,
                  startRowIndex: 2,
                  endRowIndex: 9,
                  startColumnIndex: 0,
                  endColumnIndex: 2,
                },

                top: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
                bottom: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
                left: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
                right: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
                innerHorizontal: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
                innerVertical: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
              },
            },
            {
              updateBorders: {
                range: {
                  sheetId: Store_Local_Id,
                  startRowIndex: 11,
                  endRowIndex: 11 + PerStoreProductRows.length + 1,
                  startColumnIndex: 0,
                  endColumnIndex: 19,
                },

                top: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
                bottom: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
                left: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
                right: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
                innerHorizontal: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
                innerVertical: {
                  style: 'SOLID',
                  width: 1,
                  color: { red: 0, green: 0, blue: 0 },
                },
              },
            },
          ],
        },
      });

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
          '$' + product.cost,
          product.conversions,
          product.clicks,
          product.impressions,
        ]);
      });
    });

    // await sheets.spreadsheets.values.update(
    //   {
    //     spreadsheetId,
    //     range: 'AI Insight!A1',
    //     valueInputOption: 'USER_ENTERED',
    //     resource: {
    //       values: [
    //         [
    //           'Question',
    //           'Short Description',
    //           'Product Title',
    //           'Cost',
    //           'Conversions',
    //           'Clicks',
    //           'Impressions',
    //         ],
    //         ...flattenedData,
    //       ],
    //     },
    //   },
    //   {
    //     timeout: 60000, // <-- 60 seconds
    //   }
    // );

    res.send({
      message: 'Spreadsheet with multiple sheets created and data added!',

      url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating multi-sheet spreadsheet');
  }
};
