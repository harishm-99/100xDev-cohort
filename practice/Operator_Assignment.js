// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

let m1 = 5;
let m2 = 10;

console.log("The Arithmetic Operations between the numbers are :")

function addition(n1, n2) {
    let sum = n1 + n2;
    return sum;
}

function subtraction(n1, n2) {
    let sub = n1 - n2;
    return sub;
}

function multiplication(n1, n2) {
    let mul = n1 * n2;
    return mul;
}

function division(n1, n2) {
    let div = n1 / n2;
    return div;
}

console.log("The addition of num1 and num2 is : " + addition(m1, m2));
console.log("The subtraction of num1 and num2 is : " + subtraction(m1, m2));
console.log("The multiplication of num1 and num2 is : " + multiplication(m1, m2));
console.log("The division of num1 and num2 is : " + division(m1, m2));


// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

let c = 5;

console.log("\n\nThe addition of numbers by assignment operators are : ", c += 6);
console.log("The subtraction of numbers by assignment operators are : ", c -= 7);
console.log("The multiplication of numbers by assignment operators are : ", c *= 2);
console.log("The power of numbers by assignment operators are : ", c *= 2);
console.log("The division of numbers by assignment operators are : ", c /= 2);
console.log("The remainder of numbers by assignment operators are : ", c %= 2);
console.log("The increment of numbers by assignment operators are : ", ++c);
console.log("The increment of numbers by assignment operators are : ", c++);
console.log("The increment of numbers by assignment operators are : ", c);
console.log("The increment of numbers by assignment operators are : ", --c);
console.log("The increment of numbers by assignment operators are : ", c--);
console.log("The increment of numbers by assignment operators are : ", c);


// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

let c1 = 5;
let c2 = 7;

if (c1 == c2) {
    console.log("\n\nNum1 is Equal to Num2", );
}
else if (c1 > c2) {
    console.log("Num1 is Greater than Num2");
}
else if (c1 < c2) {
    console.log("Num1 is lesser than Num2");
}

// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

let l = 5;
let m = 6;

console.log("\n")

if (l %2== 0 && m%2==0) {
    console.log("l and m both are even numbers !");
}
else if (l %2== 0 || m%2==0) {
    console.log("Either l or m is an even number !");
}
else {
    console.log("None is an even no. !!!")
}


// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

// bitwise operators : &, |, ^, ~, <<, >>, >>>

let a = 9;
let v = 5;

console.log("\n\n")
console.log(a & v);
console.log(a | v);
console.log(a ^ v);
console.log(~v);
console.log(a << v);
console.log(a >> v);
console.log(a >>> v);

// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

let d = 10;

let e = 20;

console.log(d > e ? d : e);

// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

console.log("\n\n");

let g = "Harish";
let g1 = 7;
let gb = true;
let gn = null;
let gu;
let gbI = 98765432345678;
let gA = [8, 5, 4, 6, 8];
let gO = { n: 1, o: "ABC" };

console.log(typeof (g));
console.log(typeof (g1));
console.log(typeof (gb));
console.log(typeof (gn));
console.log(typeof (gu));
console.log(typeof (gbI));
console.log(typeof (gA));
console.log(typeof (gO));


// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

// String Operators - (+, +=)
let name1 = "Harish";
let name2 = " Mahato";

console.log(name1 + name2);
console.log(name1 += name2);


// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

// --> Same answer as for Question 7.


// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

console.log("\n\n")

let student = {
    name: 'Arbind',
    lastName: "Kumar",
    roll: 120,
    age: 20,
    address: "BTM 2nd stage, Dollar Street, Bengaluru"
}

console.log(typeof('name' in student));