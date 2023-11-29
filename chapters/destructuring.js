let arr = [5, 6, 8];
let arr2 = [7, 9, 0, 4, 5];

// No need to do this
// let a = arr[0]
// let b = arr[1]
// console.log(a, b)

let [c, d, e] = arr;
console.log(c, d, e)

// let [w,q,s] = arr2;
// console.log(w, q, s);

// let [w, q, s, ...rest] = arr2;
// console.log(w, q, s, rest);

let [w, , , ...rest] = arr2;
console.log(w, rest);

// Object Destructuring

let obj = {
    a: 1,
    b: 2
};

let {a,b} = obj
console.log(a,b);


// Spread Operator

let arr1 = [3, 4, 5];
let obj1={...arr1}

console.log(obj1);

function sum(v1, v2, v3) {
    return v1 + v2 + v3;
}

console.log(sum(...arr1));// Spread operator used using function

let obj2 = {
    name:"Harish",
    Company : "ABC Company",
    address : "Dollar Street"
}

console.log({ ...obj2 });
console.log({ ...obj2, name :"Rahul" });
console.log({ name:Tushar, ...obj2 });//This will print the obj2 w/o changing any value
