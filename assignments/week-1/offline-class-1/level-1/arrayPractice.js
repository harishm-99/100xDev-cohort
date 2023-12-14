let arr = [1, 2, 3];

//push - adds one.
let op = arr.push(1,2);
console.log(op);// Length
console.log(arr);

//pop - removes one from end
let op2 = arr.pop();
console.log(arr);

//shift - removes one from the beginning
let op3 = arr.shift();
console.log(arr);

//unshift - adds one at the beginning
let op4 = arr.unshift(98);
console.log(arr);

//concat - adding two arrays
let arr2 = [4, 5, 6];
console.log(arr.concat(arr2));
// Anotherway
let arrFinal = [];
arrFinal = arrFinal.concat(arr,arr2);
console.log("Array Final : "+arrFinal);

//foreach() - For each element in an array

// console.log(arr);
function print(str) {
    console.log(str);
}

arr.forEach(print);

//Later - maps,filter,find,sort
