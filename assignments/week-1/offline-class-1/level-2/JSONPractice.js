const users = '{ "name": "Harish Mahato","gender": "Male","age":"24"}';

console.log(typeof (users));
// console.log(user['age']);

// JSON.parse - Converting into Object format
let user=JSON.parse(users);

console.log(typeof(user));
console.log(user['age']);

// JSON.stringify - Convert into String format

console.log("\nStringify Section:-\n");
let user2 = {
    name: "Harkirat Singh",
    age: "24",
    gender:"Male"
}

console.log(typeof (user2));

let finalString = JSON.stringify(user2);
console.log(typeof(finalString));
console.log(finalString["name"]);//undefined
console.log(finalString);