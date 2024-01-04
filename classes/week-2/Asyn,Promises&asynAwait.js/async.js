//Asynchronous Functions

// fs.readFile
// setTimeout
// fetch()

let ans = 0;
function findSum(n) {
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);
console.log("Hello world")


const { log } = require("console");
// Some common async functions : setTimeout, fs.readFile - to read a file from our filesystem, fetch - to fetch a data from API end point

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
})

console.log("This is a message");

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