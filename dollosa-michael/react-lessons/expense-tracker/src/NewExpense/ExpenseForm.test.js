import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import ExpenseForm from './ExpenseForm'

test('should show Expense Form component', () => {
  render(<ExpenseForm />)
  expect(screen.getByTestId("expense-form")).toBeDefined()
})
