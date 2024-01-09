// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('/health-check', function (req, res) {
//     const kidneys = req.body.kidney;
//     const kidneyLength = kidneys.length;

//     res.send('The length of the kidney is ' + kidneyLength);
// });

//Other than if else input validations, there are global catches
// Global Catchessss - It help us give the user a better error message

//Global Catches (Error Handling Middleware:This is a special type of middleware function in Express that has four arguments instead of three('err, req, res, next')). Express recognizes it as an error-handling because of these four arguments

// app.use(function (err, req, res, next) {
//     res.json({
//         msg: "Sorry! Somethings up with the server "
//     })
// })

// app.listen(3001);


