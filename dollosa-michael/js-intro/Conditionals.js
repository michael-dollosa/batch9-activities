// Coding Challenge
// Declare a variable username - stored as a string.
// Declare a variable password - stored as a string.
// Write an if-else statement,
// if the username is incorrect, log incorrect
// if the password is incorrect, log incorrect
// else - both were correct and the user was able to log in

const username = "foo"
const password = "bar"

//test
let inputUsername = "hello"
let inputPassword = "world"

if(inputUsername !== username) {
  console.log("log incorrect")
} else if(inputPassword !== password) {
  console.log("log incorrect")
} else {
  console.log("login successful")
}