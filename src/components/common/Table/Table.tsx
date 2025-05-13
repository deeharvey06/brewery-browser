import { FC } from 'react'
import styles from './Table.module.scss'
import useTable from './hooks/useTable'

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
  const { groupAndSortData } = useTable()

  return (
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
        {groupAndSortData(data, groupBy, sortBy, sortOrder).map(
          (row, rowIndex) => (
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
          )
        )}
      </tbody>
    </table>
  )
}

export default Table
