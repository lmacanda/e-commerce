"use client";

import Link from "next/link";
import Hr from "./components/horizontal-line/Hr";
import Input from "./components/input/Input";
import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <p className={styles.text}>
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className={styles.text}>FL 33134 USA</p>
          </div>
          <div className={styles.wrapper}>
            <ul>
              <li className={styles.line}>
                <p className={styles.text}>Links</p>
              </li>
              <li className={styles.line}>
                <Link className={styles.link} href="/home">
                  Home
                </Link>
              </li>
              <li className={styles.line}>
                <Link className={styles.link} href="/shop">
                  Shop
                </Link>
              </li>
              <li className={styles.line}>
                <Link className={styles.link} href="/about">
                  About
                </Link>
              </li>
              <li className={styles.line}>
                <Link className={styles.link} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.wrapper}>
            <ul>
              <li className={`${styles.text}, ${styles.line}`}>Help</li>
              <li className={styles.line}>
                <Link className={styles.link} href="#">
                  Payment Options
                </Link>
              </li>
              <li className={styles.line}>
                <Link className={styles.link} href="#">
                  Return
                </Link>
              </li>
              <li className={styles.line}>
                <Link className={styles.link} href="#">
                  Prvacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.wrapper}>
            <ul>
              <li className={styles.line}>
                <p className={styles.text}>Newsletter</p>
              </li>
              <li className={styles.line}>
                <div className={styles.centerDiv}>
                  <Input />
                  <span className={styles.subscribe}>SUBSCRIBE</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Hr />
        <p className={styles.credits}>2022 Meubel House. All rights reverved</p>
      </div>
    </footer>
  );
}
