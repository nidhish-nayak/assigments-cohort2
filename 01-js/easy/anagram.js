/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(arg1, arg2) {
	const str1 = arg1.toLowerCase();
	const str2 = arg2.toLowerCase();

	if (str1.length !== str2.length) {
		return false;
	} else {
		let freq = {};

		for (const char of str1) {
			freq[char] = (freq[char] || 0) + 1;
		}

		for (const char of str2) {
			if (!freq[char]) {
				return false;
			}
		}
		return true;
	}
}

// function isAnagram(str1, str2) {
// 	if (str1.length !== str2.length) {
// 		return false;
// 	} else {
// 		return (
// 			str1.toLowerCase().split("").sort().join("") ===
// 			str2.toLowerCase().split("").sort().join("")
// 		);
// 	}
// }

module.exports = isAnagram;
