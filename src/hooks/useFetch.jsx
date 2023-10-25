import { useState, useEffect } from 'react'

export default function useFetch ({ url, params, setData, setLoading, setError }) {
  // const [data, setData] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)
  const [controller, setController] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)
    fetch(url, { signal: abortController.signal, ...params })
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .then(() => setLoading(false))
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted')
        } else {
          setError({ error: true, message: error.message })
          setLoading(false)
        }
      })

    return () => {
      abortController.abort()
    }
  }, [])

  const cancelRequest = () => {
    if (controller) {
      controller.abort()
      setError({ error: true, message: 'Request aborted' })
    }
  }

  return {
    cancelRequest
  }
}
