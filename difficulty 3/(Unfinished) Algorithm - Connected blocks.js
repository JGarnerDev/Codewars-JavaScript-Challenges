// CHALLENGE

// Given a 10x10 grid of 100 cells, with columns indexed 0 to 9 (left to right) and rows indexed 0 to 9 (bottom to top).

// The input of your program will be a comma-separated string of cell identifiers, identifyng the cells that are coloured black.

// Each cell identifier is a two digit number of the form <column_index><row_index>.

// When given this input, your program should output the size of the largest block of connected black cells, witch is outlined in red in the example above. So in this case your program would return 3.

// Note that two black cells are considered to be connected if they share an edge, but they are not connected if the share only a corner.

// The input could have some cells with invalid format or repeated cells that should not be taken into account.

// For example: 00,00,111,1,1a       is the same as         00

// -------------

// ***** I folded on this one! Definitely need to see how others have solved it to understand the process. What I was able to do:

// 1. Split the string, use a ternary operator to store unique occurences of valid strings or store converted invalid strings
// 3. Convert substrings into arrays of numbers
// 4. !!! Find a way to group adjacent coordinates together, then measure the size of that group

// THOUGHT PROCESS

// First step, we need to convert the input string into something useful. Split method seems just fine, and we'll have an array of substrings.

// Now, thinking ahead a little - we want an array of only the coordinates that are a) unique b) valid.
// All invalid coordinates will be made into "00" , so let's catch them in our second step. Using a for loop, having a simple control flow that

function solution(input) {
	input = input.split(",");
	let set = new Set();

	for (let i = 0; i < input.length; i++) {
		/^\d{1,2}$/.test(input[i]) ? set.add(input[i]) : set.add("00");
	}

	let coords = [...set].map((string) => {
		return [parseInt(string.charAt(0)), parseInt(string.charAt(1))];
	});

	return coords;
}

solution("18e,00,95,40,36,26,57,48,54,65,76,87,97,47,00");
// the result should be 3

//
