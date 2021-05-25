import { boardState, counter, updatePlayerTurn, updateCounter, updateBoardState, updateGameHistory, gameHistory } from './variables.js'


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
  console.log("mapped", slicedBoardState)
  updateGameHistory(slicedBoardState)
  updatePlayerTurn(counter)
  updateCounter()

}

export { updateGameState }