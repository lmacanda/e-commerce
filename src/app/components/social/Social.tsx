import styles from "./Social.module.scss";
function Social() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Instagram</h1>
      <p className={styles.subtitle}>Follow our store on Instagram</p>
      <button className={styles.button}>Follow Us</button>
    </div>
  );
}

export default Social;
