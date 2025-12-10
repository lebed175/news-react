import styles from "../NewsFilters/newsFilters.module.css";

import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";

const NewsFilters = ({ filters, changeFilter }) => {
  return (
    <div className={styles.filters}>
      <Slider>
        <Categories
          selectedCategory={filters.selectedCategory}
          setSelectedCategory={(category) =>
            changeFilter("selectedCategory", category)
          }
        ></Categories>
      </Slider>

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      ></Search>
    </div>
  );
};

export default NewsFilters;
