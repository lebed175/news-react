import styles from "../Main/main.module.css";

import useGetNews from "../../api/apiNews";

import NewsBanner from "../../Components/NewsBanner/NewsBanner";
import NewsList from "../../Components/NewsList/NewsList";

const Main = () => {
  const { data } = useGetNews();

  return (
    <main className={styles.main}>
      {data.length > 0 ? <NewsBanner item={data[0]}></NewsBanner> : null}
      <NewsList news={data}></NewsList>
    </main>
  );
};

export default Main;
