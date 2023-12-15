let obj = {
    key1:"value1",
    key2:"value2",
    key3:"value3",
}

console.log("Keys : ",Object.keys(obj));
console.log("Values : ",Object.values(obj));
console.log("Entries : ",Object.entries(obj));
console.log("Has Own Property : ",obj.hasOwnProperty("key1"));//true - Properties present in the obj
console.log("Has Own Property : ", obj.hasOwnProperty("name"));//false
console.log("Assigning a new property to the Obj", Object.assign(obj,{newProperty:'newValue'}));

function objMethods(yourObj){
    console.log("Object : ", yourObj);
    console.log("Keys : ", Object.keys(yourObj));
    console.log("Values : ", Object.values(yourObj));
    console.log("Values : ", Object.entries(yourObj));
    console.log("Values : ", yourObj.hasOwnProperty("name"));//true
    console.log("Assigning values to an Object : ", Object.assign({}, yourObj, { newProperty: "newValue" }));
    
    console.log(delete yourObj.age);
    console.log(yourObj);
}

let obj1 = {
    name: "abc",
    age: "24",
    gender:"M"
}
objMethods(obj1);