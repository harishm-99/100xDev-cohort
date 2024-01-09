// How to do better input validations?
// It is importatnt to do input validations for sign up, signin for this there needs to be a valid email / password which should be a good format. eg. abc@123. ANnd its very hard to do the amount of validations I have to do, for thatb reason Input libraries came. i.e zod is one of such libraries in node.

// ZOd - Schema Validation with static type inference

// const express = require('express');
// const zod = require('zod');
// const app = express();

// const schema = zod.array(zod.number());

//{
// email: string => abc@gmail.com
// password: atleast 8 letters
// country:"IN", "US"
// }
//

// const schema = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: zod.literal("IN").or(zod.literal("US")),
//     kidney : zod.array(zod.number)
// })
    
// app.use(express.json());

// app.post('/health-check', function (req, res) {
//     const kidneys = req.body.kidney;
//     const response = schema.safeParse(kidneys);

//     if (response.success!=true) {
//         res.status(411).json({
//             msg: "Invalid input"
//         })
//     } else {
//         res.send({ response })
//     }
// });

// app.listen(3001);

// If arr is an array of strings with atleast 1 input, return true, else return false




// function validateArr(arr) {
//     if (typeof arr == 'object' && arr.length >= 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // while zod only takes a multiple line of code to execute this validation

// const zod = require('zod');

// function validateR(arr){
//     const schema = zod.array(zod.number());

//     const response = schema.safeParse(arr);
//     console.log(response);
// }

// validateR([1, 2, 3]);





// An object {
// email: taking email as input
// password: min 8 letters
// }

// const zod = require('zod');

// const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8)
// })

// function validateInput(data) {
//     const response = schema.safeParse(data);
//     console.log(response);
// }

// validateInput({
//     email: 'harish@gmail.com',
//     password: '98765435'
// });

// validation using https

const zod = require('zod');

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})

const response = schema.par