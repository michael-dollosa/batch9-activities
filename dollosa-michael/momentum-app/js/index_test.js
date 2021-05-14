console.log("connected")
let username = ""
//quote logic
const quote = document.querySelector(".quote")

const getQuote = async() => {
  const res = await fetch("https://complimentr.com/api")
  const data = await res.json()

  //edit quote line with random quote
  quote.innerHTML = data.compliment
  console.log(quote.compliment)
}

getQuote()



//date/time logic
const setTime = document.querySelector("#time")
const dateTime = new Date()
const time = dateTime.getHours() + ":" + (dateTime.getMinutes()<10?'0':'') + dateTime.getMinutes()
console.log(time)
setTime.innerHTML = time

//name logic
// const inputName = document.querySelector(".userName")
const inputNameForm = document.querySelector("#nameForm")
const inputNameContainer = document.querySelector(".inputName-container")
inputNameForm.addEventListener('submit', (e) => {
  
  e.preventDefault()
  username = document.querySelector("#userName").value
  console.log(username)
  inputNameForm.reset()
  inputNameContainer.style.display = "none"
})



