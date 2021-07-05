import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import Card from './Card'

test('should show Card component', () => {
  render(<Card />)
  expect(screen.getByTestId("card")).toBeDefined()
})
