
// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

const distanceInKilometer = 25;

const distanceInMeter = 25 * 1000;
const distanceInCentimeter = 25 * 100000;

console.log("The Kilometer Distance of " + distanceInKilometer + " in meter is : " + distanceInMeter);
console.log("The Kilometer Distance of " + distanceInKilometer + " in centimeter is : " + distanceInCentimeter);


// The same program with the use of functions

function distanceInMeters() {
    let m = distanceInKilometer * 1000;
    return m;
}

function distanceInCentimeters() {
    let cm = distanceInKilometer * 100000;
    return cm;
}

console.log("The Kilometer Distance of " + distanceInKilometer + " in meter is : " + distanceInMeters()+" meters.");
console.log("The Kilometer Distance of " + distanceInKilometer + " in centimeter is : " + distanceInCentimeters()+" centimeters.");

// Question-2:    WAP to input radius of a circle and log the area of circle.

const circleRadius = 3;
const pi = 3.14;

function circleArea() {
    let area = 2 * pi * circleRadius;
    return area;
}

console.log("\n\nThe radius of the circle is : " + circleRadius);
console.log("The area of circle is : "+circleArea()+ " cm");

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

const num1 = 3;
const num2 = 7;

function sum() {
    var sum = num1 + num2;
    return sum;
}

console.log("\n\nThe sum of numbers " + num1 + " & " + num2 + " is " + sum());

function sub() {
    sub = num1 - num2;
    return sub;
}

console.log("The sub of numbers " + num1 + " & " + num2 + " is " + sub());

function mul() {
    let mul = num1 * num2;
    return mul;
}

console.log("The mul of numbers " + num1 + " & " + num2 + " is " + mul());

function div() {
    let div = num1 / num2;
    return div;
}

console.log("The div of numbers " + num1 + " & " + num2 + " is " + div());


// Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

const sub1 = 67;
const sub2 = 88;
const a = [sub1, sub2];

let totalmarks = sub1 + sub2;
let total = 200;

console.log("\n\nThe total marks scored in subjects sub1 & sub2 is " + total);

function percentage() {
    let percentage = (totalmarks/total)*100;
    return percentage;
}

console.log("The percentage of marks scored in subjects 1 and 2 is : " + percentage());


// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

const length = 35;
const breadth = 65;

function areaRectangle() {
    let area = length * breadth;
    return area;
}

console.log("\n\nThe Area of rectangle with length " + length + " and breadth " + breadth + " is : " + areaRectangle());

function perimeterRectangle() {
    let perimeter = 2*(length + breadth);
    return perimeter;
}

console.log("The Perimeter of rectangle with length " + length + " and breadth " + breadth + " is : " + perimeterRectangle());


// Question-6:    WAP to input n numbers and log the average of those number.

const n = [7, 8, 9, 4, 5, 2, 5, 6, 7, 8, 9];
let sum1 = 0;

for (let i = 0; i < n.length; i++){
    sum1 = sum1 + n[i];
}

console.log("\n\nThe sum of n numbers is : " + sum1);

let average = sum1 / n.length;

console.log("The average of n numbers is : " + average);


// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

let distance = 20;

console.log("\n\nThe given distance is : " + distance + " kms");

let distanceInMeter1 = 20 * 1000;
console.log("\nThe distance in meter is : " + distanceInMeter1 + " meters.");

let distanceInFeet = 20 * 3280.8399;
console.log("The distance in feet is : " + distanceInFeet + " feets.");

let distanceInInches = 20 * 39370.0787;
console.log("The distance in meter is : " + distanceInInches + " inches.");

let distanceInCentimeter1 = 20 * 100000;
console.log("The distance in centimeter is : " + distanceInCentimeter1 + " Centimeters.");


// Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

const tempF = 20;

console.log("\n\nThe temperature in Fahrenheit : " + tempF);

let tempC = (tempF-32)*5/9;

console.log("The temperature in Celsius is : " + tempC);


// Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

const quantity = 5;
const rate = 25;

let amount = rate * quantity;

console.log("\n\nYour total bill is : Rs " + amount + " for " + quantity + " no. of products pricing at Rs. " + rate + " each.");

let discountedPrice = 10 / 100 * amount;

let finalAmount = amount - discountedPrice;

console.log("A discount of 10% will be given. i.e. Rs. " + discountedPrice + ". So your discounted price will be : " + finalAmount);


// Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

const principalAmount = 2000;
const rateOfInterest = 20;
const time = 5;

let simpleInterest = (principalAmount * rate * time)/100;

console.log("\n\nThe Simple Interest of Product with Principle Amount Rs."+principalAmount+",at an interest rate of "+rateOfInterest+"%, for a time period of "+time+" years, is :"+simpleInterest);