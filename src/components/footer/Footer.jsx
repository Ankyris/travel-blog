import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ankyris</div>
      <div className={styles.text}>
        Ankyris travel agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
