// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

let x = 20;

if (x > 10) {
    console.log("x is greater than 10 !");
}
else {
    console.log("x is not greater than 10 !");
}


// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

let userAge = 20;

if (userAge >= 18) {
    console.log("\n\nThe user can drive a car.");
} else{
    console.log("The user cannot drive a car.");
}


// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

let score = 25;

console.log("\n");

if (score >= 90 && score <= 100) {
    console.log("Grade A");
}
else if (score >= 80 && score < 90 ) {
    console.log("Grade B");
}
else if (score >= 90 && score < 70) {
    console.log("Grade C");
}
else if (score >= 90 && score < 60) {
    console.log("Grade D");
}
else if (score >= 90 && score < 50) {
    console.log("Grade E");
}
else{
    console.log("The Student has failed to pass any grade. !");
}


// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

let time = 25;

console.log("\n")

if (time >= 0 && time<12) {
    console.log("Good Morning Everyone, Have a nice Day !");
}

else if (time >= 12 && time<16) {
    console.log("Good Afternoon !!");
}

else if (time >= 16 && time < 20) {
    console.log("Good Evening !");
}

else if(time >=20 && time <=24){
    console.log("Good Night, Sleep Well !");
}

else {
    console.log("Invalid Time !!!");
}


// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

let number = 2;

console.log("\n")

switch (number) {

    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;
    
    case 3:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("Wednesday");
        break;
    
    case 4:
        console.log("Thursday");
        break;
    
    case 5:
        console.log("Friday");
        break;
    
    case 6:
        console.log("Saturday");
        break;
    
    default:
        console.log("Invalid Entry !!!");
        break;
    
}


// Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

let num = 12;

console.log("\n");

switch (num) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
}


// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

let fruit = "Mango";

console.log("\n")

switch (fruit) {
    
    case 'Apple':
        console.log("It is an Apple.");
        break;
    
    case 'Papaya':
        console.log("It is a Papaya.");
        break;

    case 'Mango':
        console.log("It is a Mango");
        break;
}


// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

let temp = 46;

if (temp >= 0 && temp <= 40) {
    console.log("The Temperature "+temp+" is low");
}

else if (temp > 40 && temp <= 80) {
    console.log("The Temperature "+temp+" is medium");
}

else if (temp > 80 && temp <= 120) {
    console.log("The Temperature "+temp+" is High");
}

else {
    console.log("Invalid Entry");
}

// Question-9:   WAP that classifies a number as positive, negative, even, or odd.

let numb = -901;

if (numb > 0 && numb%2==0) {
    console.log("The Number is Positive & Even");
}

else if (numb > 0 && numb%2==1) {
    console.log("The Number is Positive & Odd");
}

else if (numb < 0 && numb%2==0) {
    console.log("The Number is Negative & Even");
}

else if (numb < 0 && numb%2!=0) {
    console.log("The Number is Negative & Odd");
}

else {
    console.log("The Number is Invalid");
}


// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

let username = 'harish';

if (username.length < 6) {
    console.log("Username too short !");
}
else if (username.length > 15) {
    console.log("Username too long !");
}

else {
    console.log("User Accepted");
}