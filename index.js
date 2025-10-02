require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
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
const { startBestSellerCron } = require('./cron/bestSellerCron');

const app = express();
const port = 3000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});

initSocket(io);

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

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

app.get('/test', authMiddleware, (req, res) => {
  res.json({ message: 'Up and running' });
});

startBestSellerCron();

server.listen(port, () => {
  console.log(
    `🚀 App running with socket.io at ${process.env.BACKEND_URL}:${port}`
  );
});
