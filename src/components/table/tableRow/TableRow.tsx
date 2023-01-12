import { TableRow as MUITableRow, TableCell } from '@mui/material'
import { Data } from '../Table.types'

type Props = Data

const TableRow = ({
  id,
  name,
  color,
  year,
  pantone_value,
}: Props): JSX.Element => {
  return (
    <MUITableRow
      key={name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align="right">{id}</TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{color}</TableCell>
      <TableCell align="right">{year}</TableCell>
      <TableCell align="right">{pantone_value}</TableCell>
    </MUITableRow>
  )
}

export default TableRow
