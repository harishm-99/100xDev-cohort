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

for (let i = 0; i <= arr2.length - 1; i++) {
    if (arr2[i]) {

    }
}


// 3. Write a program that prints all the male people’s first name given a complex object 
// 4. Write a program that reverses all the elements of an array
