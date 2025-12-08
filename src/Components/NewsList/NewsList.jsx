import styles from "../NewsList/newsList.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";

import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ news }) => {
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
