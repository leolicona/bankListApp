import { configureStore } from '@reduxjs/toolkit'

import banksReducer from './slices/banksSlice'

export const store = configureStore({
  reducer: {
    banks: banksReducer
  }
})
