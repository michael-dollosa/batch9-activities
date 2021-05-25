import { playerTurn } from './variables.js'

export const handlePlayerInput = (rows, cols) => {
  const userInput = document.querySelector("#tictactoe-container").getElementsByTagName("div")
  console.log(userInput)

  for(let x = 0; x < rows*cols; x++){
    userInput[x].addEventListener("click", () => {
      userInput[x].innerHTML = playerTurn
    })
  }
}