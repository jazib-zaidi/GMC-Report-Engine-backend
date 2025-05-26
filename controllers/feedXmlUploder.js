const axios = require('axios');
const xml2js = require('xml2js');
const { oauth2Client, google } = require('../utils/googleClient');

exports.createGoogleSheetFromXmlUrl = async (req, res) => {
  try {
    const { tokens } = req.token;
    const { xmlUrl, sheetTitle } = req.body;

    if (!tokens) {
      return res.status(401).send('No tokens found');
    }

    if (!xmlUrl) {
      return res.status(400).send('XML URL is required');
    }

    oauth2Client.setCredentials(tokens);

    const sheets = google.sheets({
      version: 'v4',
      auth: oauth2Client,
      timeout: 10000,
    });

    // Fetch and parse XML
    const response = await axios.get(xmlUrl);
    const parsed = await xml2js.parseStringPromise(response.data, {
      explicitArray: false,
      mergeAttrs: true,
    });

    const items = parsed?.rss?.channel?.item;
    if (!items) {
      return res.status(400).send('❌ No <item> entries found in the XML.');
    }

    const entries = Array.isArray(items) ? items : [items];

    // Flatten top-level item fields only
    const flattenedData = entries.map((item) => {
      const row = {};
      for (const [key, val] of Object.entries(item)) {
        if (typeof val === 'object') {
          row[key] = JSON.stringify(val); // Nested objects as JSON strings
        } else {
          row[key] = val;
        }
      }
      return row;
    });

    const headers = Array.from(
      flattenedData.reduce((set, row) => {
        Object.keys(row).forEach((k) => set.add(k));
        return set;
      }, new Set())
    );

    const sheetData = [
      headers,
      ...flattenedData.map((row) => headers.map((key) => row[key] || '')),
    ];

    // Create Google Sheet
    const createResponse = await sheets.spreadsheets.create({
      resource: {
        properties: {
          title: `${parsed?.rss?.channel?.description}` || 'XML Feed Data',
        },
        sheets: [{ properties: { title: 'XML Data' } }],
      },
    });

    const spreadsheetId = createResponse.data.spreadsheetId;

    // Write to Google Sheet
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'XML Data!A1',
      valueInputOption: 'RAW',
      resource: { values: sheetData },
    });

    res.send({
      message: '✅ Google Sheet created from XML successfully.',
      spreadsheetId,
      url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
    });
  } catch (error) {
    console.error('❌ Error during XML to Sheet:', error);
    res
      .status(500)
      .send(`❌ Failed to create Google Sheet from XML: ${error.message}`);
  }
};
