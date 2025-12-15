import styles from "../NewsItem/styles.module.css";

import { formatTimeAgo } from "../../helpers/formatTimeAgo";

import { INews } from "../../interfaces";

interface Props {
  item: INews;
}

const NewsItem = ({ item }: Props) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: item.urlToImage && `url(${item.urlToImage})`,
        }}
      ></div>

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.date}>
          {formatTimeAgo(item.publishedAt)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
