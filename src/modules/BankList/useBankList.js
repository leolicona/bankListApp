import { useState, useEffect } from 'react'
import useBankSlice from '../../store/bankSlice/useBankSlice'
import useFetch from '../../hooks/useFetch'
import { saveToLocalStorage, getFromLocalStorage } from '../../utils/persistData'
const url = `${window.location.origin}/dev.obtenmas.com/catom/api/challenge/banks`

export default function useBankList () {
  const { banks, setBanksState, setErrorState, setLoadingState } = useBankSlice()

  useFetch({
    url,
    params: { },
    setData: (data) => saveToLocalStorage({ key: 'banks', data, action: setBanksState }),
    setLoading: setLoadingState,
    setError: setErrorState
  })

  return {
    banks
  }
}
