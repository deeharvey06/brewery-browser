import { FC } from 'react'
import styles from './PaginationFooter.module.scss'

interface PaginationFooterProps {
  currentPage: number
  totalPages: number
  onPrevious: () => void
  onNext: () => void
}

const PaginationFooter: FC<PaginationFooterProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {
  return (
    <footer className={styles.pagination}>
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        Previous
      </button>

      <span className={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        Next
      </button>
    </footer>
  )
}

export default PaginationFooter
