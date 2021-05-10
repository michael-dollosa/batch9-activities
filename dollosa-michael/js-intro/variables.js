// Coding Challenge #1:
// We need to write a function that will allow us to count books each time we get a new one in a delivery.
// What variable would you assign the variable `bookCount` in the situation below.
// Please replace the ** to make the function work.

let bookCount = 0

function increment(){
    bookCount +=1
}
increment()
console.log("Coding Challenge 1:", bookCount)

// Coding Challenge #2:
// We have just sold 3 books and got 3 new ones!
// What would you have to do here to the `books` variable for the function to work so it would replace the current books array with our 3 new ones?
// Please make the function work.

let books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar']

function replaceBooks(){
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth']
}
replaceBooks()
console.log("Coding Challenge 2:", books)

// Coding Challenge #3:
// We need to text our customer that their book is in. What would you have to do here in order for this function to work?

function textCustomer() {
  {
     let firstName = 'Molly' 
     return console.log('Hi ' + firstName + ', your book is now in')
  }
}
textCustomer()