import { useEffect } from 'react'
import useBreweryApi from '../../../api/breweryApi/hooks/useBreweryApi'

const useBreweryTable = () => {
  const { breweries, error, fetchBreweriesStatus, initFetchBreweries } =
    useBreweryApi()

  useEffect(() => {
    const fetchBreweries = async () => {
      initFetchBreweries()
    }

    fetchBreweries()
  }, [initFetchBreweries])

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Country', accessor: 'country' },
    { header: 'Type', accessor: 'brewery_type' },
  ]

  return {
    breweries,
    fetchBreweriesStatus,
    error,
    columns,
  }
}

export default useBreweryTable
