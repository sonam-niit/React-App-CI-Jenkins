import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

test('renders hello world text', async () => {
  render(<App />)

  await waitFor(() => {
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })
})
