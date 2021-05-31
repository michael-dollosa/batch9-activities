const createGrid = (rows, cols) => {
  let gridContainer = document.querySelector("#tictactoe-container")
  let grid = rows*cols

  //set grid based on number of rows and cols
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`

  //creation of frontend grid
  for(let boardRow = 0; boardRow < rows; boardRow++) {
    for(let boardCol = 0; boardCol < cols; boardCol++) {
      let item = document.createElement("div")
      item.setAttribute("row", boardRow)
      item.setAttribute("col", boardCol)
      gridContainer.append(item)

      //setting oustide borders to none
      if(boardRow === 0){
        item.style.borderTop = "none"
      }

      if(boardRow === rows-1) {
        item.style.borderBottom = "none"
      }

      if(boardCol === 0) {
        item.style.borderLeft = "none"
      }

      if(boardCol === cols-1){
        item.style.borderRight = "none"
      }
    }
  }
}

const createGridState = (rows, cols, value = (x, y) => 0) => {
  let arr = new Array(rows);
  for(let x = 0; x < rows; x++) {
    arr[x] = new Array(cols);
    for(let y = 0; y < cols; y++) {
      arr[x][y] = value(x,y);
      // `[${x}, ${y}]`
    }
  }
  return arr;
}

export { createGrid, createGridState }