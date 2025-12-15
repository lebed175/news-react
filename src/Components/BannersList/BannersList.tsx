import styles from "../BannersList/styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";

import NewsBanner from "../NewsBanner/NewsBanner";

import { INews } from "../../interfaces";

interface Props {
  banners?: INews[];
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner, index) => {
        return <NewsBanner key={index} item={banner}></NewsBanner>;
      })}
    </ul>
  );
};

const BannerListWithSkeleton = withSkeleton<Props>(
  BannersList,
  10,
  "banner",
  "row"
);

export default BannerListWithSkeleton;
