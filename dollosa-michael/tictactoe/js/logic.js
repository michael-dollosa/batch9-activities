import { boardState } from "./variables.js"

let results = []

const checkArray = (arr) => {
  //check every data in array if it's equal
  return arr.every((data) => data != null && data === arr[0])
}

//reusable fn
// arguments (main cell to check, array of cell to iterate(rows,cols,diagonals), state of board)
const iterateBoard = (cell_1, cell_2, state, toCheck) => {

  //create object to return
  let check = {
    coordinates: [],
    player: [],
    condition: false
  }

  //check for column match
  if(toCheck === "column")
  {
    for(let cell = 0; cell < cell_2; cell++){
      check.coordinates.push([cell,cell_1])
      check.player.push(state[cell][cell_1])
    }
  }
  //check for row match
  else if(toCheck === "row") {
    for(let cell = 0; cell < cell_2; cell++){
      check.coordinates.push([cell_1,cell])
      check.player.push(state[cell_1][cell])
    }
  }
  //check for diagonal match
  else if(toCheck === "rightDiagonal"){
    for(let cell =0; cell < cell_1; cell++){
      check.coordinates.push([cell,cell])
      check.player.push(state[cell][cell])
    }
  }
  else if(toCheck === "leftDiagonal"){
    for(let x = 0; x < cell_1; x++){
      for(let y = 0; y < cell_2; y++){
        if((x+y) == (cell_1-1)){
          check.coordinates.push([x,y])
          check.player.push(state[x][y])
        }
      }
    }
  }
  else {
    return
  }

  //check condition of every coordinates recorded and verify if there's a winner
  check.condition = checkArray(check.player)

  //return object for checking
  return check
}

//filter array of objects to return data of winner
const getWinner = (currentBoardState) => {
  let winner = currentBoardState.filter(data => data.condition === true)
  return winner
}

//iterate the cells to check for winner. returns array of objects
const checkBoard = (row, col, state) => {
  let check = []

  //column check
  for(let boardColumn = 0; boardColumn < col; boardColumn++){
    let columnData = iterateBoard(boardColumn, row, state, "column")
    check.push(columnData)
  }

  //row check
  for(let boardRow = 0; boardRow < row; boardRow++){
    let rowData = iterateBoard(boardRow, col, state, "row")
    check.push(rowData)
  }

  //diagnoal check
  let rightDiagonalDirection = iterateBoard(row, col, state, "rightDiagonal")
  check.push(rightDiagonalDirection)
  let leftDiagonalDirection = iterateBoard(row, col, state, "leftDiagonal")
  check.push(leftDiagonalDirection)
  
  return check
}

const displayHistory = (boardState, cells, rows, cols, counter) => {
  //since dom element is a one directional array, we need a counter
  let cellNumber = 0

  //display current board
  for(let row = 0; row < rows; row++){
    for(let column = 0; column < cols; column++){
      //set innerHTML value based on value in history
      cells[cellNumber].innerHTML = boardState[counter-1].boardHistoryState[row][column]
      cellNumber++
    }
  }
} 

const colorWinningPattern = (winningPattern, cells, rows, cols,) => {
  let cellNumber = 0

  for(let row = 0; row < rows; row++){
    for(let column = 0; column < cols; column++){
      //check for coordinates
      for(let pattern = 0; pattern < winningPattern[0].coordinates.length ; pattern++){
        let cellRow = cells[cellNumber].getAttribute("row")
        let cellCol = cells[cellNumber].getAttribute("col")
        let winningRow = winningPattern[0].coordinates[pattern][0]
        let winningCol = winningPattern[0].coordinates[pattern][1]
        //condition if current element coordinate is equal to winning coordinate
        if( (parseInt(cellRow) === winningRow) && (parseInt(cellCol) === winningCol)){
          // console.log(`winning coordinate [${cellRow},${cellCol}]`)
          cells[cellNumber].classList.add("pink")
        }
      }
      cellNumber++
    }
  }
}
export { iterateBoard, checkBoard, getWinner, displayHistory, colorWinningPattern }