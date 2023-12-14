// Class, Math, JSON, Date, Object

const dog = {
    name: "Dog",
    speaks: "bhow bhow",
    legCount:"4"
}
const cat = {
    name: "Cat",
    speaks: "meow meow",
    legCount:"4"
}

function animalIs(animal) {
    console.log("The animal is " + animal['name'] +" and it speaks "+ animal['speaks']);
}

// console.log(`The animal is ${dog.name} and it speaks ${dog.speaks}`);
// console.log("The animal is " + dog['name'] +" and it speaks "+ dog['speaks']);
// console.log("The animal is " + dog.name +" and it speaks "+ dog.speaks);

// console.log("The animal is " + cat['name'] +" and it speaks "+ cat['speaks']);

animalIs(dog);
animalIs(cat);

//The same results can be obtained through classes

class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    speak() {
        console.log("Hi there, " + this.speaks);
    }
    static legs() {
        console.log("Animal")
    }
    walk() {
        
    }
}

//Don't do this
// let dog1 = {
//     name: 'Dog',
//     legsCount: '4',
//     speaks: 'bhow bhow'
// }

//Do This
// Creating an Object
let dog1 = new Animal('Dog', '4','bhow bhow');

console.log('The animal is', dog1.name, ".It speaks " + dog1.speaks + " and has ", dog1.legCount, " legs")
dog1.speak();// Call function on object