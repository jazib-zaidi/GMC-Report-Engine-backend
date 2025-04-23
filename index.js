require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth');
const reportRoutes = require('./routes/reports');
const merchantAccountList = require('./routes/reports');
const googleSheet = require('./routes/sheet');
const userRoutes = require('./routes/user');
const cookieParser = require('cookie-parser');

const cors = require('cors');

const port = 3000;
const app = express();
app.use(cookieParser());
const session = require('express-session');

app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_ID,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/', authRoutes);
app.use('/api', reportRoutes);
app.use('/api', userRoutes);
app.use('/api', merchantAccountList);
app.use('/api', googleSheet);

app.listen(port, () => {
  console.log(`App running at ${process.env.PRODUCTION} - ${port}`);
});
