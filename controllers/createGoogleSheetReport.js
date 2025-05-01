const { oauth2Client, google } = require('../utils/googleClient');

exports.createGoogleSheetReport = async (req, res) => {
  try {
    const { tokens } = req.token;

    const { previousDateRange, reportName, reportData, selectedDateRange } =
      req.body;

    if (!tokens) {
      return res.status(401).send('No tokens found');
    }
    oauth2Client.setCredentials(tokens);

    function getTableHeaders(dataArray) {
      if (!Array.isArray(dataArray)) return [];

      const headers = new Set();

      dataArray.forEach((item) => {
        if (item && typeof item === 'object') {
          Object.keys(item).forEach((key) => headers.add(key));
        }
      });

      return Array.from(headers);
    }

    const sheets = google.sheets({
      version: 'v4',
      auth: oauth2Client,
      timeout: 10000, // 10 seconds
    });

    // const product = exportData.product;
    // const { brand } = exportData;
    let newsheetDataLength = [{ row: 0, column: 0 }];
    const sheetDataLength = Object.keys(
      reportData.allProductDataWithImpressions
    )
      .slice(2) // Ignore the first 2 keys
      .map((key) => {
        return {
          row: reportData.allProductDataWithImpressions[key].length,
          column: getTableHeaders(reportData.allProductDataWithImpressions[key])
            .length,
        };
      });
    newsheetDataLength = [...newsheetDataLength, ...sheetDataLength];

    const allCohortAnalysisDataWithImpressions = getTableHeaders(
      reportData.allProductDataWithImpressions
        .allCohortAnalysisDataWithImpressions
    );

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
      'All Products',
      'Insights by Brands',
      ...productType,
      ...googleProductCategory,
    ];

    function formatPercent(value) {
      if (
        value === 'N/A' ||
        value === 'null' ||
        value === null ||
        value === undefined
      ) {
        return value;
      }
      return `${value}%`;
    }
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
        formatPercent(item.clicksChangePct),
        item.clicksChangeNumber,
        item.currentImpressions,
        item.previousImpressions,
        formatPercent(item.impressionsChangePct),
        item.impressionsChangeNumber,
      ]);
      return formattedData;
    }

    const brandHeader = [
      'Brand',
      'Current Clicks',
      'Previous Clicks',
      'Clicks Change %',
      'Clicks Change Number',
      'Current Impressions',
      'Previous Impressions',
      'Impressions Change %',
      'Impressions Change Number',
    ];
    function formatBrandSheetData(data) {
      const formattedData = data.map((item) => [
        item.segment,
        item.currentClicks,
        item.previousClicks,
        formatPercent(item.clicksChangePct),
        item.clicksChangeNumber,
        item.currentImpressions,
        item.previousImpressions,
        formatPercent(item.impressionsChangePct),
        item.impressionsChangeNumber,
      ]);
      return formattedData;
    }

    function formatTypeSheetData(data, type) {
      const formattedData = data.map((item) => [
        item[type],
        item.currentClicks,
        item.previousClicks,
        formatPercent(item.clicksChangePct),
        item.clicksChangeNumber,
        item.currentImpressions,
        item.previousImpressions,
        formatPercent(item.impressionsChangePct),
        item.impressionsChangeNumber,
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

    const getPreviousDateRange = (selectedDateRange, previousDateRange) => {
      if (previousDateRange) return previousDateRange;

      const oneYearEarlier = (dateStr) => {
        const date = new Date(dateStr);
        date.setFullYear(date.getFullYear() - 1);
        return date.toISOString().split('T')[0]; // returns 'YYYY-MM-DD'
      };

      return {
        startDate: oneYearEarlier(selectedDateRange.startDate),
        endDate: oneYearEarlier(selectedDateRange.endDate),
      };
    };

    const allProductDataWithImpressions = [
      [
        'Item ID',
        'Title',
        'Current Clicks',
        'Previous Clicks',
        'Clicks Change %',
        'Clicks Change Number',
        'Current Impressions',
        'Previous Impressions',
        'Impressions Change %',
        'Impressions Change Number',
      ],
      ...formatSheetData(
        reportData.allProductDataWithImpressions
          .allCohortAnalysisDataWithImpressions
      ),
    ];

    const allProductData = [
      [
        'Item ID',
        'Title',
        'Current Clicks',
        'Previous Clicks',
        'Clicks Change %',
        'Clicks Change Number',
        'Current Impressions',
        'Previous Impressions',
        'Impressions Change %',
        'Impressions Change Number',
      ],

      ...formatSheetData(reportData.allProductData.cohortAnalysisData),
    ];

    const brandSheetData = [
      brandHeader,
      ...formatBrandSheetData(
        reportData.allProductDataWithImpressions.brandCohort
      ),
    ];
    const productSheetData = [
      ['Report timeframe', 'Compared to'],

      [
        formatDateRange(selectedDateRange),
        formatDateRange(
          getPreviousDateRange(selectedDateRange, previousDateRange)
        ),
      ],

      [],

      [],
      [],
      ['Actual Impressions'],
      [
        formatDateRange(selectedDateRange),
        formatDateRange(
          getPreviousDateRange(selectedDateRange, previousDateRange)
        ),
        'Change',
        'Change %',
      ],
      [
        reportData.allProductDataWithImpressions
          .totalCurrentMetricsWithImpressions.impressions,
        reportData.allProductDataWithImpressions
          .totalPreviousMetricsWithImpressions.impressions,
        reportData.allProductDataWithImpressions
          .totalCurrentMetricsWithImpressions.impressions -
          reportData.allProductDataWithImpressions
            .totalPreviousMetricsWithImpressions.impressions,
        (
          ((reportData.allProductDataWithImpressions
            .totalCurrentMetricsWithImpressions.impressions -
            reportData.allProductDataWithImpressions
              .totalPreviousMetricsWithImpressions.impressions) /
            reportData.allProductDataWithImpressions
              .totalPreviousMetricsWithImpressions.impressions) *
          100
        )?.toFixed(2) + ' %',
      ],
      [],
      ['Actual Clicks'],
      [
        formatDateRange(selectedDateRange),
        formatDateRange(
          getPreviousDateRange(selectedDateRange, previousDateRange)
        ),
        'Change',
        'Change %',
      ],
      [
        reportData.allProductDataWithImpressions
          .totalCurrentMetricsWithImpressions.clicks,
        reportData.allProductDataWithImpressions
          .totalPreviousMetricsWithImpressions.clicks,
        reportData.allProductDataWithImpressions
          .totalCurrentMetricsWithImpressions.clicks -
          reportData.allProductDataWithImpressions
            .totalPreviousMetricsWithImpressions.clicks,
        (
          ((reportData.allProductDataWithImpressions
            .totalCurrentMetricsWithImpressions.clicks -
            reportData.allProductDataWithImpressions
              .totalPreviousMetricsWithImpressions.clicks) /
            reportData.allProductDataWithImpressions
              .totalPreviousMetricsWithImpressions.clicks) *
          100
        )?.toFixed(2) + ' %',
      ],
    ];

    // // STEP 1: Write data

    // // STEP 2: Get sheet ID dynamically
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
                      // foregroundColor: {
                      //   red: 1,
                      //   green: 1,
                      //   blue: 1,
                      // },
                    },
                    backgroundColor: {
                      red: 1,
                      green: 0.898,
                      blue: 0.6,
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
                  horizontalAlignment: 'CENTER',
                  verticalAlignment: 'MIDDLE',
                },
              },
              fields:
                'userEnteredFormat(textFormat,horizontalAlignment,verticalAlignment,backgroundColor)',
            },
          },
          {
            repeatCell: {
              range: {
                sheetId,
                startRowIndex: 1,
                endRowIndex: 2,
                startColumnIndex: 0,
                endColumnIndex: 2,
              },
              cell: {
                userEnteredFormat: {
                  horizontalAlignment: 'CENTER',
                  verticalAlignment: 'MIDDLE',
                },
              },
              fields:
                'userEnteredFormat(textFormat,horizontalAlignment,verticalAlignment)',
            },
          },
          {
            repeatCell: {
              range: {
                sheetId,
                startRowIndex: 3,
                endRowIndex: 18,
                startColumnIndex: 0,
                endColumnIndex: 10,
              },
              cell: {
                userEnteredFormat: {
                  horizontalAlignment: 'CENTER',
                  verticalAlignment: 'MIDDLE',
                },
              },
              fields:
                'userEnteredFormat(textFormat,horizontalAlignment,verticalAlignment)',
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

                  horizontalAlignment: 'CENTER',
                  verticalAlignment: 'MIDDLE',
                },
              },
              fields:
                'userEnteredFormat(textFormat,horizontalAlignment,verticalAlignment)',
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

                  horizontalAlignment: 'CENTER',
                  verticalAlignment: 'MIDDLE',
                },
              },
              fields:
                'userEnteredFormat(textFormat,horizontalAlignment,verticalAlignment)',
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
        values: allProductDataWithImpressions,
      },
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'All Products!A1',
      valueInputOption: 'RAW',
      resource: {
        values: allProductData,
      },
    });

    // // 4. Write to Sheet2
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Insights by Brands!A1',
      valueInputOption: 'RAW',
      resource: {
        values: brandSheetData,
      },
    });

    const productTypeHeader = [
      'Current Clicks',
      'Previous Clicks',
      'Clicks Change %',
      'Clicks Change Number',
      'Current Impressions',
      'Previous Impressions',
      'Impressions Change %',
      'Impressions Change Number',
    ];

    productType.forEach(async (type, index) => {
      const typeSheetData = [
        [`Product Type Level ${index + 1}`, ...productTypeHeader],

        ...formatTypeSheetData(
          reportData.allProductDataWithImpressions[
            `productTypeL${index + 1}Cohort`
          ],
          `segment`
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
        [`Google Product Category Level ${index + 1}`, ...productTypeHeader],
        ...formatTypeSheetData(
          reportData.allProductDataWithImpressions[
            `categoryL${index + 1}Cohort`
          ],
          `segment`
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
    console.error(err);
    res.status(500).send('Error creating multi-sheet spreadsheet');
  }
};
