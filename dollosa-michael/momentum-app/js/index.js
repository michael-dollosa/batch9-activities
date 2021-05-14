import { getTime, getQuote } from './service.js'

//date/time logic
const setTime = document.querySelector(".time")
const time = getTime()
console.log(time)
const appendTime = document.createElement("h1")
setTime.append(appendTime)
appendTime.innerHTML = time

//get quote
const setQuote = document.querySelector(".container-quotes")
const appendQuote = document.createElement("p")
setQuote.append(appendQuote)
const quote = await getQuote()
console.log(quote.compliment)
appendQuote.innerHTML = `"${quote.compliment}"`