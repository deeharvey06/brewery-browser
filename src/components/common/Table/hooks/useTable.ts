import { useCallback, useState } from 'react'
import groupAndSort from '../helper/groupAndSortData'
import removeDuplicates from '../../../../helpers/removeDuplicates'

const useTable = (
  data: Array<Record<string, any>>,
  groupBy: string,
  sortBy: string,
  sortOrder: string
) => {
  const [selectedValue, setSelectedValue] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)

  const rowsPerPage = 10

  const groupAndSortData = useCallback(groupAndSort, [])

  const processedData = groupAndSortData(data, groupBy, sortBy, sortOrder)

  const filteredData = data.filter(
    (item) => item.brewery_type === selectedValue
  )

  const paginated = (array: Record<string, any>[]) => {
    return array.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    )
  }

  const paginatedData = paginated(processedData)

  const filteredPaginatedData = paginated(filteredData)

  const breweryTypes = data.map((item) => ({
    label: item.brewery_type,
    value: item.brewery_type,
  }))

  const uniqueBreweryTypes = removeDuplicates(breweryTypes, 'label')

  const totalPages = selectedValue
    ? Math.ceil(filteredData.length / rowsPerPage)
    : Math.ceil(processedData.length / rowsPerPage)

  const handleDropdownChange = useCallback((value: string) => {
    setSelectedValue(value)
    setCurrentPage(1)
  }, [])

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }, [currentPage])

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }, [currentPage, totalPages])

  return {
    selectedValue,
    paginatedData:
      filteredPaginatedData.length > 0 ? filteredPaginatedData : paginatedData,
    uniqueBreweryTypes,
    currentPage,
    totalPages,
    handleDropdownChange,
    handlePreviousPage,
    handleNextPage,
    groupAndSortData,
  }
}

export default useTable
