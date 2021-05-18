import { getTime, getQuote } from './service.js'

let state = {
  name: "",
  focus: "",
  todo: []
}

const saveState = () => {
  localStorage.setItem("data", JSON.stringify(state))
}
// saveState()
const loadState = () => {
  let retrievedData = localStorage.getItem("data")
  console.log(JSON.parse(retrievedData))
  if(!retrievedData) {
    saveState()
    location.reload()
  }
  state = JSON.parse(retrievedData)
}

const resetBtn = document.querySelector(".reset-data")
resetBtn.addEventListener("click", () => {
  state = {
    name: "",
    focus: "",
    todo: []
  }
  saveState()

  //rerender page
  location.reload();
})

//general event (event bubble)
document.addEventListener("click", event => {
  let insideQuoteBlock = quotesContainer.contains(event.target)
  let focusBlock = focusContainer.contains(event.target)
  let focusInput = focusContainer.getElementsByTagName("h1")[1]

  //if user clicks outside quote div, it should reset to default style
  if(!insideQuoteBlock){
    let innerQuote = setQuote.getElementsByTagName("p")
    let quote = innerQuote[2].getElementsByTagName("span")
    console.log("clicked outside quote block")
    quote[0].setAttribute("contenteditable", "false")
    quotesIcon.style.visibility = "hidden"
  }

  //if user clicks outside focus div, it should reset to default style
  if(!focusBlock && focusInput) {
    let focusInputElement = focusContainer.getElementsByTagName("h1")[1].getElementsByTagName("span")[0]
    console.log(focusInputElement)
    focusInputElement.setAttribute("contenteditable", "false")
    focusOption.style.visibility = "hidden"
  }
})

//date/time logic
const setTime = document.querySelector(".time")
const time = getTime()
console.log(time)
const appendTime = document.createElement("h1")
setTime.append(appendTime)
appendTime.innerHTML = time

//get quote
const setQuote = document.querySelector(".container-quotes")
const appendQuote = document.createElement("p")
setQuote.append(appendQuote)
const quote = await getQuote()
console.log(quote.compliment)
appendQuote.innerHTML = `"<span>${quote.compliment}</span>"`

//input name logic
const inputNameForm = document.querySelector("#nameForm")
const createName = () => {
  inputNameForm.style.display = "block"
  inputNameForm.addEventListener("submit", event => {
    event.preventDefault()
    //read input
    state.name = document.querySelector("#username").value
    saveState()
    inputNameForm.reset()
    
    //call onload fn to set styles and events
    onloadWithUser()

  })
}

//greeting logic
const setGreetings = document.querySelector(".greetings")
const setGreetingName = document.createElement("h1")
const createGreeting = () => {
  inputNameForm.style.display = "none"
  setGreetings.append(setGreetingName)
  setGreetingName.innerHTML = `Hi <span>${state.name}</span>, have a great day!`
  setGreetings.style.display = "block"
}

//input focus logic
const focusForm = document.querySelector("#focusForm")
const focusContainer = document.querySelector(".container-focus")
const focusOption = document.querySelector(".focus-option")
const modifyFocus = document.querySelector(".focus-option-modify")

//event listener function to be used once user already inputted a focus for the day
const AddEventListenerToFocus = () => {
  focusOption.style.display = "block"
  focusContainer.addEventListener("mouseover", () => {
    focusOption.style.visibility = "visible"
  })
  focusContainer.addEventListener("mouseout", () => {
    let focusInput = focusContainer.getElementsByTagName("h1")[1].getElementsByTagName("span")[0]
    focusInput === document.activeElement ? focusOption.style.visibility = "visible" : focusOption.style.visibility = "hidden"

  })
}

modifyFocus.addEventListener("click", () => {
  let focusInput = focusContainer.getElementsByTagName("h1")[1].getElementsByTagName("span")[0]
  focusInput.setAttribute("contenteditable", "true")

  focusInput.focus()

  focusInput.addEventListener("keydown", e => {
    if (e.which === 13) {
      focusInput.setAttribute("contenteditable", "false")
      focusInput.blur()
      focusOption.style.visibility = "hidden"
      return false;
    }
  })
})

const createFocus = () => {
  focusForm.style.display = "block"
  focusForm.addEventListener("submit", event => {
    event.preventDefault()
    state.focus = document.querySelector("#focusName").value
    saveState()
    focusForm.reset()

    //display focus
    displayFocus()
  })
}

const displayFocus = () => {
  focusForm.style.display = "none"
  const setFocus = document.querySelector(".container-focus")
  const setFocusName = document.createElement("h1")
  setFocus.append(setFocusName)
  setFocusName.innerHTML = `Main Focus for today: <strong><span>${state.focus}</span></strong>`
  AddEventListenerToFocus()
}

console.log(state.focus)
//set quotes option if quotes is focused


