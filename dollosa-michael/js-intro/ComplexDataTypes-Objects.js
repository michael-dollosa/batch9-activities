// Coding Challenge: Objects
// Create an object that describes something of your choosing, like a car or animal.
// Give that object 5 key/value pairs that include all primitive and complex data types
// Give the object 1 method that uses the 'this' keyword to console log something from the object when called
// console.log 2 properties from the object, once with 'dot' notation and once with 'bracket' notation.

const animal = {
  name: "testName",
  nationality: "Filipino",
  age: 23,
  dead: false,
  friends: ["cat", "fish", "lion"],
  greeting: function() {
    return console.log(`Hello I am ${this.name}`)
  }
}

console.log(animal.name)
console.log(animal["age"])
animal.greeting()