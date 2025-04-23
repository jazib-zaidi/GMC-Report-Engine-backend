const { oauth2Client, google } = require('../utils/googleClient');

exports.createGoogleSheetReport = async (req, res) => {
  try {
    const { tokens } = req.token;
    const { exportData, reportName, summaryData, selectedDateRange } = req.body;
    if (!tokens) {
      return res.status(401).send('No tokens found');
    }
    oauth2Client.setCredentials(tokens);

    const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

    const product = exportData.product;
    const { brand } = exportData;
    let newsheetDataLength = [{ row: 0, column: 0 }];
    const sheetDataLength = Object.keys(exportData).map((key) => {
      return {
        row: exportData[key].data.length,
        column: exportData[key].headers.length,
      };
    });
    newsheetDataLength = [...newsheetDataLength, ...sheetDataLength];

    let productType = [];
    let googleProductCategory = [];
    for (let i = 0; i < 5; i++) {
      productType.push(`Insights by Product Type ${i + 1}`);
      googleProductCategory.push(
        `Insights by Google Product Category ${i + 1}`
      );
    }
    const sheetTitles = [
      'Dashboard',
      'Insights by Product',
      'Insights by Brands',
      ...productType,
      ...googleProductCategory,
    ];

    const createResponse = await sheets.spreadsheets.create({
      resource: {
        properties: {
          title: reportName || 'GMC Report',
        },
        sheets: sheetTitles.map((title) => ({
          properties: { title },
        })),
      },
    });

    const spreadsheetId = createResponse.data.spreadsheetId;
    function formatSheetData(data) {
      const formattedData = data.map((item) => [
        item.offerId,
        item.title,
        item.currentClicks,
        item.previousClicks,
        item.clickChangePercent.toFixed(2),
        item.clickChangeNumber,
        item.currentImpressions,
        item.previousImpressions,
        item.impressionChangePercent.toFixed(2),
        item.impressionChangeNumber,
      ]);
      return formattedData;
    }

    function formatBrandSheetData(data) {
      const formattedData = data.map((item) => [
        item.brand,
        item.currentClicks,
        item.previousClicks,
        item.clickChangePercent.toFixed(2),
        item.clickChangeNumber,
        item.currentImpressions,
        item.previousImpressions,
        item.impressionChangePercent.toFixed(2),
        item.impressionChangeNumber,
      ]);
      return formattedData;
    }

    function formatTypeSheetData(data, type) {
      const formattedData = data.map((item) => [
        item[type],
        item.currentClicks,
        item.previousClicks,
        item.clickChangePercent.toFixed(2),
        item.clickChangeNumber,
        item.currentImpressions,
        item.previousImpressions,
        item.impressionChangePercent.toFixed(2),
        item.impressionChangeNumber,
      ]);
      return formattedData;
    }
    function formatDateRange({ startDate, endDate }) {
      const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        });
      };

      return `${formatDate(startDate)} – ${formatDate(endDate)}`;
    }
    function getLastYearDateRange({ startDate, endDate }) {
      const getLastYearDate = (dateStr) => {
        const date = new Date(dateStr);
        date.setFullYear(date.getFullYear() - 1);
        return date.toISOString().split('T')[0];
      };

      return {
        startDate: getLastYearDate(startDate),
        endDate: getLastYearDate(endDate),
      };
    }
    const allProductData = [product.headers, ...formatSheetData(product.data)];
    const brandSheetData = [brand.headers, ...formatBrandSheetData(brand.data)];
    const productSheetData = [
      ['Report timeframe', 'Compared to'],

      [
        formatDateRange(selectedDateRange),
        formatDateRange(getLastYearDateRange(selectedDateRange)),
      ],

      [],

      [],
      [],
      ['Actual Impressions'],
      [
        formatDateRange(selectedDateRange),
        formatDateRange(getLastYearDateRange(selectedDateRange)),
        'Change',
        'Change %',
      ],
      [
        summaryData.current.impressions,
        summaryData.previous.impressions,
        summaryData.changesData.impressions.change,
        summaryData.changesData.impressions.percent,
      ],

      [],
      ['Actual Clicks'],
      [
        formatDateRange(selectedDateRange),
        formatDateRange(getLastYearDateRange(selectedDateRange)),
        'Change',
        'Change %',
      ],
      [
        summaryData.current.clicks,
        summaryData.previous.clicks,
        summaryData.changesData.clicks.change,
        summaryData.changesData.clicks.percent,
      ],
    ];

    // STEP 1: Write data

    // STEP 2: Get sheet ID dynamically
    const sheetMetadat = await sheets.spreadsheets.get({ spreadsheetId });

    const newSheet = sheetMetadat.data.sheets.map((sheet) => {
      return sheet.properties.sheetId;
    });

    newSheet.forEach(async (sheetId, i) => {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            {
              repeatCell: {
                range: {
                  sheetId,
                  startRowIndex: 0,
                  endRowIndex: 1,
                  startColumnIndex: 0,
                  endColumnIndex: i == 0 ? 0 : 10,
                },
                cell: {
                  userEnteredFormat: {
                    textFormat: {
                      bold: true,
                      foregroundColor: {
                        red: 1,
                        green: 1,
                        blue: 1,
                      },
                    },
                    backgroundColor: {
                      red: 37 / 255,
                      green: 99 / 255,
                      blue: 235 / 255,
                    },
                  },
                },
                fields: 'userEnteredFormat(backgroundColor,textFormat)',
              },
            },
            {
              updateBorders: {
                range: {
                  sheetId,
                  startRowIndex: 0,
                  endRowIndex: newsheetDataLength[i]?.row + 1,
                  startColumnIndex: 0,
                  endColumnIndex: newsheetDataLength[i]?.column + 1,
                },
                top: { style: 'SOLID' },
                bottom: { style: 'SOLID' },
                left: { style: 'SOLID' },
                right: { style: 'SOLID' },
                innerHorizontal: { style: 'SOLID' },
                innerVertical: { style: 'SOLID' },
              },
            },
          ],
        },
      });
    });

    const sheetMetadata = await sheets.spreadsheets.get({ spreadsheetId });
    const sheetId = sheetMetadata.data.sheets.find(
      (sheet) => sheet.properties.title === 'Dashboard'
    ).properties.sheetId;

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Dashboard!A1',
      valueInputOption: 'RAW',
      resource: {
        values: productSheetData,
      },
    });

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          // 🔹 Bold: Timeframe Header
          {
            repeatCell: {
              range: {
                sheetId,
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: 2,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: { bold: true },
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1,
                  },
                },
              },
              fields: 'userEnteredFormat.textFormat.bold',
            },
          },

          {
            repeatCell: {
              range: {
                sheetId,
                startRowIndex: 3,
                endRowIndex: 7,
                startColumnIndex: 0,
                endColumnIndex: 4,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: { bold: true },
                  backgroundColor: {
                    red: 0.9,
                    green: 0.9,
                    blue: 0.9,
                  },
                },
              },
              fields: 'userEnteredFormat.textFormat.bold',
            },
          },
          // 🔹 Bold: Clicks Section
          {
            repeatCell: {
              range: {
                sheetId,
                startRowIndex: 9,
                endRowIndex: 11,
                startColumnIndex: 0,
                endColumnIndex: 4,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: { bold: true },
                  backgroundColor: {
                    red: 0.9,
                    green: 0.9,
                    blue: 0.9,
                  },
                },
              },
              fields: 'userEnteredFormat.textFormat.bold',
            },
          },

          // 🔲 Borders: Timeframe Table
          {
            updateBorders: {
              range: {
                sheetId,
                startRowIndex: 0,
                endRowIndex: 2,
                startColumnIndex: 0,
                endColumnIndex: 2,
              },
              top: { style: 'SOLID' },
              bottom: { style: 'SOLID' },
              left: { style: 'SOLID' },
              right: { style: 'SOLID' },
              innerHorizontal: { style: 'SOLID' },
              innerVertical: { style: 'SOLID' },
            },
          },
          // 🔲 Borders: Impressions Table
          {
            updateBorders: {
              range: {
                sheetId,
                startRowIndex: 6,
                endRowIndex: 8,
                startColumnIndex: 0,
                endColumnIndex: 4,
              },
              top: { style: 'SOLID' },
              bottom: { style: 'SOLID' },
              left: { style: 'SOLID' },
              right: { style: 'SOLID' },
              innerHorizontal: { style: 'SOLID' },
              innerVertical: { style: 'SOLID' },
            },
          },
          // 🔲 Borders: Clicks Table
          {
            updateBorders: {
              range: {
                sheetId,
                startRowIndex: 10,
                endRowIndex: 12,
                startColumnIndex: 0,
                endColumnIndex: 4,
              },
              top: { style: 'SOLID' },
              bottom: { style: 'SOLID' },
              left: { style: 'SOLID' },
              right: { style: 'SOLID' },
              innerHorizontal: { style: 'SOLID' },
              innerVertical: { style: 'SOLID' },
            },
          },
        ],
      },
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Insights by Product!A1',
      valueInputOption: 'RAW',
      resource: {
        values: allProductData,
      },
    });

    // 4. Write to Sheet2
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Insights by Brands!A1',
      valueInputOption: 'RAW',
      resource: {
        values: brandSheetData,
      },
    });

    productType.forEach(async (type, index) => {
      const typeSheetData = [
        exportData[`type${index + 1}`].headers,
        ...formatTypeSheetData(
          exportData[`type${index + 1}`].data,
          `productTypeL${index + 1}`
        ),
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${type}!A1`,
        valueInputOption: 'RAW',
        resource: {
          values: typeSheetData,
        },
      });
    });

    googleProductCategory.forEach(async (type, index) => {
      const typeSheetData = [
        exportData[`categoryL${index + 1}`].headers,
        ...formatTypeSheetData(
          exportData[`categoryL${index + 1}`].data,
          `categoryL${index + 1}`
        ),
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${type}!A1`,
        valueInputOption: 'RAW',
        resource: {
          values: typeSheetData,
        },
      });
    });

    res.send({
      message: 'Spreadsheet with multiple sheets created!',
      spreadsheetId,
      url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send('Error creating multi-sheet spreadsheet');
  }
};
