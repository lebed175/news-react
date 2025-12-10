import styles from "../Categories/categories.module.css";

import { categories } from "../../helpers/categories";
import { forwardRef } from "react";

const Categories = forwardRef(
  ({ setSelectedCategory, selectedCategory }, ref) => {
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
