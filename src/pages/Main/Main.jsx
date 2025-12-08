import styles from "../Main/main.module.css";

import { useGetNews } from "../../api/apiNews";
import { useFilters } from "../../helpers/useFilters";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants";

import NewsBanner from "../../Components/NewsBanner/NewsBanner";
import NewsList from "../../Components/NewsList/NewsList";
import Pagination from "../../Components/Pagination/Pagination";
import Categories from "../../Components/Categories/Categories";
import Search from "../../Components/Search/Search";

const Main = () => {
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

  const handlePageClick = (pageNumber) => {
    changeFilter("currentPage", pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        selectedCategory={filters.selectedCategory}
        setSelectedCategory={(category) =>
          changeFilter("selectedCategory", category)
        }
      ></Categories>

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      ></Search>

      <NewsBanner
        loading={loading}
        item={news.length > 0 && news[0]}
      ></NewsBanner>

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
    </main>
  );
};

export default Main;
