// Hey Codewarrior!

// You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.

// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args

// Original Code:
function Cube (n) {
  var side = 0

  this.getSide = function () {
    return side
  }
  this.setSide = function (n) {
    if (isNaN(n) === true) {
      return
    }
    side = Math.abs(n)
  }
}

// My fix:

function Cube (n = 0) {
  var side = Math.abs(n)

  this.getSide = function () {
    return side
  }
  this.setSide = function (n) {
    if (isNaN(n) === true) {
      return 0
    }
    side = Math.abs(n)
  }
}

// Review:

// Three alterations:
//      1) Since the task stipulates that sometimes an argument may not be present, n is assigned 0 as a default parameter to the Cube function.
//      2) The Side property should always have an absolute value. The first declaration of the side variable has been changed accordingly.
//      2) The setSide function was returning with nothing if n wasn't a number. It should return 0.

// Best Practices

class Cube {
  constructor (side) {
    this.setSide(side)
  }

  getSide () {
    return this.side
  }

  setSide (side = 0) {
    this.side = Math.abs(side)
  }
}

// Review: It does look cleaner, but two issues come to mind. First, the question asked for a 'fix' to the function, implying that the function form as initially written was to be maintained. While I am unsure if there's any computational implications for how the best practices answer changed syntax, I thought it to be taking liberties of some degree. Something for me to research! Secondly, this fix would return NaN if anything other than a number or null were to be passed through it.
