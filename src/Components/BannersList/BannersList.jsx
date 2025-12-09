import styles from "../BannersList/bannersList.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";

import NewsBanner from "../NewsBanner/NewsBanner";

const BannersList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner, index) => {
        return <NewsBanner key={index} item={banner}></NewsBanner>;
      })}
    </ul>
  );
};

const BannerListWithSkeleton = withSkeleton(BannersList, 10, "banner", "row");

export default BannerListWithSkeleton;
