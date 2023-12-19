// Async Await - Again just syntactical sugar, Still uses callback, promises under the hood

// // Async without await
// function harishsAsyncFnwithP() {
//     const p = new Promise(function (resolve) {
//         resolve("Hi there !");
//     });
//     return p;
// };

// function main() {
//     const value = harishsAsyncFnwithP();
//     value.then(function (data) {
//         console.log(data);
//     });
// };


// main();

// // Async await
// function harishsAsyncFnwithP() {
//     const p = new Promise(function (resolve) {
//         resolve("Hi there !");
//     });
//     return p;
// };

// async function main() {
//     const value = await harishsAsyncFnwithP();
//         console.log(value);
// };

// main();


// function harishsAsyncFnwithP() {
//     const p = new Promise(function (resolve) {
//         setTimeout(function () { resolve("Hola everyone !") },2000);
//     });
//     return p;
// };

// async function main() {
//     const value = await harishsAsyncFnwithP();
//     console.log(value);
//     console.log("Hi there 2");
// };

// main();

// console.log("Hi there 3");

function callback(cb) {
    setTimeout(function () {
        cb("Hi there from inside the call back after 2 seconds ! ")
    }, 2000);
};

callback(function (data) {
    console.log(data);
})
console.log("Hi there from outside callback ! ");


function promiseClass() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hi there from inside the promise class after 6 seconds ! ")
        }, 6000);
    })
};

promiseClass().then(function (data) {
    console.log(data);
})
setTimeout(function () {
    console.log("Hi there from outside promise class after 4 seconds ! ");
}, 4000);

function asyncAwait() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hi there again from inside the promise class after 10 seconds ! Sayonara !");
        }, 10000);
    });
};

async function main() {
    const value = await asyncAwait();
    console.log(value);
}

main();

setTimeout(function () {
    console.log("Hello there from outside the async await loop after 8 seconds ! ");
}, 8000);

setTimeout(function () {
    console.log(" \n");
}, 11000);

setTimeout(function () {
    console.log("Thanks for your time ! ;-p ");
}, 12000);