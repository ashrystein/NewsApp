import { useState } from 'react'

export default function useFetch<T>(endPoint: (page: number) => Promise<T>) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)

  const get = async (page: number) => {
    setIsLoading(true)
    setIsError(false)
    try {
      const response: T = await endPoint(page)
      response && setData(response)
    } catch (error) {
      // Some unExpected errors happen beacuse of newsapi.org
      // Ex: 426 Upgrade Required etc.
      setIsError(true)
      setData(null)
    }
    setIsLoading(false)
  }

  return { isLoading, isError, data, get }
}
