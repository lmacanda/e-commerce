import Image from "next/image";
import styles from "./HomeBottom.module.scss";

function HeroBottom() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="image">
          <Image
            src={`/images/home/hero_1.png`}
            alt="hero"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.button}>
          <p className={styles.text}>Side table</p>
          <button>View More</button>
        </div>
      </div>

      <div className={styles.content}>
        <div className="image">
          <Image
            src={`/images/home/hero_2.png`}
            alt="hero"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.button}>
          <p className={styles.text}>Cloud couch</p>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default HeroBottom;
