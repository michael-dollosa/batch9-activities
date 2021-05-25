const rows = 3
const cols = 3
let gameHistory = []
let boardState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]
let counter = 0
let playerTurn = "X"

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
  console.log("history", gameHistory)
}
//fn to update counter
const updateCounter = () => {
  counter++
}
//fn to update playerTurn
const updatePlayerTurn = (counter) => {
  if(counter%2 === 0) {
    playerTurn = "0"
  } else {
    playerTurn = "X"
  }
}

export { rows, cols, boardState, counter, playerTurn, updatePlayerTurn, updateCounter, updateBoardState, updateGameHistory, gameHistory }