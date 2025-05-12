import { useState, useCallback } from 'react'
import { fetchBreweries, Brewery } from '../breweryApi'
import { ApiStatus } from '../../types/ApiStatus'

const useBreweryApi = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([])
  const [error, setError] = useState<string | null>(null)
  const [fetchBreweriesStatus, setFetchBreweriesStatus] =
    useState<ApiStatus>('IDLE')

  const initFetchBreweries = useCallback(async () => {
    try {
      setFetchBreweriesStatus('PENDING')

      const response = await fetchBreweries()

      if (response.status < 200 || response.status >= 300) {
        throw new Error('Failed to fetch brewery data')
      }

      setBreweries(response.data)
      setFetchBreweriesStatus('SUCCESS')
    } catch (error: any) {
      setFetchBreweriesStatus('ERROR')
      setError(error.message)
    }
  }, [])

  return {
    breweries,
    error,
    fetchBreweriesStatus,
    initFetchBreweries,
  }
}

export default useBreweryApi
