const createGrid = (rows, cols) => {
  let gridContainer = document.querySelector("#tictactoe-container")
  let grid = rows*cols

  //creation of frontend grid
  for(let x = 0; x < rows; x++) {
    for(let y = 0; y < cols; y++) {
      let item = document.createElement("div")
      item.setAttribute("row", x)
      item.setAttribute("col", y)
      gridContainer.append(item)
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