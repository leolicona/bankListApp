import { useDispatch, useSelector } from 'react-redux'

import { setBanks, setError, setLoading } from './bankSlice'

export default function useBankSlice () {
  const dispatch = useDispatch()
  const setBanksState = (data) => dispatch(setBanks(data))
  const setLoadingState = (data) => dispatch(setLoading(data))
  const setErrorState = (data) => dispatch(setError(data))

  const banks = useSelector((state) => state.banks.banks)
  const loading = useSelector((state) => state.banks.loading)
  const error = useSelector((state) => state.banks.error)

  return {
    banks,
    loading,
    error,
    setBanksState,
    setErrorState,
    setLoadingState
  }
}
