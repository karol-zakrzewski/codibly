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
}

const Table = ({ products }: Props): JSX.Element => {
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
      <Link to={{ search: 'page=2' }}>Page 2</Link>
    </Paper>
  )
}

export default Table
