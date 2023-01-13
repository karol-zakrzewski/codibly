import { createSlice } from '@reduxjs/toolkit'
import { Data } from '../components/table/Table.types'

type ProductDetails = {
  isOpen: boolean
  productDetails: Data
}

const initialState: ProductDetails = {
  isOpen: false,
  productDetails: {
    id: 0,
    name: '',
    year: 0,
    color: '',
    pantone_value: '',
  },
}

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    showProductDetails(
      state,
      action: { payload: Omit<ProductDetails, 'isOpen'> },
    ) {
      const { productDetails } = action.payload

      state.productDetails = productDetails
      state.isOpen = true
    },
    closeDialog(state) {
      state.isOpen = false
    },
  },
})

export const productDetailsSliceActions = productDetailsSlice.actions
