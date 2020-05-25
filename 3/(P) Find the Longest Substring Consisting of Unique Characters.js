// Task
// You are given a string s. It's a string consist of letters, numbers or symbols.

// Your task is to find the Longest substring consisting of unique characters in s, and return the length of it.

//  Idea => make it recursive. Take the string, look for the longest substring from the beginning, submit the answer, shift that beginning character, repeat process.

// Brute Force Solution

function longestSubstringOf(s) {
	let charArr = [...s];
	let longestSoFar = [];
	while (charArr.length !== 0) {
		let candidate = [];
		charArr.forEach((char, i) => {
			if (
				candidate.indexOf(char) === -1 &&
				candidate[i - 1] === charArr[i - 1]
			) {
				candidate.push(char);
			}
		});
		if (candidate.length > longestSoFar.length) {
			longestSoFar = candidate;
		}
		charArr.shift();
	}
	return longestSoFar.length;
}

// This solution is O(n^3)!  Requires Optimization.
// Clues: Sliding window
