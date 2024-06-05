const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).send({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(500).send({ message: 'Failed to authenticate token' });
    }

    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
