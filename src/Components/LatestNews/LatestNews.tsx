import styles from "../LatestNews/styles.module.css";
import BannersList from "../BannersList/BannersList";

import { useGetLatestNews } from "../../api/apiNews";

const LatestNews = () => {
  const { latestNews, loading, error } = useGetLatestNews();

  return (
    <section className={styles.section}>
      <BannersList banners={latestNews} loading={loading}></BannersList>
    </section>
  );
};

export default LatestNews;
