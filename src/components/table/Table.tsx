import {
  Paper,
  TableContainer,
  TableHead,
  TableBody,
  Table as MUITable,
} from '@mui/material'
import { Data } from './Table.types'
import TableHeading from './tableHeading/TableHeading'
import TableRow from './tableRow/TableRow'

const createData = (
  id: number,
  name: string,
  year: number,
  color: string,
  pantone_value: string,
): Data => {
  return { id, name, year, color, pantone_value }
}

const rows = [
  createData(1, 'India', 1324171354, 'IN', '3287263'),
  createData(2, 'China', 1403500365, 'CN', '9596961'),
  createData(3, 'Italy', 60483973, 'IT', '301340'),
  createData(4, 'United States', 327167434, 'US', '9833520'),
  createData(5, 'Canada', 37602103, 'CA', '9984670'),
  createData(6, 'Australia', 25475400, 'AU', '7692024'),
]

const Table = (): JSX.Element => {
  const headings = ['Id', 'Name', 'Color', 'Year', 'Pantone Value']
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer component={Paper}>
        <MUITable sx={{ minWidth: 650 }} aria-label="Products table">
          <TableHead>
            <TableHeading headings={headings} />
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} {...row} />
            ))}
          </TableBody>
        </MUITable>
      </TableContainer>
    </Paper>
  )
}

export default Table
