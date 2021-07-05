import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import ExpensesList from './ExpensesList'
import data from "../data"

test('should show Expense List component', () => {
  render(<ExpensesList items={data} option={0}/>)
  expect(screen.getByTestId("expenses-list")).toBeDefined()
})
