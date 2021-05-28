
import { createGridState } from './creation.js'

const rows = 3
const cols = 3
let gameHistory = []
let boardState = createGridState(rows, cols, (row, column) => null)
let counter = 0
let playerTurn = "X"
let winner = false

//fn to reset game 
const gameReset = (cells) => {
  gameHistory = []
  boardState = createGridState(rows, cols, (row, column) => null)
  counter = 0
  playerTurn = "X"
  winner = false
  for(let x = 0; x < rows*cols; x++){
    cells[x].innerHTML = null
  }
}

//fn to update winner flag to true
const updateWinner = (flag) => {
  winner = flag
} 

//fn to update boardState
const updateBoardState = (row, col, player) => {
  boardState[row][col] = player
  return boardState
}

//fn to update game history
const updateGameHistory = (currentBoardState) => {
  gameHistory.push({
    turn: counter,
    boardHistoryState: currentBoardState
  })
  // console.log("history", gameHistory)
}

//fn to update counter
const addCounter = () => {
  counter++
}

const subtractCounter = () => {
  counter--
}

//fn to update playerTurn
const updatePlayerTurn = () => {
  playerTurn === "X" ? playerTurn = "O" : playerTurn = "X"
}

//fn to set playerTurn in intro
const setPlayer = (player) => {
  playerTurn = player
}

export { rows, cols, boardState, counter, playerTurn, updatePlayerTurn, addCounter, subtractCounter, updateBoardState, updateGameHistory, gameHistory, winner, updateWinner, gameReset, setPlayer }
