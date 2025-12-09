import styles from "../Main/main.module.css";

import LatestNews from "../../Components/LatestNews/LatestNews";
import NewsByFilters from "../../Components/NewsByFilters/NewsByFilters";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews></LatestNews>

      <NewsByFilters></NewsByFilters>
    </main>
  );
};

export default Main;
