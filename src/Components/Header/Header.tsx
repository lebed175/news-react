import styles from "../Header/styles.module.css";
import formatDate from "../../helpers/formatDate";

import themeIcons from "../../assets/index";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS by Vitalya</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <img
        src={`${isDark ? themeIcons.light : themeIcons.dark}`}
        width={60}
        alt="theme"
        onClick={toggleTheme}
        className={styles.image}
      />
    </header>
  );
};

export default Header;
