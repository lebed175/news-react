import styles from "../NewsByFilters/styles.module.css";

import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import { useFilters } from "../../helpers/useFilters";
import { useGetNews } from "../../api/apiNews";
import { PAGE_SIZE } from "../../constants/constants";
import { TOTAL_PAGES } from "../../constants/constants";

const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    currentPage: 1,
    selectedCategory: "All",
    keywords: "",
    pageSize: PAGE_SIZE,
    totalPages: TOTAL_PAGES,
  });

  const { news, loading, error } = useGetNews({
    ...filters,
  });

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

  const handlePageClick = (pageNumber: number) => {
    changeFilter("currentPage", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter}></NewsFilters>

      <PaginationWrapper
        top
        bottom={false}
        currentPage={filters.currentPage}
        totalPages={filters.totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
      >
        <NewsList loading={loading} news={news}></NewsList>
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
