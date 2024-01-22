// Try catch - Throwing and catching errors in JS

// let a;

// console.log(a.length);// error
// console.log("Hello");//not executed, stucked in error
// When an exception is raised the process exits since the JS program doesn't want to proceed anymore

try {   
    let a;
    console.log(a.length);
    console.log("hi there2");
} catch (e) {
    console.log("From inside the catch statement")
}
//try catch statement

// If no exceptions occur, then it proceeds to line 19
console.log("Hello");