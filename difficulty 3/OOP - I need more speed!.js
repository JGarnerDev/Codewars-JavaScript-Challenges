const { performance } = require("perf_hooks");

// Write a function that will take in any array and reverse it.

// Sounds simple doesn't it?

// NOTES:

// Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

// First answer (too slow)

function reverse1(arr) {
	let t0 = performance.now();
	let arrClone = [...arr];
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arrClone[arrClone.length - i - 1];
	}
	let t1 = performance.now();
	console.log("First function : " + (t1 - t0) + " milliseconds");
}

reverse1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Second answer, after researching in-place algorithms

function reverse2(arr) {
	let t2 = performance.now();
	let end = arr.length - 1;
	let middle = Math.ceil(end / 2);
	for (let i = 0; i < middle; i++) {
		let temp = arr[i];
		arr[i] = arr[end - i];
		arr[end - i] = temp;
	}
	let t3 = performance.now();
	console.log("Second function: " + (t3 - t2) + " milliseconds");
}

reverse2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
