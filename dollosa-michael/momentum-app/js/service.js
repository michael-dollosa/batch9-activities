//get date/time
export const getTime = () => {
  const dateTime = new Date()
  return (dateTime.getHours()<10?'0':'') + dateTime.getHours() + ":" + (dateTime.getMinutes()<10?'0':'') + dateTime.getMinutes()
}

//get quote

export const getQuote = async() => {
  const res = await fetch("https://complimentr.com/api")
  const data = await res.json()
  return data
  //edit quote line with random quote
  // quote.innerHTML = data.compliment
  // console.log(data)
}