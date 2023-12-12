"use client";
import styles from "./info.module.scss";

function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.padd}>
        <h3 className={styles.title}>Free Delivery</h3>
        <p className={styles.subTitle}>
          For all oders over $50, consectetur adipim scing elit.
        </p>
      </div>
      <div className={styles.padd}>
        <h3 className={styles.title}>90 Days Return</h3>
        <p className={styles.subTitle}>
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
      <div className={styles.padd}>
        <h3 className={styles.title}>Secure Payment</h3>
        <p className={styles.subTitle}>
          100% secure payment, consectetur adipim scing elit.{" "}
        </p>
      </div>
    </div>
  );
}

export default Info;
