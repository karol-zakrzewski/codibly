import { TableRow as MUITableRow, TableCell } from '@mui/material'
import { useDispatch } from 'react-redux'
import { productDetailsSliceActions } from '../../../store/productDetailsSlice'
import { Data } from '../Table.types'

type Props = Data

const TableRow = ({
  id,
  name,
  color,
  year,
  pantone_value,
}: Props): JSX.Element => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(
      productDetailsSliceActions.showProductDetails({
        productDetails: {
          id,
          name,
          color,
          year,
          pantone_value,
        },
      }),
    )
  }

  return (
    <MUITableRow
      key={name}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        background: color,
      }}
      onClick={handleClick}
    >
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{year}</TableCell>
    </MUITableRow>
  )
}

export default TableRow
