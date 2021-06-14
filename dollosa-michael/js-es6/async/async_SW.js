// Write a function called inOrder that accepts two callbacks and invokes them in order. Implement inOrder using the callback pattern.
// var logOne = setTimeout(function() {
//   console.log("one!");
// }, Math.random() * 1000);
// var logTwo = setTimeout(function() {
//   console.log("two!");
// }, Math.random() * 1000);
// inOrder(logOne, logTwo);
// // one
// // two
// // it should always log those two in order regardless of their timing
// * Refactor inOrder to use promises.

const logOne = () => {
  return new Promise(resolve=>{
    setTimeout(function () {
      resolve();
      console.log("one!");
    }, Math.random() * 5000);
  })
}

const logTwo = () => {
  return new Promise(resolve=>{
    setTimeout(function () {
      resolve();
      console.log("two!");
    }, Math.random() * 1000);
  })
}

const inOrder = async(logOne,logTwo) => {
  await logOne();
  await logTwo();
}

inOrder(logOne,logTwo);
