import { render, screen } from '@testing-library/react'
import Table from './Table'
import TableRow from './tableRow/TableRow'
import { Provider } from 'react-redux'
import { store } from '../../store'

const data = [
  {
    id: 1,
    name: 'Example name',
    year: 2023,
    color: '#000',
    pantone_value: '15-4020',
  },
  {
    id: 2,
    name: 'Second example name',
    year: 2022,
    color: '#fff',
    pantone_value: '17-2031',
  },
]

describe('Table', () => {
  test('should render table row', () => {
    render(
      <Provider store={store}>
        <Table>
          <>
            {data.map((row) => (
              <TableRow key={row.id} {...row} />
            ))}
          </>
        </Table>
        ,
      </Provider>,
    )
    const headingRowLength = 1
    const rowLength = data.length + headingRowLength

    const rowElements = screen.getAllByRole('row')
    expect(rowElements.length).toBe(rowLength)
  })

  test('should render table with products', () => {
    render(
      <Provider store={store}>
        <Table>
          <>
            {data.map((row) => (
              <TableRow key={row.id} {...row} />
            ))}
          </>
        </Table>
        ,
      </Provider>,
    )
    const firstRowIdElement = screen.getByText(data[0].id)
    const firstRowNameElement = screen.getByText(data[0].name)
    const firstRowYearElement = screen.getByText(data[0].year)

    const secondRowIdElement = screen.getByText(data[1].id)
    const secondRowElement = screen.getByText(data[1].name)
    const secondRowYearElement = screen.getByText(data[1].year)

    expect(firstRowIdElement).toBeInTheDocument()
    expect(firstRowNameElement).toBeInTheDocument()
    expect(firstRowYearElement).toBeInTheDocument()

    expect(secondRowIdElement).toBeInTheDocument()
    expect(secondRowElement).toBeInTheDocument()
    expect(secondRowYearElement).toBeInTheDocument()
  })
})
