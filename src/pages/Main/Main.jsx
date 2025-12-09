import styles from "../Main/main.module.css";

import { useGetNews } from "../../api/apiNews";
import { useFilters } from "../../helpers/useFilters";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants";

import LatestNews from "../../Components/LatestNews/LatestNews";
import NewsByFilters from "../../Components/NewsByFilters/NewsByFilters";

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

  return (
    <main className={styles.main}>
      <LatestNews loading={loading} banners={news}></LatestNews>

      <NewsByFilters
        filters={filters}
        changeFilter={changeFilter}
        loading={loading}
        news={news}
      ></NewsByFilters>
    </main>
  );
};

export default Main;
