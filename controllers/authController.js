const { oauth2Client, SCOPES, google } = require('../utils/googleClient');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');

exports.getAuthUrl = (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  });
  res.json({ authUrl });
};

exports.handleOAuthCallback = async (req, res) => {
  try {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);

    if (!tokens) {
      return res.status(400).json({ message: 'No tokens received', code });
    }

    req.session.tokens = tokens;

    const payload = { tokens };

    // Make sure secret exists
    if (!process.env.JWT_TOKEN) {
      console.error('JWT_TOKEN env variable not set');
      return res
        .status(500)
        .json({ message: 'Server error', token: process.env.JWT_TOKEN });
    }

    const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '7d' });

    res.setHeader('Set-Cookie', [
      cookie.serialize('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'none',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      }),
    ]);

    res.redirect(`${process.env.FRONTEND_URL}?token=${token}`);
  } catch (err) {
    console.error('OAuth Callback Error:', err);
    res
      .status(500)
      .json({ msg: 'Error fetching GMC account info.', error: err });
  }
};
