// const express = require('express');
// const app = express();

// //Dumb way of input validation - doesn't follows DRY
// app.get("/health-checkup", function (req, res) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (username != 'harish' || password != 'pass') {
//         res.status(400).json({
//             msg: "Wrong inputs!!!"
//         })
//         return;
//     }
//     if ((kidneyId != 1 && kidneyId != 2)) {
//         res.status(400).json({
//             msg: "There is some problem with ur kidneys !"
//         })
//         return;
//     }
//     res.status(200).json({
//         //do something with the kidney here
//         msg: "Your kidney is fine !"
//     })
// });

// app.listen(3000);




// In case of multiple method processing this becomes ineffiient this can be overcome by using fns

// function userMiddleware(req, res, next) {
//     if (username != 'harish' || password != 'pass') {
//         res.status(403).json({
//             msg: "Wrong inputs!!!"
//         })
//     } else {
//         next();
//     }
// };
// function kidneyMiddleware(req,res, next){
//     if ((kidneyId != 1 && kidneyId != 2)) {
//         res.status(403).json({
//             msg: "There is some problem with ur kidneys !"
//         });
//         next();
//     }
// };

// app.get('/health-check',userMiddleware,kidneyMiddleware, function (req, res) {
//     res.send( "Your health is healthy");
// })
// app.put('/kidney-check', userMiddleware, kidneyMiddleware, function (req, res) {
//     res.send( "Your kidney is healthy");
// })
// app.get('/heart-check', userMiddleware, function (req, res) {
//     res.send("Your heart is healthy");
// })



//More better(concise) way of using middlewares

const express = require('express');
const app = express();

app.get('health-checkup', function (req, res, next) {
    console.log('Hello from req1');
}, function (req, res) {
    console.log('hello from req2');
});

app.listen(3001);