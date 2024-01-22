const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const allUsers = [{
    username: "Harish Mahato",
    password: "123456",
    name: "Harish"
},
{
    username: "Shiwani Singh",
    password: "8825",
    name: "Shiwani"
},
{
    username: "Shuryansh",
    password: "5689",
    name: "Shuryansh Kumar"
}]

function userExists(username, password) {
    let userExist = allUsers.find((user) => { return user.username === username && user.password === password })
    return userExist !== undefined;
}

app.post('/signin', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (!userExists(username, password)) {
        res.status(403).json({
            msg: "Invalid credentials"
        })
    } else {
        const token = jwt.sign({ username }, jwtPassword)
        res.json({
            token
        })
    }
});

app.get("/", function (req, res) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username;
        res.json({
            users: allUsers.filter(function (user) {
                if (user.username === username) {
                    return false
                } else {
                    return true
                }
            })
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token !!!"
        })
    }
})

app.listen(3003);