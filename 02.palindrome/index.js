// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 01
// function palindrome(str) {
//   return str.split("").reverse().join("") === str;
// }

// 02
function palindrome(str) {
  return str.split("").every((char, i) => str[str.length - i - 1] === char);
}

module.exports = palindrome;