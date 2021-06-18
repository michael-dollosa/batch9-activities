
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  return(
    <Card className="expenses">
      <div className="expense-item">
        <ExpenseDate />
        <div className="expense-item__description">
          <h2>Car Insurance</h2>
          <div className="expense-item__price">$100000</div>
        </div>
     </div>
    </Card>

  )
  
}

export default ExpenseItem