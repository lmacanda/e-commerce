// Breadcrumb.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./breadcrumb.module.scss";

const Breadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbParts = pathname.split("/").filter((part) => part !== "");

  return (
    <nav className={styles.navigation}>
      <div>
        <Link className={styles.navigation_home} href="/">
          Home
        </Link>
      </div>
      &nbsp;
      {">"}&nbsp;
      <div>
        {breadcrumbParts.map((part, index) => (
          <div key={index}>
            <Link
              className={styles.navigation_path}
              href={`/${breadcrumbParts.slice(0, index + 1).join("/")}`}
            >
              {part}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
