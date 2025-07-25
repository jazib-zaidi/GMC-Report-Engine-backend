const {
  generateKeywords,
  writeDataToSheet,
} = require('../utils/generateKeywords');
const jwt = require('jsonwebtoken');
const { oauth2Client, google } = require('../utils/googleClient');
const connectedSockets = new Map();
function initSocket(io) {
  io.on('connection', (socket) => {
    console.log('🔌 A user connected:', socket.id);
    connectedSockets.set(socket.id, socket);
    socket.on('startGeneration', async (data) => {
      try {
        const { data: inputData, token, country } = data;

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);

        socket.emit('generationComplete', { data: decoded });
        oauth2Client.setCredentials(decoded.tokens);

        const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

        const createResponse = await sheets.spreadsheets.create({
          resource: {
            properties: {
              title: 'Optimized Title',
            },
            sheets: [
              {
                properties: {
                  title: 'Optimized Title',
                },
              },
            ],
          },
        });

        const spreadsheetId = createResponse.data.spreadsheetId;

        console.log('📄 Spreadsheet created with ID:', spreadsheetId);

        // Generate the focus keywords
        const result = await generateKeywords(socket, inputData, country.label);
        // console.log('✅ Keywords generated:', result);

        await writeDataToSheet(
          sheets,
          spreadsheetId,
          'Optimized Title',
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

    socket.on('startMapping', async () => {
      console.log('first');
      try {
        socket.emit('mappingTest', { data: 'Empty >Empty' });
      } catch (error) {}
    });

    socket.on('disconnect', () => {
      connectedSockets.delete(socket.id);
      console.log('❌ A user disconnected:', socket.id);
    });
  });
}

module.exports = { connectedSockets, initSocket };
