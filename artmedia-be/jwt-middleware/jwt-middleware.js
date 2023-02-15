const jwt = require("jsonwebtoken");
require('dotenv').config()

const authenticateToken = (User) => (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      User.findOne({ email: user.email })
        .then((user) => {
          req.user = user;
          next();
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    });
  };
  
  module.exports = authenticateToken;