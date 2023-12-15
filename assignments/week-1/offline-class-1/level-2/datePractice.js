const currentDate = new Date();

console.log(currentDate.getDate());
console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());


console.log("Time in ms since 1970 :",currentDate.getTime());


function calculateSum() {
    let a = 0;
    for (let i = 0; i < 100000000; i++){
        a = a + i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

 console.log(calculateSum());

const afterDate = new Date();
const afterTimeInMS = afterDate.getTime();

let timeTaken = afterTimeInMS - beforeTimeInMs;
console.log("Time taken in function call : "+ timeTaken);

function currentTimePrint() {
    console.log(new Date().getTime());
}

setInterval(currentTimePrint, 1000);