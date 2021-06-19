import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import { useState } from "react"

const Expenses = (props) => {
  const [option, setOption] = useState(2021)

  const handleOption = event => {
    setOption(parseInt(event.target.value))
  }

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter items={props.expenses} handleOption={handleOption} option={option}/>
        <ExpensesList items={props.expenses} option={option}/>
      </Card>
    </div>
    
  )
  
}

export default Expenses