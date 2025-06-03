const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).send({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        console.log("Decoded token:", decoded)
        req.user = decoded;
        next();
    } catch (ex) {
        return res.status(400).send({ error: 'Invalid token.' });
    }
};

module.exports = authenticate;

