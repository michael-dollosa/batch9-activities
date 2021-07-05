import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import ExpenseItem from './ExpenseItem'


const props = {
  title: "Car Insurance",
  amount: "294.67",
  date: new Date(2019, 2, 28),
}


test('should show Expense Item component', () => {
  render(<ExpenseItem title={props.title} amount={props.amount} date={props.date}/>)
  expect(screen.getByTestId("expense-item")).toBeDefined()
})
