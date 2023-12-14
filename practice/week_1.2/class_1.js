// If Else, For Loops :-

// 1. Write the program to greet a person given their first and last name 

let firstName = "Harish";
let lastName = " Mahato";

console.log("Hello, " + firstName + lastName);


// 2. Write a program that greets a person based on their gender. (If else) 

let gender = "Male";

if (gender == "Male") {
    console.log("Hello, Sir");
}
else if (gender == "Female") {
    console.log("Hello, Ma'am");
}
else {
    console.log("Invalid Entry");
}

// 3. Write a program that counts from 0 - 1000 and prints (for loop)

let sum = 0;

for (let i = 0; i <= 1000; i++) {
    sum = sum + i;
}

console.log(sum);

//Arrays & objects :-

// 1. Write a program prints all the even numbers in an array 

let arr = [3, 4, 5, 7, 8, 9, 10, 12, 18]

console.log("\nThe nos in the array are : ")

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

// 2. Write a program to print the biggest number in an arrya 

let arr2 = [34, 56, 76, 12, 90, 367, 6, 112, 234, 45, 36,];
let largest = 0;

for (let i = 0; i <= largest; i++) {
    if (arr2[i]>largest) {
        largest = arr2[i];
    }
}
console.log(largest);


// 3. Write a program that prints all the male people’s first name given a complex object 

let obj1 = [{
    firstName: "Harish",
    lastName: "Mahato",
    age: 24,
    gender: "Male"
    },
    {
        firstName: "Rishi",
        lastName: "Raj",
        age: 26,
        gender: "Male"
    },
    {
        firstName: "Krutika",
        lastName: "Suresh",
        age: 21,
        gender: "Female"
    }
    ];

for (let i = 0; i <= obj1.length - 1; i++) {
    if (obj1[i].gender == "Male") {
        console.log(obj1[i].firstName);
    }
}


// 4. Write a program that reverses all the elements of an array

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = arr3.length; i > 0 ; i--){
    console.log(arr3[i]);
}