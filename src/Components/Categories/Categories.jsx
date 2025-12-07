import styles from "../Categories/categories.module.css";

import { categories } from "../../helpers/categories";

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <div className={styles.categories}>
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
};

export default Categories;
