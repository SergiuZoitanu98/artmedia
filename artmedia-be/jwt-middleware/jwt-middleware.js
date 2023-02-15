const jwt = require("jsonwebtoken");
require('dotenv').config()

const authenticateToken = (User) => (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
      return res.status(401).json({message:"Unauthorized"});
    }
  
    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({message:"Forbidden"});
      }
      User.findOne({ email: user.email })
        .then((user) => {
          req.user = user;
          next();
        })
        .catch((err) => {
          res.status(400).json({message:err.message});
        });
    });
  };
  
  module.exports = authenticateToken;