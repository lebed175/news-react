import styles from "../Image/styles.module.css";

type Props = {
  image: string | undefined;
};

const Image = ({ image }: Props) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export default Image;
