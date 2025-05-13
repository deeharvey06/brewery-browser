// Helper function to sort data
const sortData = (a: any, b: any, key: string, sortOrder: string) => {
  if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1
  if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1
  return 0
}

// Process data: group and sort
const groupAndSort = (
  data: Array<Record<string, any>>,
  groupBy: string,
  sortBy: string,
  sortOrder: string
) => {
  if (!data || data.length === 0) return []
  const processedData = [...data].sort((a, b) => {
    // Sort by group first if groupBy is provided
    if (groupBy && a[groupBy] !== b[groupBy]) {
      return sortData(a, b, groupBy, sortOrder)
    }
    // Then sort by the specified column
    return sortBy ? sortData(a, b, sortBy, sortOrder) : 0
  })
  return processedData
}

export default groupAndSort
