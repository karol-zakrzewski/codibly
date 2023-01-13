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
  const headings = ['Id', 'Name', 'Year']

  return (
    <Paper sx={{ maxWidth: 650, overflow: 'hidden', margin: '2rem auto 0' }}>
      <TableContainer component={Paper}>
        <MUITable aria-label="Products table">
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
