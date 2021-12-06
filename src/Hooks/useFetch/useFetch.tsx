import { useEffect, useState } from 'react'

export default function useFetch<T>(endPoint: () => Promise<T>) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)

  const get = async () => {
    setIsLoading(true)
    try {
      const response: T = await endPoint()
      response && setData(response)
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }

  return { isLoading, isError, data, get }
}
