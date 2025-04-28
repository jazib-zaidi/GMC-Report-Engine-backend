require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); // 🔥 Added
const { Server } = require('socket.io'); // 🔥 Added

const authRoutes = require('./routes/auth');
const reportRoutes = require('./routes/reports');
const googleSheet = require('./routes/sheet');
const uploadXml = require('./routes/uploadXmlFile');
const userRoutes = require('./routes/user');
const googleProductCategory = require('./routes/googleProductCategory');
const authMiddleware = require('./middlewares/authMiddleware');
const initSocket = require('./sockets/socketHandler'); // 🔥 NEW — socket logic file

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
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

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

// Test Route
app.get('/test', authMiddleware, (req, res) => {
  res.json({ message: 'Up and running' });
});

// Start server
server.listen(port, () => {
  console.log(`🚀 App running with socket.io at http://localhost:${port}`);
});
