import styles from "../NewsList/newsList.module.css";

import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.title} item={item}></NewsItem>;
      })}
    </ul>
  );
};

export default NewsList;
