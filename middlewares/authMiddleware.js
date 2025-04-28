const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.query.token;

  if (!token) {
    clearAllCookies(res);

    return res.status(401).json({ error: 'Unauthorized. Token missing.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.token = decoded;
    next();
  } catch (err) {
    clearAllCookies(res);

    return res
      .status(401)
      .json({ error: 'Unauthorized. Token invalid or expired.' });
  }
};

const clearAllCookies = (res) => {
  res.clearCookie('token', {
    path: '/',
    sameSite: 'None',
    secure: false,
  });

  console.log('❌ Invalid token. Cleared cookies.');
};

module.exports = authMiddleware;
