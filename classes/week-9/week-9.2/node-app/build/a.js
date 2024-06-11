"use strict";
const t = {
    name: "Harish",
    startDate: new Date(),
    department: "Dvelopment"
};
function isLegal(users) {
    return users.filter(x => x.age >= 18);
}
console.log([{
        firstName: "Harish",
        lastName: "Mahato",
        age: 25
    }, {
        firstName: "Kumar",
        lastName: "Mahato",
        age: 25
    }]);
