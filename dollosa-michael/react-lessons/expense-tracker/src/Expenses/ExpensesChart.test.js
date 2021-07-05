import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import data from "../data"
import ExpensesChart from './ExpensesChart'

test('should show Expense Chart component', () => {
  render(<ExpensesChart expenses={data}/>)
  expect(screen.getByTestId("chart")).toBeDefined() //since expense chart only renders props children which is chart
})
