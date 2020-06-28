// After yet another dispute on their game the Bingo Association decides to change course and automize the game.

// Can you help the association by writing a method to create a random Bingo card?

// Task:

// Finish method:

// getCard()

// A Bingo card contains 24 unique and random numbers according to this scheme:
// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75

// The card must be returned as an array of Bingo style numbers:

// { 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... }

// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

// First Attempt:

function getCard() {
	let card = [];
	let bingo = ["B", "I", "N", "G", "O"];
	let set = new Set();
	for (let i = 0; i < bingo.length; i++) {
		for (let j = 0; j < 5; j++) {
			if (i === 2 && j === 0) {
				j++;
			}
			let candidate = bingo[i];
			candidate += Math.ceil(Math.random() * 15) + i * 15;
			set.has(candidate) ? j-- : set.add(candidate) && card.push(candidate);
		}
	}
	return card;
}

console.log(getCard());

// Best Practices

function genRange(arr, letter, start, end, count) {
	var taken = [];
	for (var i = 0; i < count; ) {
		r = Math.floor(Math.random() * (end - start) + start);
		if (taken.indexOf(r) == -1) {
			taken.push(r);
			arr.push(letter + r);
			i++;
		}
	}
}
function getCard() {
	var arr = [];
	genRange(arr, "B", 1, 15, 5);
	genRange(arr, "I", 16, 30, 5);
	genRange(arr, "N", 31, 45, 4);
	genRange(arr, "G", 46, 60, 5);
	genRange(arr, "O", 61, 75, 5);
	return arr;
}
