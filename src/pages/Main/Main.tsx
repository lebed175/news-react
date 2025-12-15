import styles from "../Main/styles.module.css";

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
