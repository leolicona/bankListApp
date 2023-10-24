import { useState, useEffect } from 'react'
import useBankSlice from '../../store/bankSlice/useBankSlice'
import { bankListData } from '../../mookups/data'
import useFetch from '../../hooks/useFetch'
const testUrl = 'https://fakestoreapi.com/products'
const url = 'https://dev.obtenmas.com/catom/api/challenge/banks'

export default function useBankList () {
  const { banks, setBanksState, setErrorState, setLoadingState } = useBankSlice()

  useFetch({
    url,
    // params: { mode: 'no-cors' },
    setData: setBanksState,
    setLoading: setLoadingState,
    setError: setErrorState
  })

  useEffect(() => {
    if (banks.length === 0) {
      setBanksState(bankListData)
    }
  }, [banks])

  return {
    banks: banks || bankListData
  }
}
