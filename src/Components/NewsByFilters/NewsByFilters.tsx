import styles from "../NewsByFilters/styles.module.css";

import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";

import { useDebounce } from "../../helpers/useDebounce";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { useAppSelector, useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const dispatch = useAppDispatch();

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading: loading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const news = data?.articles ?? [];

  const handleNextPage = () => {
    if (filters.currentPage < filters.totalPages) {
      dispatch(
        setFilters({ key: "currentPage", value: filters.currentPage + 1 })
      );
    }
  };

  const handlePrevPage = () => {
    if (filters.currentPage > 1) {
      dispatch(
        setFilters({ key: "currentPage", value: filters.currentPage - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: "currentPage", value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters}></NewsFilters>

      <PaginationWrapper
        top
        bottom
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
