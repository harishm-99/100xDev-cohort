const { User } = require("../db");
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    
    const token = req.headers.authorization;
    const word = token.split(" ")
    const decodedToken = word[1];
    try {
        const decoded = jwt.verify(decodedToken, JWT_SECRET);
        if (decoded.username) {
            req.username = decoded.username;
            next();
        } else {
            res.json({
                msg: "Invalid Authentication!"
            })
        }
    } catch (e) {
        res.json({
            msg:"Invalid token!"
        })
    }
    
}

module.exports = userMiddleware;