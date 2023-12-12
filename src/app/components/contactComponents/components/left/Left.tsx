import styles from "./Left.module.scss";
import Image from "next/image";

function Left() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.image}>
          <Image
            src="/images/contact/address.png"
            alt="address"
            width={17}
            height={17}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>Address</h3>
          <p className={styles.subtitle}>
            236 5th SE Avenue, New
            <br />
            York NY10000, United
            <br />
            States
          </p>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.image}>
          <Image
            src="/images/contact/phone.png"
            alt="phone"
            width={17}
            height={17}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>Phone</h3>
          <p className={styles.subtitle}>
            Mobile: +(84) 546-6789
            <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.image}>
          <Image
            src="/images/contact/clock.png"
            alt="address"
            width={17}
            height={17}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>Working Time</h3>
          <p className={styles.subtitle}>
            Monday-Friday: 9:00 -<br /> 22:00
            <br />
            Saturday-Sunday: 9:00 -<br /> 21:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Left;
