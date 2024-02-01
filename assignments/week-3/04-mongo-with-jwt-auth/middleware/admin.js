const jwt = require('jsonwebtoken');
const JWT_SECRET = require("../config.js");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1]; 
    
    try {
        const decoded_value = jwt.verify(jwtToken, JWT_SECRET);
        if (decoded_value.username) {
            next();
        } else {
            res.status(403).json({
                msg:"You are not authenticated!"
            })
        }
    } catch (error) {
          // Invalid token format or signature
          res.status(401).json({ error: 'Invalid token' });
      }

}

module.exports = adminMiddleware;