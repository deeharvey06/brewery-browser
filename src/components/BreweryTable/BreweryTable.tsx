import { FC } from 'react'

import Table from '../common/Table/Table'

import useBreweryTable from './hooks/useBreweryTable'

const BreweryTable: FC = () => {
  const { breweries, fetchBreweriesStatus, error, columns } = useBreweryTable()

  if (fetchBreweriesStatus === 'PENDING') {
    return <p>Loading...</p>
  }

  if (fetchBreweriesStatus === 'ERROR') {
    return <p>Error: {error}</p>
  }

  return (
    <Table
      data={breweries}
      columns={columns}
      groupBy='brewery_type'
      sortBy='name'
      sortOrder='asc'
    />
  )
}

export default BreweryTable
