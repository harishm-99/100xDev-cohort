//create an http server
//express
//node defaut library => no

const express = require('express');
const app = express();

function sum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

//by default it gives,(Cannot get /)

app.get("/", function (req, res) {
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hi, Your ans is "+ ans);
})

app.listen(3001);

//Internal server Error(500)
// const express = require('express')
// const app = express();

// app.get('/', function (req, res) {
//     throw new Error('aasdass')
// })

// app.listen(3002);