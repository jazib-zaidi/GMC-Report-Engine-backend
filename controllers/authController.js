const { oauth2Client, SCOPES, google } = require('../utils/googleClient');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');

exports.getAuthUrl = (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.json({ authUrl });
};

exports.handleOAuthCallback = async (req, res) => {
  try {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);

    req.session.tokens = tokens;

    const payload = {
      tokens,
    };

    const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '7d' });

    res.setHeader('Set-Cookie', [
      cookie.serialize('token', token, {
        httpOnly: false,
        secure: false,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      }),
    ]);

    res.redirect(`${process.env.FRONTEND_URL}`);
  } catch (err) {
    console.error('OAuth Callback Error:', err);
    res.status(500).send('Error fetching GMC account info.');
  }
};
