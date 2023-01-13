import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { productDetailsSliceActions } from '../../store/productDetailsSlice'
import { Data } from '../table/Table.types'

type Store = {
  productDetails: {
    isOpen: boolean
    productDetails: Data
  }
}

const ProductDetails = (): JSX.Element => {
  const {
    productDetails: { name, year, color, id, pantone_value },
    isOpen,
  } = useSelector((state: Store) => state.productDetails)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(productDetailsSliceActions.closeDialog())
  }
  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="dialog-title">
      <DialogTitle id="dialog-title">{'Product Details'}</DialogTitle>
      <DialogContent>
        <Typography>ID: {id}</Typography>
        <Typography>Name: {name}</Typography>
        <Typography>Color: {color}</Typography>
        <Typography>Year: {year}</Typography>
        <Typography>Pantone Value: {pantone_value}</Typography>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDetails
