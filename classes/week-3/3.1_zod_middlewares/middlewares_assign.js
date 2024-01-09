const express = require('express');
const app = express();

// app.use((req,res,next) => {
//     req.startTime = Date.now();
//     next(); 
// })

function startRequest(req, res, next) {
    req.startTime = Date.now();
    next();
  };

let count = 0;
function noOfRequests(req, res, next) {
    console.log(count+=593);
    // Middleware to log request end time
    req.endTime = Date.now();
    let requestTime = req.endTime - req.startTime;
    console.log(`Request time: ${requestTime} ms`);
    next(); 
}

app.get('/',startRequest, noOfRequests , function (req, res) {
    res.send("Ok");
});

app.listen(3002);