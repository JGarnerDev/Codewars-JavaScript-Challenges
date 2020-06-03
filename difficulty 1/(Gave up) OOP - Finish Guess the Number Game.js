// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

// If the user tries to guess WRONG more than the limit the function should throw an error
// If the user guess wrong it should lose a life and return false (if you guess correctly you shouldn't remove a life)
// If the user guess right it should return true
// Can you finish the game so all the rules are met?

// Not sure how to go about this one

class Guesser {
  constructor (number, lives) {
    this.number = number
    this.lives = lives
  }

  guess (n) {
    return false
  }
}

// Best practices solution

class Guesser {
  constructor (number, lives) {
    this.number = number
    this.lives = lives
  }

  guess (n) {
    if (!this.lives) throw Error
    this.lives--
    return n === this.number
  }
}

// Huh, okay. So it wasn't our objective to make the guessor "guess" by generating a number, but to have the guessor evaluate their response?

// Anyhow, the solution was to give Guessor a method 'guess' that passes a number. First part of this method is a conditional instruction to return by throwing an error if the number of lives is 0. Second, and only if the number of lives is greater than 1, to deduct 1 from the amount of lives from the Guessor instance. Finally, the guess 'n' is compared to the answer 'number' (a somewhat confusing naming in my opinion), and returns a boolean statement on their type and value equivelency.

// Below, I rewrote the initial code-question for the sake of clarity. Within the context of this question, though, it is unclear why the correctNumber should be a property of the Guessor. I believe my confusion on this question to be a silly conceptual one based on that 'guessors' don't usually have the correct number in scope.

class Guesser {
  constructor (correctNumber, lives) {
    this.correctNumber = correctNumber
    this.lives = lives
  }

  guess (guessedNumber) {
    if (!this.lives) throw Error
    this.lives--
    return guessedNumber === this.correctNumber
  }
}
