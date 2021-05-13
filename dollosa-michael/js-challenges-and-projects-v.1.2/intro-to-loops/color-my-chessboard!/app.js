const squares = Array.from(document.querySelectorAll('.grid div'))
//Nodelist of all the div squares on our board. Think of it as an array. 
console.log(squares)
//Your goal is to add a chessboard color pattern to this blank board using loops and Arrays.
//write code here
for(let x = 0; x < squares.length; x++) {
  x%2 === 0 ? squares[x].style.backgroundColor = "black" : squares[x].style.backgroundColor = "white";
}