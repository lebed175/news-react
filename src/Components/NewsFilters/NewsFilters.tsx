import styles from "../NewsFilters/styles.module.css";

import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";

import { IFilter } from "../../interfaces";

interface Props {
  filters: IFilter;
  changeFilter: (key: string, value: number | string | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
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
