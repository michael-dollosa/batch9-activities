import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import Chart from './Chart';

const chartDataPoints = [
  { label: "Jan", value: 0 },
  { label: "Feb", value: 0 },
  { label: "Mar", value: 0 },
  { label: "Apr", value: 0 },
  { label: "May", value: 0 },
  { label: "Jun", value: 0 },
  { label: "Jul", value: 0 },
  { label: "Aug", value: 0 },
  { label: "Sep", value: 0 },
  { label: "Oct", value: 0 },
  { label: "Nov", value: 0 },
  { label: "Dec", value: 0 },
];

test('should show Chart component', () => {
  render(<Chart dataPoints={chartDataPoints}/>)
  expect(screen.getByTestId("chart")).toBeDefined()
})
