import { useState, useCallback } from 'react'

const useDropdown = (onChange: (value: string) => void) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = useCallback(
    (selectedValue: string) => {
      onChange(selectedValue)
      setIsOpen(false)
    },
    [onChange]
  )

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return {
    isOpen,
    toggleDropdown,
    handleSelect,
  }
}

export default useDropdown
