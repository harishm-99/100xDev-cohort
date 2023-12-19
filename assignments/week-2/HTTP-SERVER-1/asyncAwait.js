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


function harishsAsyncFnwithP() {
    const p = new Promise(function (resolve) {
        resolve("Hi there !");
    });
    return p;
};

function main() {
    const h = harishsAsyncFnwithP();
    h.then(function(data) {
        console.log(data); 
    });
};

main();