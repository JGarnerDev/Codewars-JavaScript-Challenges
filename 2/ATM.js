// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

// You are given money in nominal value of n with 1<=n<=1500.

// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

function solve (n) {
  const notes = [500, 200, 100, 50, 20, 10]
  let counter = 0
  for (let i = 0; i < notes.length; i++) {
    while (n >= notes[i]) {
      n -= notes[i]
      counter += 1
    }
  }
  if (n !== 0) {
    return -1
  }
  return counter
}

solve(770)
