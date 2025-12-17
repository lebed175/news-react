import styles from "../NewsFilters/styles.module.css";

import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";

import { IFilter } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface Props {
  filters: IFilter;
}

const NewsFilters = ({ filters }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      <Slider>
        <Categories
          selectedCategory={filters.selectedCategory}
          setSelectedCategory={(category) =>
            dispatch(setFilters({ key: "selectedCategory", value: category }))
          }
        ></Categories>
      </Slider>

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      ></Search>
    </div>
  );
};

export default NewsFilters;
