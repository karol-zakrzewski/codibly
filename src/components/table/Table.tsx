import {
  Paper,
  TableContainer,
  TableHead,
  TableBody,
  Table as MUITable,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { Data } from './Table.types'
import TableHeading from './tableHeading/TableHeading'
import TableRow from './tableRow/TableRow'

type Props = {
  products: Data[]
  page: {
    currentPage: number
    totalPages: number
  }
}

const Table = ({ products, page }: Props): JSX.Element => {
  const headings = ['Id', 'Name', 'Color', 'Year', 'Pantone Value']

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer component={Paper}>
        <MUITable sx={{ minWidth: 650 }} aria-label="Products table">
          <TableHead>
            <TableHeading headings={headings} />
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow key={row.id} {...row} />
            ))}
          </TableBody>
        </MUITable>
      </TableContainer>
      <Link to={{ search: `page=${page.currentPage - 1}` }}>Prev page</Link>
      <Link to={{ search: `page=${page.currentPage + 1}` }}>Next page</Link>
    </Paper>
  )
}

export default Table
