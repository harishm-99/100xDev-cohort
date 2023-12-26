// // // function square(a) {
// // //     return a * a;
// // // }

// // // function cube(a) {
// // //     return a * a * a;
// // // }

// // // function sumOfSomethings(a,b,cb) {
// // //     let fn1 = cb(a);
// // //     let fn2 = cb(b);

// // //     return fn1 + fn2;
// // // }

// // // console.log(sumOfSomethings(2,3, square));


// // // Async
// // // const fs = require('fs');

// // // const a = 1;
// // // console.log(a);

// // // fs.readFile("a.txt", "utf-8", function (err, data) {
// // //     console.log(data);
// // // })

// // // let ans = 0;

// // // for (let i = 0; i < 100; i++){
// // //     ans += i;
// // // }
// // // console.log(ans);

// // // Promises

// // //Callback Hell
// // function harishSettimeout(fn,Interval) {
// //     setTimeout(fn, Interval);
// //     };

// // harishSettimeout(function () {
// //         console.log("Hello there !");
// //         harishSettimeout(function () {
// //             console.log("Hello There 2");
// //         }, 2000);
// // }, 1000);

// // // To cope this we use promises and async await.

// // function harishSettimeout2(Interval) {
// //     let p = new Promise(function (resolve) {
// //         setTimeout(resolve, Interval);
// //     });
// //     return p;
// // }

// // harishSettimeout2(3000).then(function () {
// //         console.log("Hello there 3!")
// // })

// // //Asyn Await

// // function harishSettimeout3(Interval) {
// //     let p = new Promise(function (resolve) {
// //         setTimeout(resolve, Interval);
// //     });
// //     return p;
// // }
// // async function main() {
// //     await harishSettimeout3(4000).then(function () {
// //         console.log("Hello there 4!")
// //     })
// // }

// // main();

// console.log("In the top 1");
// function promisifiedFunction() {
//     console.log("Inside the function 3");
//     return new Promise(function (resolve) {
//         console.log("Inside the promisified function 4");
//         setTimeout(function () {
//             console.log("SetTimeout Over promisified function 5");
//             resolve("Hi there, tasks done !!!")
//         }, 5000);
//     })
// }
// console.log("In the middle 2");
// promisifiedFunction().then(function (value) {
//     console.log("Promisified fn logged out 6");
//     console.log(value);
// })
