/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

let category1 = [{
  itemName: "MAC Pro",
  category: "category1",
  price: 2000,
  timestamp: "10:00 PM"
},
{
  itemName: "Xbox 1050",
  category: "category1",
  price: 1000,
  timestamp: "11:00 PM"
}
];

let total_amount_spent_on_category1 = 0;
for (let i = 0; i < category1.length; i++) {
  total_amount_spent_on_category1 = total_amount_spent_on_category1 + category1[i].price;
}
console.log(total_amount_spent_on_category1);

let category2 = [{
  itemName: "Chair",
  category: "Home",
  price: 30,
  timestamp: "11:20 PM"
},
{
  itemName: "Surf Excel Soap",
  category: "Home",
  price: 10,
  timestamp: "11:10 PM"
}
];

let total_amount_spent_on_category2 = 0;
for (let i = 0; i < category2.length; i++) {
  total_amount_spent_on_category2 = total_amount_spent_on_category2 + category2[i].price;
}
console.log(total_amount_spent_on_category2);

function calculateTotalSpentByCategory(transactions) {
  transactions = [{ category1, total_amount_spent_on_category1 }, { category2, total_amount_spent_on_category2 }];
  return [transactions];
}

console.log(calculateTotalSpentByCategory(transactions)); 

// module.exports = calculateTotalSpentByCategory;
