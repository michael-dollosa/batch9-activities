import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import ChartBar from './ChartBar'

const props = {
  title: "Car Insurance",
  amount: "294.67",
  date: new Date(2019, 2, 28),
}
test('should show Chartbar component', () => {
  render(<ChartBar key={1} value={12} maxValue={12} label={"Jul"} />)
  expect(screen.getByTestId("chart-bar")).toBeDefined()
})
