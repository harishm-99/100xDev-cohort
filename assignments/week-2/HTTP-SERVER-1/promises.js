// Promises - These are syntactical sugar that makes the code loiok pretty

// Until now we have used other's asynchronous function now we will make our own.

// Our own synchronous function

// Our ugly Code
// const fs = require("fs");

// function harishReadfile(cb) {// All aync function are on the top of js files just like these, fs.readFile and setTimeout
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//         cb(data);
//     });
// }

// function onDone(data) {
//     console.log(data);
// };

// harishReadfile(onDone);

// The same code which replaces callbacks with promises

//Just the Pretty version of the code wth promises

// const fs = require("fs")

// function harishReadfile() {
//     return new Promise(function (resolve) {// Main Promise class starts
//         fs.readFile("a.txt", "utf-8", function (err, data) {
//             resolve(data);
//         });
//     });
// };

// //Callback fn to call
// function onDone(data) {
//     console.log(data);
// }

// harishReadfile.then(onDone);// Promises Calling

//Note:  Again, Promises are syntactical sugar which still uses callbacks under the hood

// Promises - It the just the class which makes async fn and callbacks slightly more readable

// let p = new Promise(function (resolve) {
//     resolve("Hii there from inside promise");// place for writer of async function do their magic and call resolve at the end with the data.
// });

// p.then(function () {// .then fn gets called whenever the async func. resolves
//     console.log(p);
// });


// //Dummy async fn that immediately resolves
// //Creating an async fn
// function harishAsyncFn() {
//     let p = new Promise(function (resolve) {
//         resolve("Hii there 2")
//     })
//     return p;
// };

// //Calling an async fn
// //actual logging the data when the promised fn is resolved
// let h = harishAsyncFn();

// h.then(function (data){
//     console.log(data);
// })

// Why perform async fn when it can performd through simple fn.

// //Normal Fn
// function harishAsyncFn() {
//     return "Hi there";
// };

// const data = harishNormalFn();
// console.log(data);


// We can actually but we will need to pass the call the callback which is what promises helps us with to write it in a cleaner fashion

// Intimidating Async fn
function harishAsyncFn() {
    const p = new Promise(function (resolve) {
        resolve("Hi there");
    });
    return p;
};

const value = harishAsyncFn();
value.then(function(data) {
    console.log(data);
})