import ExpenseItem from "./ExpenseItem"
import "./ExpensesList.css"

const ExpensesList = ({items, option}) => {

  const expenseListComponent = items.map((item, index) => {
    if(item.date.getFullYear() === option) {
      return(
        <ExpenseItem 
          key={index}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      )
    }
  })
  
  return(
    <ul className="expenses-list" data-testid="expenses-list">
      {expenseListComponent}
    </ul>
  )
  
}

export default ExpensesList