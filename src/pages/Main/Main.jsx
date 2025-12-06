import styles from "../Main/main.module.css";

import useGetNews from "../../api/apiNews";

import Skeleton from "../../Components/Skeleton/Skeleton";
import NewsBanner from "../../Components/NewsBanner/NewsBanner";
import NewsList from "../../Components/NewsList/NewsList";

const Main = () => {
  const { data, loading } = useGetNews();

  return (
    <main className={styles.main}>
      {data.length > 0 && !loading ? (
        <NewsBanner item={data[0]}></NewsBanner>
      ) : (
        <Skeleton count={1} type={"banner"}></Skeleton>
      )}
      
      {!loading ? (
        <NewsList news={data}></NewsList>
      ) : (
        <Skeleton count={10} type={"item"}></Skeleton>
      )}
    </main>
  );
};

export default Main;
