import { useState, useEffect } from 'react'

type Fetch = {
  response: null
  error: Error | null
  loading: boolean
}

const useFetch = (url: string): Fetch => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState<null | Error>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    const doFetch = async () => {
      setLoading(true)
      try {
        const res = await fetch(url)
        const json = await res.json()
        if (!signal.aborted) {
          setResponse(json)
        }
      } catch (e) {
        if (e instanceof Error) {
          if (!signal.aborted) {
            setError(e)
          }
          setError(new Error('Fetch failed'))
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    }
    doFetch()
    return () => {
      abortController.abort()
    }
  }, [])
  return { response, error, loading }
}
export default useFetch
