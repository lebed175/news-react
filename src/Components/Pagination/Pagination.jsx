import styles from "../Pagination/pagination.module.css";

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className={
          currentPage === 1
            ? styles.arrow && styles.disabledArrow
            : styles.arrow
        }
        onClick={handlePrevPage}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              className={styles.pageNumber}
              disabled={currentPage === index + 1}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        className={
          currentPage === totalPages
            ? styles.arrow && styles.disabledArrow
            : styles.arrow
        }
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
