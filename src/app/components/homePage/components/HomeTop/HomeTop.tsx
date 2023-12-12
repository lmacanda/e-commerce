import Image from "next/image";
import styles from "./HomeTop.module.scss";

function HomeTop() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>Rocket single seater</h1>
        <button>Shop Now</button>
      </div>
      <div className="image">
        <Image
          className={styles.image}
          src={`/images/home/hero.png`}
          alt="hero"
          width={853}
          height={1000}
        />
      </div>
    </div>
  );
}

export default HomeTop;
