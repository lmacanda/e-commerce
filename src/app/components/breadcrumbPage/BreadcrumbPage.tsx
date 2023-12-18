// Breadcrumb.jsx
"use client";
import Link from "next/link";

import styles from "./breadcrumbPage.module.scss";

interface BreadcrumbProps {
  productName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ productName }) => {
  return (
    <nav className={styles.navigation}>
      <div>
        <Link className={styles.navigation_home} href="/">
          Home
        </Link>
      </div>
      &nbsp;{">"}&nbsp;
      <div>
        <Link className={styles.navigation_shop} href="/shop">
          Shop
        </Link>
      </div>
      <div>&nbsp;{">"}&nbsp;</div> |{" "}
      <div>
        <Link className={styles.navigation_product} href="/product">
          {productName}
        </Link>
      </div>
    </nav>
  );
};

export default Breadcrumb;
