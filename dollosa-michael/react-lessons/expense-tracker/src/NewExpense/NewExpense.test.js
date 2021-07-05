import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import NewExpense from './NewExpense'


test('should show New Expense component', () => {
  render(<NewExpense />)
  expect(screen.getByTestId("new-expense")).toBeDefined()
})
