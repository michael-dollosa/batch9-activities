const fetch = require('node-fetch');
const getJoke = async() => {
  let res = await fetch("https://api.chucknorris.io/jokes/random")
  let data = await res.json()
  // console.log(data)
  return data
}

const displayJoke = async() => {
  let sample = await getJoke()
  console.log(sample.value)
}

displayJoke()