/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


//Conversion tp seconds is still left
function calculateSum(n) {
    let a = 0;
    for (let i = 0; i <= n; i++) {
        a = a + i;
    }
    return a;
}

function calculateTime(val, func) {
    let beforeDate1 = new Date();
    let beforeTime1 = beforeDate1.getTime();

    let result = func(val);

    let afterDate1 = new Date();
    let afterTime1 = afterDate1.getTime();

    console.log("Sum of numbers 1 to " + val + " is :" + result);
    console.log("Time taken : " + (afterTime1 - beforeTime1) + " microseconds \n");

}

calculateTime(100, calculateSum);
calculateTime(100000, calculateSum);
calculateTime(1000000000, calculateSum);


