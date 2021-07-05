import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import { useState } from "react"

const Expenses = (props) => {
  const [option, setOption] = useState(2027)
  const handleOption = event => {
    setOption(parseInt(event.target.value))
  }
  let arrExpense = []
  props.expenses.forEach(item => {   
    if(item.date.getFullYear() === option) {
      arrExpense.push(item)
    }
  });

  console.log(arrExpense.length > 0)
  return(
    <div data-testid="expenses">
      <Card className="expenses">
        <ExpensesFilter items={props.expenses} handleOption={handleOption} option={option}/>
        <ExpensesChart expenses={arrExpense} />
        {
          arrExpense.length > 0
          ? <ExpensesList items={props.expenses} option={option}/>
          : <h1 style={{color: "white", textAlign: "center"}}>No Item Found</h1>
        }
        
        
      </Card>
    </div>
    
  )
  
}

export default Expenses