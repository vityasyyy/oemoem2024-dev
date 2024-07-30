const jwt = require('jsonwebtoken');
const User = require('../Models/users');
const BlacklistedToken = require('../Models/tokenBlacklist');

module.exports = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
  
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
  
    try {
        // Check if token is blacklisted
        const blacklistedToken = await BlacklistedToken.findOne({ token });
        if (blacklistedToken) {
            return res.status(401).json({ error: 'Token has been invalidated.' });
        }
  
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach the user to the request object
        req.user = {
            _id: decoded._id,
            email: decoded.email,
            username: decoded.username,
            iat: decoded.iat,
            exp: decoded.exp
            // Add any other fields you need here
        };
        console.log(req.user);
        req.token = token;  // Store the token for potential blacklisting
  
        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
