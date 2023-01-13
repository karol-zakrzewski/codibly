import { TableRow as MUITableRow, TableCell } from '@mui/material'
import { Data } from '../Table.types'

type Props = Data

const TableRow = ({ id, name, color, year }: Props): JSX.Element => {
  return (
    <MUITableRow
      key={name}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        background: color,
      }}
    >
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{year}</TableCell>
    </MUITableRow>
  )
}

export default TableRow
