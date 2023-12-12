import Hero from "../hero/Hero";
import Info from "../info/Info";
import Left from "../posts/components/left/Left";
import Right from "./components/right/Right";
import styles from "./Posts.module.scss";

export default function Posts() {
  return (
    <main>
      <div className={styles.wrapper}>
        <Hero />
        <div className={styles.container}>
          <Left />
          <Right />
        </div>
        <Info />
      </div>
    </main>
  );
}
