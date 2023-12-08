/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
	// removing special chars using regex
	const palindrome = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

	for (let i = 0; i < palindrome.length; i++) {
		if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
			if (i !== palindrome.length - 1) {
				return false;
			}
		}
	}
	return true;
}

module.exports = isPalindrome;
