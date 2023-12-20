// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


// const counter = new Date();

// let n = 10000;
// for (let i = 1000; i <= n;i+1000){
//     setTimeout(function () {
//         console.log(counter.getTime());
//     }, 2000 + i);
// }
// return 

let start = 0;
function startCounter(count) {
    setTimeout(function () {
        if (count >= start) {
            console.log(start++);
            startCounter(count);
        }
    }, 1000); // 1000 milliseconds = 1 second
}

// Start the counter with an initial value
startCounter(10);


































































// (Hint: setTimeout)