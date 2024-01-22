//Express is a routing and middleware web framework that has minimal functionality of its own: An express application is a series of middleware function calls

// Middlewares -  Fns thatbhave access to the request object(req), the response object(res), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next.

// Middleware fns can perform the following tasks:-

// 1. Execute any code.
// 2. Make changes to the request and the response objects.
// 3. End the request-response cycle.
// 4. Call the next middleware function in the stack

// Multiple middlewares are used because instead of a single big middleware so that they can be reused again.

const express = require('express');
const app = express();

//Long Process

// function isOldEnough(age) {
//     if (age > 18 && age < 65) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isOldEnoughMiddleware(req,res,next) {
    let age = req.query.age; 
    if (age > 18 && age < 65) {
        next();
    } else {
        res.status(400).json({
            msg:"Not Eligible"
        })
    }
}
    
//Long Process

// app.get("/ride1", function (req, res) {
//     if (isOldEnough(req.query.age)){
//         res.json({
//             msg:"Welcome user, You have successfully ridden the ride1."
//         })
//     } else {
//         res.status(411).json({
//             msg:"You are not of right age yet."
//         })
//     }
// })

//Short
// For Single Use
// app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
//         res.json({
//             msg:"Hey User, You have also ridden the ride2."
//         })
// })


//For multiples

app.use(isOldEnoughMiddleware);


app.get("/ride3", function (req, res) {
        res.json({
            msg:"Hey User, You have also ridden the ride3."
        })
})

app.get("/ride4", function (req, res) {
        res.json({
            msg:"Hey User, You have also ridden the ride4."
        })
})

app.get("/ride5", function (req, res) {
        res.json({
            msg:"Hey User, You have also ridden the ride5."
        })
})

// app.use(isOldEnoughMiddleware); Useless to pass here

app.listen(3002);