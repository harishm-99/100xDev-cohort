console.log(Math.random());
console.log(Math.ceil(2.57));
console.log(Math.floor(2.57));
console.log(Math.max(2.57,34));
console.log(Math.min(2.57,34));
console.log(Math.pow(2,3));
console.log(Math.sqrt(5));

function mathOps(value) {
    console.log("Original Value ; ", value);

    let random = Math.random();
    console.log(random);

    console.log(Math.ceil(value));
    console.log(Math.floor(value));
    console.log(Math.max(2.57,34));
    console.log(Math.min(2.57,34));
    console.log(Math.pow(value,3));
    console.log(Math.sqrt(value));
}

mathOps(9);