import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"


const NewExpense = (props) => {
  const [toggleExpenseForm, setToggleExpenseForm] = useState(true)
  const handleToggleExpenseForm = () => {
    setToggleExpenseForm(!toggleExpenseForm)
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
  }

  return(
    <div className="new-expense">
      {
        toggleExpenseForm 
        ? <button onClick={handleToggleExpenseForm}> Add Expense Chenlyn </button>
        : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} handleToggleExpenseForm={handleToggleExpenseForm} />
      }
    </div>
  )
}

export default NewExpense