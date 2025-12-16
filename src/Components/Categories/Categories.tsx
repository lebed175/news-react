import styles from "../Categories/styles.module.css";

import { categories } from "../../helpers/categories";
import { ForwardedRef, forwardRef } from "react";

import { CategoriesType } from "../../interfaces";

interface Props {
  selectedCategory: CategoriesType;
  setSelectedCategory: (category: CategoriesType) => void;
}

const Categories = forwardRef(
  (
    { setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              key={index}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
