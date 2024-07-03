import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Our Blog</h2>
        <h1 className={styles.title}>
          We understand that every traveler is unique.
        </h1>
        <p className={styles.desc}>
        Our blog is dedicated to sharing the magic of travel with you, 
        offering insights and advice to help you make the most of your adventures. 
        Whether you&apos;re a seasoned globetrotter or planning your first big trip, 
        you&apos;ll find something to inspire and guide you here.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>1 K+</h1>
            <p>Daily Acitve Users</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Total Users</p>
          </div>
          <div className={styles.box}>
            <h1>2 year+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/unnamed.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
