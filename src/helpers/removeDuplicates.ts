const removeDuplicates = <T extends Record<string, any>>(
  array: T[],
  key: string
): T[] => {
  const seen = new Set()
  return array.filter((item) => {
    const value = item[key]
    if (seen.has(value)) {
      return false
    }

    seen.add(value)
    return true
  })
}

export default removeDuplicates
