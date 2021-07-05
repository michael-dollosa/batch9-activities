import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import Expenses from './Expenses/Expenses'
import NewExpense from './NewExpense/NewExpense'
import sampleData from "./data"

test('should show New Expense component', () => {
  render(<NewExpense />)
  expect(screen.getByTestId("new-expense")).toBeDefined()
  // Events and assertions...
})

test('should show Expense component', () => {
  render(<Expenses expenses={sampleData}/>)
  expect(screen.getByTestId("expenses")).toBeDefined()
  // Events and assertions...
})