//quotes logic
const quotesContainer = document.querySelector(".container-quotes")
const quotesIcon = document.querySelector(".quotes-option-container")
const quotesOptionGenerate = document.querySelector(".quote-option-generate")
const quotesOptionCreate = document.querySelector(".quote-option-create")

//set container to hidden
quotesIcon.style.visibility = "hidden"

quotesContainer.addEventListener("mouseover", () => {
  quotesIcon.style.visibility = "visible"
})

quotesContainer.addEventListener("mouseout", () => {
  let innerQuote = setQuote.getElementsByTagName("p")
  let quote = innerQuote[2].getElementsByTagName("span")
  quote[0] === document.activeElement ? quotesIcon.style.visibility = "visible" : quotesIcon.style.visibility = "hidden"
})

quotesOptionGenerate.addEventListener("click", async() => {
  const quote = await getQuote()
  console.log(quote.compliment)
  let innerQuote = setQuote.getElementsByTagName("p")
  innerQuote[2].innerHTML = `"<span>${quote.compliment}</span>"`
})

quotesOptionCreate.addEventListener("click", () => {
  let innerQuote = setQuote.getElementsByTagName("p")
  let quote = innerQuote[2].getElementsByTagName("span")
  quote[0].setAttribute("contenteditable", "true")
  quote[0].focus()
  console.log("check for focus bool", document.activeElement)

  quote[0].addEventListener("keydown", e => {
    console.log(e.which)
    if (e.which === 13) {
      quote[0].setAttribute("contenteditable", "false")
      quote[0].blur()
      quotesIcon.style.visibility = "hidden"
      return false;
    }
  })
  console.log(quote[0])
})

//logic for todo
const todoContainer = document.querySelector(".container-todo")
const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const todoToggleContainer = document.querySelector(".todo-toggle")
const todoToggle = document.querySelector(".todo-toggle")
const todoExit = document.querySelector("#todo-text-exit")

//show/hide todo
todoToggle.addEventListener("click", () => {
  todoContainer.style.display = "block"
  todoToggleContainer.style.display = "none"
})

todoExit.addEventListener("click", () => {
  todoContainer.style.display = "none"
  todoToggleContainer.style.display = "block"
  
})

//add submit event listener
todoForm.addEventListener("submit", event => {
  event.preventDefault()
  //do adding item when user has input upon submit
  if(todoInput.value){
    let todoData = {todo: todoInput.value, completed: false}
    state.todo.push(todoData)
    saveState()
    createTodoList(todoData)
  }
  todoForm.reset()
})

//todo list create fn
const createTodoList = (data) => {
  //create item
  let todoItem = document.createElement("li")
  todoItem.innerHTML = `<div class="todo-item">
                            <p>${data["todo"]}</p>
                            <div class="todo-icons">
                              <span class="completed">&#10003;</span>
                              <span class="delete">&#10005;</span>
                            </div>
                          </div>`
  todoList.append(todoItem)
  
  //adding completed event
  const completeIcon = todoItem.querySelector(".todo-icons").querySelector(".completed")
  let item = todoItem.querySelector(".todo-item").getElementsByTagName("p")[0]
  //style check if todo is completed
  if(data["completed"]) {
    item.classList.toggle("linethrough")
    completeIcon.classList.toggle("iconColorChange")
  }

  completeIcon.addEventListener("click", () => {
    item.classList.toggle("linethrough")
    completeIcon.classList.toggle("iconColorChange")
    if(!data["completed"]) {
      data["completed"] = true
    } else {
      data["completed"] = false
    }
    // data["completed"] = true
    saveState()
  })

  //adding delete event
  const deleteIcon = todoItem.querySelector(".todo-icons").querySelector(".delete")
  deleteIcon.addEventListener("click", () => {
    //capture item string in element
    let itemDelete = item.textContent

    console.log("current state", state.todo)
    console.log("itemDelete", itemDelete)
    //use filter to remove matches from array
    let arrFilter = state.todo.filter((data) => {
      return data["todo"] !== itemDelete
    })
    //set returned array to state
    state.todo = arrFilter

    //remove element
    todoItem.remove()

    //delete all children under list
    todoList.innerHTML = "";

    //rerender all list for duplicate scenarios
    displayTodoList()

    //savestate
    saveState()
    console.log(arrFilter)
  })
}

const displayTodoList = () => {
  state.todo.forEach( item => createTodoList(item) )
}

const onloadWithUser = () => {
  todoToggle.style.visibility = "visible"
  inputNameForm.style.display = "none"
  displayTodoList()
  createGreeting()
  focusOption.style.display = "none"
  //condition to create or display Focus based on state
  !state.focus ? createFocus() : displayFocus()
}


//main
//load state upon render
loadState()

//set input if no name in state
if(!state.name) {
  focusForm.style.display = "none"
  focusOption.style.display = "none"
  createName()
} else {
  onloadWithUser()
}