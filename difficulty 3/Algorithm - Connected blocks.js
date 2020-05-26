// CHALLENGE

// Given a 10x10 grid of 100 cells, with columns indexed 0 to 9 (left to right) and rows indexed 0 to 9 (bottom to top).

// The input of your program will be a comma-separated string of cell identifiers, identifyng the cells that are coloured black.

// Each cell identifier is a two digit number of the form <column_index><row_index>.

// When given this input, your program should output the size of the largest block of connected black cells, witch is outlined in red in the example above. So in this case your program would return 3.

// Note that two black cells are considered to be connected if they share an edge, but they are not connected if the share only a corner.

// The input could have some cells with invalid format or repeated cells that should not be taken into account.

// For example: 00,00,111,1,1a       is the same as         00

// -------------

// THOUGHT PROCESS

// The grid has a finite set of combinations, so runtime will not change per case.

// Since a string may contain invalid coordinates, the first step seems to be to split the string with ',' as the separator and validate each substring in a for loop.
// While in the for loop, we might as well convert the substrings into numbers so we may make useful comparisons with them

// What would adjacent coordinates look like? In the case of [5,5] - Horizontal: [4,5], [6,5]   //  Vertical: [5,4], [5,6]

// Having that said, sorting our coordinates after eliminating redundancy would be of benefit

function solution(input) {
	let coords = input.split(",");
	let set = new Set();
	for (let i = 0; i < coords.length; i++) {
		if (!/^[0-9]{2}$/.test(coords[i])) {
			coords[i] = "00";
		}
		if (!set.has(coords[i])) {
			set.add(coords[i]);
			coords[i] = [
				parseInt(coords[i].charAt(0)),
				parseInt(coords[i].charAt(1)),
			];
		} else {
			coords.splice(i, 1);
			i--;
		}
	}
	coords.sort();
	console.log(coords);
}

solution("18e,00,95,40,36,26,57,48,54,65,76,87,97,47,00");
// the result should be 3
