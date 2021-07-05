import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import ExpenseDate from './ExpenseDate'
const props = {
  title: "Car Insurance",
  amount: "294.67",
  date: new Date(2019, 2, 28),
}
test('should show Expense Date component', () => {
  render(<ExpenseDate date={props.date}/>)
  expect(screen.getByTestId("expense-date")).toBeDefined()
})
