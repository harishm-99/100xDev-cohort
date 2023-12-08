/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


// transactions = [
//   { itemName: "MAC Pro", category: "Electronics", price: 2000, timestamp: "10:00 PM" },
//   { itemName: "Chair", category: "Furniture", price: 30, timestamp: "11:20 PM" },
//   { itemName: "Surf Excel Soap", category: "Soaps", price: 10, timestamp: "11:10 PM" }
// ];

// function calculateTotalSpentByCategory(transactions) {
//   let result = {};
  
//   for (let i = 0; i < transactions.length; i++) {
//     let transaction = transactions[i];
//     let category = transaction.category;
//     let totalAmountSpent = transaction.price;
    
//     // If the category doesn't exist in the result object, create it
//     if (!result[category]) {
//       result[category] = 0;
//     }
    
//     // Add the total amount spent to the existing category
//     result[category] += totalAmountSpent;
//   }
  
//   // Convert the result object into an array of objects with the specified formatxxx
//   let resultArray = Object.keys(result).map(category => ({ [category]: result[category] }));
  
//   return resultArray;
// }

// console.log(calculateTotalSpentByCategory(transactions));

// module.exports = calculateTotalSpentByCategory;

function calculateTotalSpentByCategory(transactions) {
	let output = [];

	// if there are no transactions return an empty array
	if (transactions.length === 0) {
		return output;
	}

	// first store all the categories along with their respective total price
	let categoryWithAmount = {};

	for (let transaction of transactions) {
		const category = transaction.category;

		if (categoryWithAmount[category]) {
			categoryWithAmount[category] += transaction.price;
		} else {
			categoryWithAmount[category] = transaction.price;
		}
	}

	// now iterate over all the categories, make and object which will contain the category name and total amount and then add it to the output array
	for (let category in categoryWithAmount) {
		output.push({
			category: category,
			totalSpent: categoryWithAmount[category],
		});
	}

	return output;
}

module.exports = calculateTotalSpentByCategory;

