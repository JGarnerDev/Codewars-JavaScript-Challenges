// Classy Extensions

// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.
// Task
// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
// The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

class Animal {}

// First attempt

class Cat extends Animal {
  constructor (name) {
    super(name)
    this.name = name
    this.speak = () => {
      return `${name} meows.`
    }
  }
}

console.log(new Cat('Optimus Prime').speak())

// Test Passed: Value == '$$Money Bags$$ meows.'

// Note to self: Get cat, name it '$$Money Bags$$'

// Best practices

class Cat extends Animal {
  speak () {
    return `${this.name} meows.`
  }
}

// It apprears that I was mistaken that class extensions require constructors and superimpositions. The best practices answer therefore beats mine by vertue of essentialism, verbosity, and legibility. Good to know!
