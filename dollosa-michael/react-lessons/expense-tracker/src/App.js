import "./App.css"
import DUMMY_EXPENSES from "./data"
import Expenses from "./Expenses/Expenses"
import NewExpense from "./NewExpense/NewExpense"
import { useState } from "react"
import Users from "./User/User"

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHanlder = (expense) => {
    setExpenses( (prevExpenses) => {
      return [expense, ...prevExpenses]
    } )
  }
  return(
    <div className="App">
      <Users />
      <NewExpense onAddExpense={addExpenseHanlder} />
      <Expenses expenses={expenses} />
    </div>
  )
   
}

export default App;