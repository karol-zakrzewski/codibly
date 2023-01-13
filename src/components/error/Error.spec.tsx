import { render, screen } from '@testing-library/react'

import Error from './Error'

describe('Error', () => {
  test('render error with message', () => {
    render(<Error error="Failed fetch" />)
    const errorElement = screen.getByText(/failed fetch/i)

    expect(errorElement).toBeInTheDocument()
  })
})
