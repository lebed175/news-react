import styles from "../NewsFilters/newsFilters.module.css";

import Categories from "../Categories/Categories";
import Search from "../Search/Search";

const NewsFilters = ({ filters, changeFilter }) => {
  return (
    <div className={styles.filters}>
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
    </div>
  );
};

export default NewsFilters;
