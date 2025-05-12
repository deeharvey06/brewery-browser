import { FC } from 'react'

import Table from '../common/Table/Table'

import useBreweryTable from './hooks/useBreweryTable'

const BreweryTable: FC = () => {
  const { breweries, loading, error, columns } = useBreweryTable()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return <Table data={breweries} columns={columns} />
}

export default BreweryTable
