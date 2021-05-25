import { createGrid, createGridState } from './creation.js'
import { rows, cols, boardState, counter, playerTurn, updatePlayerTurn, updateCounter, updateBoardState, updateGameHistory, gameHistory } from './variables.js'
import { updateGameState } from './helper.js'

var gameHistory2 = []
var boardState2 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

//board creation
createGrid(rows,cols)

//handle player move
const userInput = document.querySelector("#tictactoe-container").getElementsByTagName("div")
for(let x = 0; x < rows*cols; x++){
  userInput[x].addEventListener("click", () => {
    userInput[x].innerHTML = playerTurn
    updateGameState(userInput[x], playerTurn)
  })
}




