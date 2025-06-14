const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

module.exports = {
  oauth2Client,
  google,
  SCOPES: [
    'https://www.googleapis.com/auth/content',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/business.manage',
    'https://www.googleapis.com/auth/adwords',
  ],
};
