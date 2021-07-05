import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import ExpensesFilter from './ExpensesFilter'

test('should show Expense Filter component', () => {
  render(<ExpensesFilter />)
  expect(screen.getByTestId("expenses-filter")).toBeDefined()
})
