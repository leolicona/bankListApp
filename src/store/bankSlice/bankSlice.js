import { createSlice } from '@reduxjs/toolkit'
import { getFromLocalStorage } from '../../utils/persistData'

const initialState = {
  banks: getFromLocalStorage('banks') || [],
  loading: false,
  error: null

}

export const banksSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    setBanks: (state, action) => {
      state.banks = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      const { error } = action.payload
      state.error = error
    }

  }
})

export const { setBanks, setLoading, setError } = banksSlice.actions
export default banksSlice.reducer
