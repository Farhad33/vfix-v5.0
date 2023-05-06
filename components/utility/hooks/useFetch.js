import { useEffect, useState } from "react";
import { api } from '../api'

const useFetch = (url) => {
  const [result, setResult] = useState({ data: [], error: false, loading: true })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api(url)
        setResult({
          data: response.data.data,
          loading: false,
          error: false
        })
      } catch (error) {
        setResult({
          data: [],
          loading: false,
          error
        })
      }
    }

    fetchData();
  }, [url])

  return result
}

export default useFetch