import { FC } from 'react'
import styles from './Dropdown.module.scss'
import useDropdown from './hooks/useDropdown'

interface DropdownProps {
  options: Array<{ label: string; value: string }>
  placeholder?: string
  onChange: (value: string) => void
  value: string
}

const Dropdown: FC<DropdownProps> = ({
  options,
  placeholder = 'Select...',
  onChange,
  value,
}) => {
  const { isOpen, toggleDropdown, handleSelect } = useDropdown(onChange)

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        {value
          ? options.find((option) => option.value === value)?.label
          : placeholder}
        <span className={styles.dropdownArrow}>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.dropdownItem}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
