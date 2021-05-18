import { getTime, getQuote, capitalizeSentence } from './service.js'

//set object state
let state = {
  name: "",
  focus: "",
  todo: []
}

//storage logic
const saveState = () => {
  localStorage.setItem("data", JSON.stringify(state))
}

const loadState = () => {
  let retrievedData = localStorage.getItem("data")
  if(!retrievedData) {
    saveState()
    location.reload()
  }
  state = JSON.parse(retrievedData)
}

//reset button for testing and presentation
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
  let modifyName = document.querySelector(".greetings").getElementsByTagName("h1")[0].getElementsByTagName("span")
  let nameBlock = modifyName[0].contains(event.target)
  //if outside greeting block

  if(!nameBlock){
    modifyName[0].style.outline = "none"
  }
  //if user clicks outside quote div, it should reset to default style
  if(!insideQuoteBlock){
    let innerQuote = setQuote.getElementsByTagName("p")
    let quote = innerQuote[2].getElementsByTagName("span")
    quote[0].setAttribute("contenteditable", "false")
    quotesIcon.style.visibility = "hidden"
  }

  //if user clicks outside focus div, it should reset to default style
  if(!focusBlock && focusInput) {
    let focusInputElement = focusContainer.getElementsByTagName("h1")[1].getElementsByTagName("span")[0]
    focusInputElement.setAttribute("contenteditable", "false")
    focusOption.style.visibility = "hidden"
  }
})


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
  setGreetingName.innerHTML = `Hi <span contenteditable=true>${state.name}</span>, have a great day!`
  setGreetings.style.display = "block"

  let modifyName = setGreetingName.getElementsByTagName("span")
  modifyName[0].addEventListener("click", () => {
    modifyName[0].style.outline = "1px solid #b6b6b6"
  })
  modifyName[0].addEventListener("keydown", e => {
    if (e.which === 13) {
      modifyName[0].blur()
      modifyName[0].style.outline = "none"
      state.name = modifyName[0].innerHTML
      saveState()
      console.log(state.name)
      return false;
    }
  })
}

//input focus logic
const focusForm = document.querySelector("#focusForm")
const focusContainer = document.querySelector(".container-focus")
const focusOption = document.querySelector(".focus-option")
const modifyFocus = document.querySelector(".focus-option-modify")
const setFocus = document.querySelector(".container-focus")
const setFocusName = document.createElement("h1")

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

//modify Focus listener
modifyFocus.addEventListener("click", () => {
  let focusInput = focusContainer.getElementsByTagName("h1")[1].getElementsByTagName("span")[0]
  focusInput.setAttribute("contenteditable", "true")
  focusInput.focus()
  focusInput.addEventListener("keydown", e => {
    if (e.which === 13) {
      focusInput.setAttribute("contenteditable", "false")
      focusInput.blur()
      focusOption.style.visibility = "hidden"
      state.focus = focusInput.innerHTML
      saveState()
      return false;
    }
  })
})

//create focus fn
const createFocus = () => {
  //show focusForm
  focusForm.style.display = "block"

  //focusForm listener
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
  setFocus.append(setFocusName)
  setFocusName.innerHTML = `Main Focus for today<br> <strong><span>${state.focus}</span></strong>`
  AddEventListenerToFocus()
}

//quotes logic
const quotesContainer = document.querySelector(".container-quotes")
const quotesIcon = document.querySelector(".quotes-option-container")
const quotesOptionGenerate = document.querySelector(".quote-option-generate")
const quotesOptionCreate = document.querySelector(".quote-option-create")

quotesContainer.addEventListener("mouseover", () => {
  quotesIcon.style.visibility = "visible"
})

quotesContainer.addEventListener("mouseout", () => {
  let innerQuote = setQuote.getElementsByTagName("p")
  let quote = innerQuote[2].getElementsByTagName("span")
  quote[0] === document.activeElement ? quotesIcon.style.visibility = "visible" : quotesIcon.style.visibility = "hidden"
})

//async quotes generation listener
quotesOptionGenerate.addEventListener("click", async() => {
  const quote = await getQuote()
  let innerQuote = setQuote.getElementsByTagName("p")
  innerQuote[2].innerHTML = `"<span>${capitalizeSentence(quote.compliment)}</span>"`
})

//create quote listener
quotesOptionCreate.addEventListener("click", () => {
  let innerQuote = setQuote.getElementsByTagName("p")
  let quote = innerQuote[2].getElementsByTagName("span")
  quote[0].setAttribute("contenteditable", "true")
  quote[0].focus()

  quote[0].addEventListener("keydown", e => {
    if (e.which === 13) {
      quote[0].setAttribute("contenteditable", "false")
      quote[0].blur()
      quotesIcon.style.visibility = "hidden"
      return false;
    }
  })
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
  })
}

//fn for rerendering todolist
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


//date/time logic
const setTime = document.querySelector(".time")
const time = getTime()
const appendTime = document.createElement("h1")
setTime.append(appendTime)
appendTime.innerHTML = time


//get quote
const setQuote = document.querySelector(".container-quotes")
const appendQuote = document.createElement("p")
setQuote.append(appendQuote)
const quote = await getQuote()
appendQuote.innerHTML = `"<span>${capitalizeSentence(quote.compliment)}</span>"`

//set container to hidden
quotesIcon.style.visibility = "hidden"

//set input if no name in state
if(!state.name) {
  focusForm.style.display = "none"
  focusOption.style.display = "none"
  createName()
} else {
  onloadWithUser()
}