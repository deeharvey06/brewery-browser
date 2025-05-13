import { FC } from 'react'

import PaginationFooter from './components/PaginationFooter'
import Dropdown from '../Dropdown/'

import useTable from './hooks/useTable'
import styles from './Table.module.scss'

interface TableProps {
  data: Array<Record<string, any>>
  columns: Array<{ header: string; accessor: string }>
  groupBy?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  onRowClick?: (row: Record<string, any>) => void
}

const Table: FC<TableProps> = ({
  data,
  columns,
  groupBy = 'brewery_type',
  sortBy = 'name',
  sortOrder = 'asc',
  onRowClick,
}) => {
  const {
    selectedValue,
    paginatedData,
    uniqueBreweryTypes,
    currentPage,
    totalPages,
    handleDropdownChange,
    handlePreviousPage,
    handleNextPage,
  } = useTable(data, groupBy, sortBy, sortOrder)

  return (
    <div>
      <Dropdown
        options={uniqueBreweryTypes}
        placeholder='Select an type'
        onChange={handleDropdownChange}
        value={selectedValue}
      />

      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className={styles.header}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={styles.row}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map((column) => (
                <td key={column.accessor} className={styles.cell}>
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePreviousPage}
        onNext={handleNextPage}
      />
    </div>
  )
}

export default Table
