import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Ankyris Travel Blog</h1>
        <p className={styles.desc}>
        Welcome to Ankyris Travel Blog, your gateway to unforgettable adventures and travel experiences. 
        We believe that travel is not just about visiting new places, but about creating memories that last a lifetime. 
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/travelHome.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
