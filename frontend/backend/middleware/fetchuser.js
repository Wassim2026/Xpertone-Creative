const jwt = require('jsonwebtoken');
const config = require('../config');

const fetchuser = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ error: "Unauthorized: No token" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const data = jwt.verify(token, config.JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorized: Invalid token" });
  }
};


module.exports = fetchuser;