const {
  generateKeywords,
  writeDataToSheet,
} = require('../utils/generateKeywords');
const jwt = require('jsonwebtoken');
const { oauth2Client, google } = require('../utils/googleClient');

function initSocket(io) {
  io.on('connection', (socket) => {
    console.log('🔌 A user connected:', socket.id);

    socket.on('startGeneration', async (data) => {
      try {
        const { data: inputData, token } = data;
        const decoded = jwt.verify(token.token, process.env.JWT_TOKEN);
        socket.emit('generationComplete', { data: token });

        console.log(inputData);
        console.log(decoded);
        oauth2Client.setCredentials(decoded.tokens);

        const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

        const createResponse = await sheets.spreadsheets.create({
          resource: {
            properties: {
              title: 'Focus keyword',
            },
            sheets: [
              {
                properties: {
                  title: 'FocusKeywords',
                },
              },
            ],
          },
        });

        const spreadsheetId = createResponse.data.spreadsheetId;

        console.log('📄 Spreadsheet created with ID:', spreadsheetId);

        // Generate the focus keywords
        const result = await generateKeywords(socket, inputData);
        console.log('✅ Keywords generated:', result);

        await writeDataToSheet(
          sheets,
          spreadsheetId,
          'FocusKeywords',
          result,
          socket
        );
      } catch (err) {
        console.error('🔥 Error in startGeneration:', err);
        socket.emit('error', {
          message: 'An error occurred during generation.',
        });
      }
    });
    socket.on('disconnect', () => {
      console.log('❌ A user disconnected:', socket.id);
    });
  });
}

module.exports = initSocket;
