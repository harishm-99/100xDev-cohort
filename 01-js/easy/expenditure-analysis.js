/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/





transactions = [
  { itemName: "MAC Pro", category: "category1", price: 2000, timestamp: "10:00 PM" },
  { itemName: "Xbox 1050", category: "category1", price: 1000, timestamp: "11:00 PM" },
  { itemName: "Chair", category: "category2", price: 30, timestamp: "11:20 PM" },
  { itemName: "Surf Excel Soap", category: "category3", price: 10, timestamp: "11:10 PM" }
];

function calculateTotalSpentByCategory(transactions) {
  let result = {};
  
  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let category = transaction.category;
    let totalAmountSpent = transaction.price;
    
    // If the category doesn't exist in the result object, create it
    if (!result[category]) {
      result[category] = 0;
    }
    
    // Add the total amount spent to the existing category
    result[category] += totalAmountSpent;
  }
  
  // Convert the result object into an array of objects with the specified formatxxx
  let resultArray = Object.keys(result).map(category => ({ [category]: result[category] }));
  
  return resultArray;
}

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;

