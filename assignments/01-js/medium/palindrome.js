/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = str.toLowerCase().replace(/[^a-z]/g, '');
  let revStr = newStr.split('').reverse().join('');

  if (newStr !== revStr) {
    return false;
  }
  return true;
}

// isPalindrome("Helleh");
console.log(isPalindrome("Raaahjshsjh!aaa"));
module.exports = isPalindrome;
