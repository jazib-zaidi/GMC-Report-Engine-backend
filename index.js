require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); // 🔥 Added
const { Server } = require('socket.io'); // 🔥 Added
const cron = require('node-cron');
const axios = require('axios');

const authRoutes = require('./routes/auth');
const reportRoutes = require('./routes/reports');
const googleSheet = require('./routes/sheet');
const uploadXml = require('./routes/uploadXmlFile');
const userRoutes = require('./routes/user');
const feedXml = require('./routes/feedXml');
const lia = require('./routes/lia');
const auditFeed = require('./routes/audit');
const googleProductCategory = require('./routes/googleProductCategory');
const authMiddleware = require('./middlewares/authMiddleware');
const { initSocket } = require('./sockets/socketHandler');
const bestSellerProducts = require('./routes/bestSellerProducts');

const app = express();
const port = 3000;

// Create HTTP server instead of directly using app.listen
const server = http.createServer(app);

// Setup socket.io
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});

// Initialize socket listeners
initSocket(io);

// Connect to MongoDB
const mongoURI =
  'mongodb+srv://jazib:lErsVQiCpmh9UoEb@GMC-report.lnh9lfy.mongodb.net/GMC-report?retryWrites=true&w=majority&appName=GMC-Report';

mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middlewares
app.use(cookieParser());
app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_ID,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      sameSite: 'none',
    },
  })
);
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: true, limit: '500mb' }));

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

// Routes
app.use('/', authRoutes);
app.use('/api', reportRoutes);
app.use('/api', userRoutes);
app.use('/api', googleSheet);
app.use('/api', uploadXml);
app.use('/api', googleProductCategory);
app.use('/api', feedXml);
app.use('/api', lia);
app.use('/api', auditFeed);
app.use('/api', bestSellerProducts);

// Test Route
app.get('/test', authMiddleware, (req, res) => {
  res.json({ message: 'Up and running' });
});

const JIRA_DOMAIN = process.env.JIRA_DOMAIN; // e.g. "yourcompany.atlassian.net"
const JIRA_EMAIL = process.env.JIRA_EMAIL; // your Atlassian account email
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN; // API token from Atlassian
const JIRA_PROJECT_KEY = process.env.JIRA_PROJECT_KEY; // e.g. "FEEDOPS"
const authHeader =
  'Basic ' + Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');
async function checkDp() {
  const jiraRes = await axios.post(
    `https://${JIRA_DOMAIN}/rest/api/2/issue`,
    {
      fields: {
        project: { key: JIRA_PROJECT_KEY },
        summary: `Top 50 converting products in the last 90 days. - ${new Date().toISOString()}`,
        description: `Best Seller Report sheet - https://docs.google.com/spreadsheets/d/1DmITztzjrtderGYUG_ObVeehmVYeVLB2LlSRbve61c8/edit?gid=0#gid=0  Job ran successfully.\n\nCustomer ID: 3628423165\n...`,
        issuetype: { name: 'Bug' },
        parent: { key: 'DCA-20262' },
      },
    },
    {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
    }
  );
  console.log('Ticket created:', jiraRes.data.key);
}
// For testing: run every minute
cron.schedule('0 0 1 * *', async () => {
  try {
    // 1. Call your best-seller endpoint
    const url = `${process.env.BACKEND_URL}/api/best-seller-products?customer_id=3628423165&time_frame=90&limit=50&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbnMiOnsiYWNjZXNzX3Rva2VuIjoieWEyOS5hMEFRUV9CRFI3N3JZYm5oN0V1V0RUTzltQ0RLeDhxbVpoUW15cnJldGc3M3FKLWd3VzEzSnloSzVCOHhRLXR3M1c2UU5nTjE3QnJTOTlzYmpnaVpxT2lHLU9tNmVDOXdRQnFNNWJnX2xobXdwSFgzZXU5LW5RdlFKb0ZvMHZpZ1JEWVlXeERuTkVYU2RvNUc0U0czZkd3V3JHWUFPUlBRekdPRmFFVmoxMExVRFQ5dl9BQzlJV1B0TlJZb1hUZld2SzhseExGdDRhQ2dZS0FTa1NBUkFTRlFIR1gyTWlNT0E0OFZlX0t0ZlgtY1F6RDV2dWNBMDIwNiIsInJlZnJlc2hfdG9rZW4iOiIxLy8wZ0dwT2NMcjVEYnJfQ2dZSUFSQUFHQkFTTndGLUw5SXJKQmlEeUV1c1dib3Y2b01KQkMxd1ZoSnhmNzZWVUNSeF9OSXk1bkxEd1dkV3BOMEpobUcwRnZhdTVuREF0NFBNRDZ3Iiwic2NvcGUiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2J1c2luZXNzLm1hbmFnZSBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NvbnRlbnQgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZS5maWxlIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYWR3b3JkcyBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cyIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJyZWZyZXNoX3Rva2VuX2V4cGlyZXNfaW4iOjYwNDc5OSwiZXhwaXJ5X2RhdGUiOjE3NTkzMTgwNzg1MTF9LCJpYXQiOjE3NTkzMTQ0NzksImV4cCI6MTc1OTkxOTI3OX0.dTlRdx3eZIJOeOd1N5-ZEx5I88Dnq9pIcc-itO5Rxp0&sheet_id=1DmITztzjrtderGYUG_ObVeehmVYeVLB2LlSRbve61c8`;
    const response = await axios.get(url);

    console.log('✅ Report ran:', response.data.msg);

    checkDp();
  } catch (err) {
    console.log(err);
    console.error('❌ Cron or Jira failed:', err.message);
  }
});

// Start server
server.listen(port, () => {
  console.log(`🚀 App running with socket.io at http://localhost:${port}`);
});
