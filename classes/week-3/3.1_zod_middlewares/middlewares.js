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




// In case of multiple method processing this becomes ineffiient this can be overcome by using fns/ however it is not idle better to use middlewares

// function userValidator(username, password) {
//     if (username != 'harish' || password != 'pass') {
//     return false;
//     }
//   return true;
// };

// function kidneyValidator(req,res, next){
//     if ((kidneyId != 1 && kidneyId != 2)) {
//      return false;
//     }
//     return true;
// };

// app.get('/health-check', function (req, res) {

// const username = req.headers.username;
// const password = req.headers.pass;
// const kidneyId = req.query.kidneyId;

// if (!userValidator(req.headers.username, req.headers.password)) {
//     res.status(403).json({
//         msg:"User doesn't exist"
//     })
//     return;
// }

// if (!kidneyValidator(kidneyId)) {
//     res.status(403).json({
//         msg:"wrong inputs"
//     })
//     return;
// }
//      do something with ur kidney
//     res.send( "Your health is healthy");
// })


// app.put('/replace-kidney', function (req, res) {
// const kidneyId = req.query.kidneyId;

// if (!userValidator(req.query.username, req.query.password)) {
//     res.status(403).json({
//         msg:"User doesn't exist"
//     })
//     return;
// }

// if (!kidneyValidator(kidneyId)) {
//     res.status(403).json({
//         msg:"wrong inputs"
//     })
//     return;
// }
//      do something with ur kidney
//     res.send( "Your health is healthy");
// })





//More better(concise) way using middlewares

// const express = require('express');
// const app = express();

// function userMiddlewares(req, res, next) {

//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != 'harish' || password != 'pass') {
//         return res.status(403).json({
//             msg: " Inputs are incorrect !!!"
//         });
//     }
//     next();
// }

// function kidneyMiddlewares(req, res, next) {

//     const kidneyId = req.query.kidneyId;

//     if (kidneyId != 1 && kidneyId != 2) {
//         return res.status(403).json({
//             msg:" Kidneys are not well !!"
//         })
//     }
//     next();
// }

// // app.get('/health-checkup', function (req, res, next) {
// //     console.log('Hello from req1');
// //     next();
// // }, function (req, res) {
// //     res.send('hello there')
// // });

// app.get('/health-checkup', userMiddlewares, kidneyMiddlewares, function (req, res) {
//     res.send('Your are healthy');
// });

// app.get('/kidney-checkup', userMiddlewares, kidneyMiddlewares, function (req, res) {
//     res.send('Your are healthy');
// });

// app.get('/heart-checkup', userMiddlewares, function (req, res) {
//     res.send('Your are healthy');
// });

// app.listen(3001);


// Counthe no. of visitors in the site

// const express = require('express');
// const app = express();

// let noOfVisitors = 0;

// function countVisitors(req, res, next) {
//     noOfVisitors++;
//     console.log(noOfVisitors);
//     next();
// }

// app.get('/health-checkup', countVisitors, function (req, res) {

// })

// app.listen(3000);




const express = require('express');
const app = express();

app.use(express.json());

app.post('/', function (req, res) {
    console.log(req.body);
    res.status(200).send(req.body.msg);
})

app.listen(3001);