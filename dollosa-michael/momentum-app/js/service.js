//get date/time
export const getTime = () => {
  const dateTime = new Date()
  return (dateTime.getHours()<10?'0':'') + dateTime.getHours() + ":" + (dateTime.getMinutes()<10?'0':'') + dateTime.getMinutes()
}

//fetch quote API
export const getQuote = async() => {
  const res = await fetch("https://complimentr.com/api")
  const data = await res.json()
  return data
}

//capitalize first word of sentence
export const capitalizeSentence = (data) => {
  return data[0].toUpperCase() + data.slice(1)
}