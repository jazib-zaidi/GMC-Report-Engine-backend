const jwt = require('jsonwebtoken');

exports.user = async (req, res) => {
  try {
    const token = req.token;
    res.json({ user: 'user' });
  } catch (err) {
    res.status(500).send('Error fetching GMC account info.');
  }
};
