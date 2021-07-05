import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import Expenses from './Expenses'
import sampleData from "../data"


test('should show Expense component', () => {
  render(<Expenses expenses={sampleData}/>)
  expect(screen.getByTestId("expenses")).toBeDefined()
})