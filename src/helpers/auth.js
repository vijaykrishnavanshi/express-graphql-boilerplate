let jwt = require('jsonwebtoken');
const config = require('../../config');

let verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token && token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  req.isAuthenticated = false;
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid',
        });
      } else {
        req.authUser = decoded;
        req.isAuthenticated = true;
      }
    });
  }
  next();
};

module.exports = {
  verifyToken,
};
