// # Datatypes
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined

// let firstName: String = "Harish";

// function greet(firstName: String) {
//     console.log((`Hello ${firstName}`));
// }

// greet("Harish");

// # functions
// function calculateSum(num1: number, num2: number){// Type Inference - automatically assumes output is a number
// function calculateSum(num1: number, num2: number): number{
//     return num1 + num2;
// }

// let result1 = calculateSum(4, 5);
// console.log(result1);

// function isLegal(age: number) {// implicit conversion - type inference
// function isLegal(age: number) : boolean {
//     console.log(`The age is ${age}`);
//     if (age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isLegal(2));

//function

// function delayedCall(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// delayedCall(function() {
//     console.log("hi there");
// })


// function
// function runsAfter1sec(fn: ()=> number){
//     setTimeout(() => {
//         fn
//     }, 1000);
// }

// runsAfter1sec(() => {
//     return 6+8;
// })

// const num3: string = "Hi";
// console.log(num3);


// Interfaces - defining global variables/set of variables/objects.

// function isLegal(user: {// We cannot use this objects of datatypes again and again for multiple functions (violation of DRY principle).
//     firstName: string,
//     lastName: string,
//     age: number
// }) {

// So interface is used to solve this violation

// interface User{
//     firstName: string,
//     lastName: string,
//     age: number
//     email?: string // '?' means it is an optional field
// Rest fields are required to pass in the fn call
// }// This single interface can be used in multiple function calls hence solving DRY issue.

// function isLegal(user: User){
//     if (user.age < 18) {
//         console.log(false);

//     } else {
//         console.log(true);
//     }
// }

// function greet(user: {// Multiple usage of object defination (Violating DRY)
//     firstName: string,
//     lastName: string,
//     age: number
// }) {
// function greet(user: User){
//     console.log(`Hello ${user.firstName} ${user.lastName}`);
// }

// greet({
//     firstName: "Sadanand",
//     lastName: "Kumar",
//     age: 27
// });

// isLegal({
//     firstName: "Harish",
//     lastName: "Mahato",
//     age: 25
// })



// interface can be used as inherited parent class

// interface Person {
//     name: string,
//     age: number,
//     greet(phrase: string): void
// }

// class Employee{
//     name: string;
//     age: number;

//     constructor(n: string, a: number){
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name} ${this.age}`);
//     }
// }

// const emp1 = new Employee("Harish", 25);

// console.log(emp1.greet("Hey"));


// The major difference between a type and interface is an interface can be inherited/implemented as class while dt cannot.


// Types - Very similar to interfaces, types let us aggregate data together

// * Types cannot be used to implement classes

// * Also types let us do other things

// 1. Unions - Let us print a object variable which can either be a number or a string. We cannot do this using interfaces.

// function greet(id: (number | string)) {// fn takes id as it can either be a number or a string.
// This can also be done easily in types.

//Unions

// type greetArg = string | number | boolean;

// function greet(id: greetArg){
//     console.log(`ID: ${id}`);
// }
// greet(1);
// greet("1");

// Other than this it is very similar to interfaces


// 2. Intersection - Type that has every property of multiple types/interfaces
// * We cannot do this in interfaces
type Employee = {
    name: string;
    startDate: Date;
}

interface Manager {
    name: string;
    department: string;
}


// interface TechLead = Employee & Manager;// error - cannot use interface to intersect
type TechLead = Employee & Manager;

const t: TechLead = {
    name: "Harish",
    startDate: new Date(),
    department: "Dvelopment"
};

// What is the difference between interface and type:-
// - Interface can be extend in the class that types cannot  and types let us do ORs/ANDs and unions and intersection that interface cannot.


// Arrays

// type ArrType = number[];
// interface ArrType { number[]}// cannot define using interface

// function maxValue(arr: number[]) {// can be this way too
// function maxValue(arr: ArrType) {
//     let maxValue = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//         }
//     }
//     return maxValue;
// }

// console.log(maxValue([1, 2, 3]));

interface TypeUsers {
    firstName: string;
    lastName: string;
    age: number;
}

function isLegal(users: TypeUsers[]) {
    return users.filter(x => x.age >= 18);
}

console.log([{
    firstName: "Harish",
    lastName: "Mahato",
    age: 25
},{
    firstName: "Kumar",
    lastName: "Mahato",
    age: 25
}]);
