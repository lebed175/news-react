import styles from "../LatestNews/styles.module.css";
import BannersList from "../BannersList/BannersList";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews = () => {
  const { data, isLoading: loading } = useGetLatestNewsQuery({
    country: "us",
  });

  const latestNews = data?.articles || [];

  return (
    <section className={styles.section}>
      <BannersList banners={latestNews} loading={loading}></BannersList>
    </section>
  );
};

export default LatestNews;
