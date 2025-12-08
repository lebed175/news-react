import styles from "../NewsBanner/newsBanner.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";

import Image from "../Image/Image";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.urlToImage}></Image>
      <h3 className={styles.title}>{item?.title}</h3>
      <p className={styles.author}>
        {formatTimeAgo(item?.publishedAt)} by{" "}
        {item?.author ? item?.author : "Автор неизвестен."}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 1, 'banner');

export default NewsBannerWithSkeleton;
