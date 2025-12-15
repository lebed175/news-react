import styles from "../NewsList/styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";

import NewsItem from "../NewsItem/NewsItem";

import { INews } from "../../interfaces";

interface Props {
  news: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.title} item={item}></NewsItem>;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 10, "item");

export default NewsListWithSkeleton;
