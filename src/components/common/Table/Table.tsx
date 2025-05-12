import { FC } from 'react'
import styles from './Table.module.scss'

interface TableProps {
  data: Array<Record<string, any>>
  columns: Array<{ header: string; accessor: string }>
  onRowClick?: (row: Record<string, any>) => void
}

const Table: FC<TableProps> = ({ data, columns, onRowClick }) => {
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
        {data.map((row, rowIndex) => (
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
  )
}

export default Table
