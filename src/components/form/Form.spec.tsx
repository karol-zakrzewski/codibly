import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Form from './Form'

describe('Form', () => {
  test('render form component', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>,
    )
    const inputElement = screen.getByLabelText(/search product/i)
    const buttonElement = screen.getByLabelText(/search/i)
    const linkElement = screen.getByText(/reset filter/i)

    expect(inputElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
    expect(linkElement).toBeInTheDocument()
  })

  test('should change input value', async () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>,
    )
    const inputElement = screen.getByLabelText(/search product/i)
    expect(inputElement).toBeInTheDocument()

    fireEvent.change(inputElement, { target: { value: 1 } })
    expect(inputElement).toHaveValue(1)
    expect(inputElement).not.toHaveValue(0)
  })
})
