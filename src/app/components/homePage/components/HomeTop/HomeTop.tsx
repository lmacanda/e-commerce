import Image from "next/image";
import styles from "./HomeTop.module.scss";
import Button from "@/app/components/button/Button";

function HomeTop() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>Rocket single seater</h1>
        <Button fontSize="bold">Shop Now</Button>
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
