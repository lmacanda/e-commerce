import styles from "./Slide.module.scss";

import Link from "next/link";

interface ISlide {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  buttonText?: any;
}

const Slide: React.FC<ISlide> = ({ title, subtitle, buttonText, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textCenter}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div>{children}</div>
      <div className={styles.center}>
        <Link href="/shop">
          <button>View More</button>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
