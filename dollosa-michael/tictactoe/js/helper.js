import { boardState, counter, updatePlayerTurn, addCounter, updateBoardState, updateGameHistory, gameHistory, playerTurn } from './variables.js'


const updateGameState = (cell, turn) => {
  //update BoardState
  let spaceRow = cell.getAttribute('row')
  let spaceCol = cell.getAttribute('col')
  // const updatedBoardState = updateBoardState(spaceRow, spaceCol, playerTurn)
  updateBoardState(spaceRow, spaceCol, turn)
  //push history
  let slicedBoardState = boardState.map((arr) => {
    return arr.slice()
  })
  // console.log("mapped", slicedBoardState)
  updateGameHistory(slicedBoardState)
  updatePlayerTurn()
  addCounter()
}

const setVisibility = (element, value) => {
  element.style.visibility = value
}

const resetCellColor = (cells, rows, cols) => {
  let cellNumber = 0

  //iterate all cells
  for(let row = 0; row < rows; row++){
    for(let column = 0; column < cols; column++){
      //set innerHTML value based on value in history
      cells[cellNumber].classList.remove("pink")
      cellNumber++
    }
  }
}

export { updateGameState, setVisibility, resetCellColor }