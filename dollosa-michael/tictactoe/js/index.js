import { createGrid } from './creation.js'
import { rows, cols, boardState, playerTurn,  winner, updateWinner, gameReset, gameHistory, counter, subtractCounter, addCounter, setPlayer } from './variables.js'
import { updateGameState, setVisibility, resetCellColor } from './helper.js'
import { checkBoard, getWinner, displayHistory, colorWinningPattern } from './logic.js'

//btn
const btnPrev = document.querySelector("#btn-previous")
const btnNext = document.querySelector("#btn-next")
const btnReset=  document.querySelector("#btn-reset")
const gameMsg = document.querySelector("#msg-game")

//player pick
const playerPickContainer = document.querySelector("#container-intro")
const tictactoeContainer = document.querySelector("#container-parent")
const playerX = document.querySelector("#symbol-x")
const playerO = document.querySelector("#symbol-o")

//labels
const winnerLabelContainer = document.querySelector("#msg-header")
const winnerLabel = document.querySelector("#header-label")

//create function to set elements to hidden at onload
const setElementsHidden = () => {
  setVisibility(btnPrev, "hidden")
  setVisibility(btnNext, "hidden")
  setVisibility(gameMsg, "hidden")
  setVisibility(btnReset, "hidden")
}

//create function to set button to visible
const setButtonsVisible = () => {
  setVisibility(btnPrev, "visible")
  setVisibility(btnNext, "visible")
}

//fn for startGame
const startGameState = () => {
  //set elements to hidden
  setElementsHidden()
  setVisibility(winnerLabelContainer, "hidden")
  tictactoeContainer.style.display = "none"
  playerPickContainer.style.display = "flex"
}

//start Game
startGameState()

//fn for setting player
const setGame = (player) => {
  setPlayer(player)
  playerPickContainer.style.display = "none"
  tictactoeContainer.style.display = "block"
  setVisibility(btnReset, "visible")
}

playerX.addEventListener("click", () => {
  setGame("X")
})

playerO.addEventListener("click", () => {
  setGame("O")
})

//board creation
createGrid(rows,cols)

//handle player move
const userInput = document.querySelector("#tictactoe-container").getElementsByTagName("div")
for(let x = 0; x < rows*cols; x++){
  userInput[x].addEventListener("click", () => {
    //do process if cell has no input AND no winner
    if(!userInput[x].innerHTML && !winner){

      userInput[x].innerHTML = playerTurn

      //update game state based on player move
      updateGameState(userInput[x], playerTurn)

      //check boardState if there is a winner. returns array of object
      let checkBoardData = checkBoard(rows, cols, boardState)

      //check winner using returned value of checkBoard fn
      let checkWinner = getWinner(checkBoardData)

      //if winner is found
      if(checkWinner.length && checkWinner[0].condition){
        let winnerPlayer = checkWinner[0].player[0]
        updateWinner(true)
        postGameReview(winnerPlayer)
        console.log("Winning Pattern", checkWinner)
        colorWinningPattern(checkWinner, userInput, rows, cols)
        console.log("Board State", boardState)
        console.log("Board History", gameHistory)
      }

      //check if counter is at max and no winner detected
      if(counter === rows*cols && checkWinner.length === 0){
        postGameReview("Draw")
        console.log("Board State", boardState)
        console.log("Board History", gameHistory)
      }

      // console.log("winner var", winner)
    }
  })
}

//handle reset fn
btnReset.addEventListener("click", () => {
  gameReset(userInput)
  resetCellColor(userInput, rows, cols)
  //restart Game
  startGameState()
})


const postGameReview = (player) => {
  setVisibility(winnerLabelContainer, "visible")
  player === "Draw" ? winnerLabel.innerHTML = `Draw! Practice More.` : winnerLabel.innerHTML = `Player ${player} wins the game!`
  setButtonsVisible()
  //refresh btn classlist
  btnPrev.classList.remove("btn-disabled")
  btnPrev.classList.add("btn-next")
  btnNext.classList.remove("btn-next")
  btnNext.classList.add("btn-disabled")
}

//handle previous button
btnPrev.addEventListener("click", () => {
  //reset next btn classlist
  btnNext.classList.remove("btn-disabled")
  btnNext.classList.add("btn-next")

  if(counter >= 2) {
    subtractCounter()
    displayHistory(gameHistory, userInput, rows, cols, counter)
    console.log(gameHistory)

    if(counter === 1) {
      btnPrev.classList.remove("btn-prev")
      btnPrev.classList.add("btn-disabled")
    }
  }
})

//handle next button
btnNext.addEventListener("click", () => {
  //refresh prev btn classlist
  btnPrev.classList.remove("btn-disabled")
  btnPrev.classList.add("btn-next")

  if(counter < gameHistory.length){
    addCounter()
    displayHistory(gameHistory, userInput, rows, cols, counter)
    if(counter === gameHistory.length){
      btnNext.classList.remove("btn-next")
      btnNext.classList.add("btn-disabled")
    }
  }
  
})