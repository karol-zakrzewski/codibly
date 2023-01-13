import {
  Paper,
  TableContainer,
  TableHead,
  TableBody,
  Table as MUITable,
} from '@mui/material'
import TableHeading from './tableHeading/TableHeading'

type Props = {
  children: JSX.Element
}

const Table = ({ children }: Props): JSX.Element => {
  const headings = ['Id', 'Name', 'Color', 'Year', 'Pantone Value']

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer component={Paper}>
        <MUITable sx={{ minWidth: 650 }} aria-label="Products table">
          <TableHead>
            <TableHeading headings={headings} />
          </TableHead>
          <TableBody>{children}</TableBody>
        </MUITable>
      </TableContainer>
    </Paper>
  )
}

export default Table
