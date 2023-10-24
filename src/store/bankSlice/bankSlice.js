import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  banks: [],
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
      console.log('action.payload', action.payload)
      state.loading = action.payload
    },
    setError: (state, action) => {
      const { error } = action.payload
      console.log('action.payload', action.payload)
      state.error = error
    }

  }
})

export const { setBanks, setLoading, setError } = banksSlice.actions
export default banksSlice.reducer
