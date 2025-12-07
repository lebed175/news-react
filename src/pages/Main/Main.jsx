import { useState } from "react";
import styles from "../Main/main.module.css";

import { useGetNews } from "../../api/apiNews";

import Skeleton from "../../Components/Skeleton/Skeleton";
import NewsBanner from "../../Components/NewsBanner/NewsBanner";
import NewsList from "../../Components/NewsList/NewsList";
import Pagination from "../../Components/Pagination/Pagination";
import Categories from "../../Components/Categories/Categories";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { news, loading } = useGetNews({
    currentPage: currentPage,
    totalPages: totalPages,
    selectedCategory: selectedCategory,
  });

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      ></Categories>

      {news.length > 0 && !loading ? (
        <NewsBanner item={news[0]}></NewsBanner>
      ) : (
        <Skeleton count={1} type={"banner"}></Skeleton>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
      ></Pagination>

      {news.length > 0 && !loading ? (
        <NewsList news={news}></NewsList>
      ) : (
        <Skeleton count={10} type={"item"}></Skeleton>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
      ></Pagination>
    </main>
  );
};

export default Main;
