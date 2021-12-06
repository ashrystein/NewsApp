import { useEffect, useState } from 'react'

export default function useFetch<T>(endPoint: () => Promise<T>) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)

  const get = async () => {
    setIsLoading(true)
    try {
      const data: T = await endPoint()
      data && setData(data)
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    get()
  }, [endPoint])

  return { isLoading, isError, data }
}
