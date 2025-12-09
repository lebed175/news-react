import styles from "../LatestNews/latestNews.module.css";
import BannersList from "../BannersList/BannersList";

const LatestNews = ({banners, loading}) => {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} loading={loading}></BannersList>
    </section>
  );
};

export default LatestNews;
