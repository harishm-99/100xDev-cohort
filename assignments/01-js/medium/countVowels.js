/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let str1 = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  // for (let i = 0; i < str1.length;i++){
  for(char of str1){
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Harish"));

module.exports = countVowels;