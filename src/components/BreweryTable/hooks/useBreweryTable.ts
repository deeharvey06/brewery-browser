import { useEffect, useState } from 'react'

interface Brewery {
  id: string
  name: string
  country: string
  brewery_type: string
}

const useBreweryTable = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await fetch(
          'https://api.openbrewerydb.org/v1/breweries?per_page=200'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch brewery data')
        }
        const data = await response.json()
        setBreweries(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBreweries()
  }, [])

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Country', accessor: 'country' },
    { header: 'Type', accessor: 'brewery_type' },
  ]

  return {
    breweries,
    loading,
    error,
    columns,
  }
}

export default useBreweryTable
