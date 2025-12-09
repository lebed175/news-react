import styles from "../NewsByFilters/newsByFilters.module.css";

import NewsFilters from "../NewsFilters/NewsFilters";
import Pagination from "../Pagination/Pagination";
import NewsList from "../NewsList/NewsList";

const NewsByFilters = ({ filters, changeFilter, loading, news }) => {
  const handleNextPage = () => {
    if (filters.currentPage < filters.totalPages) {
      changeFilter("currentPage", filters.currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.currentPage > 1) {
      changeFilter("currentPage", filters.currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("currentPage", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter}></NewsFilters>
      
      <Pagination
        currentPage={filters.currentPage}
        totalPages={filters.totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
      ></Pagination>

      <NewsList loading={loading} news={news}></NewsList>

      <Pagination
        currentPage={filters.currentPage}
        totalPages={filters.totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
      ></Pagination>
    </section>
  );
};

export default NewsByFilters;
