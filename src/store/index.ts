import { configureStore } from '@reduxjs/toolkit'
import { productDetailsSlice } from './productDetailsSlice'

export const store = configureStore({
  reducer: {
    productDetails: productDetailsSlice.reducer,
  },
})
