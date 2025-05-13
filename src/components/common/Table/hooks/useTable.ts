import { useCallback } from 'react'
import { groupAndSort } from '../helper/groupAndSortData'

const useTable = () => {
  const groupAndSortData = useCallback(groupAndSort, [])

  return {
    groupAndSortData,
  }
}

export default useTable
