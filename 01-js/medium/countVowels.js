/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
	// Your code here
	const word = str.toLowerCase();
	let count = 0;
	for (let i = 0; i < word.length; i++) {
		if (
			word[i] === "a" ||
			word[i] === "e" ||
			word[i] === "i" ||
			word[i] === "o" ||
			word[i] === "u"
		) {
			count += 1;
		}
	}
	return count;
}
console.log(countVowels("HelloWorld"));
module.exports = countVowels;
