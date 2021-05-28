const fetch = require('node-fetch');
// fetch("https://jsonplaceholder.typicode.com/comments/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data))



// const getData = (url) => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }

// getData("https://jsonplaceholder.typicode.com/comments/1")

// let data = getData("https://jsonplaceholder.typicode.com/comments/1")
// if(!data){
// }else{
//   let res = data.then(res => {return data})
//   console.log(res)
// } 

const getData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {console.log(data)})
}

// function checkResponse(){
//   let data = getData("https://jsonplaceholder.typicode.com/comments/1")
//   setTimeout(() => {
//     console.log(data)
//   }, 3000);
// }()

(() => {
  setTimeout(() => {
    setTimeout(() => {
      var data = getData("https://jsonplaceholder.typicode.com/comments/1")
    }, 3000);
    console.log(data)
  }, 8000);
})()