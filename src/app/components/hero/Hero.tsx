"use client";

import Image from "next/image";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { usePathname } from "next/navigation";
import styles from "./hero.module.scss";

export default function Hero() {
  const pathname = usePathname();

  // Get the current pathname from the router

  return (
    <main className={styles.hero}>
      <div className={styles.hero_content}>
        <Image
          className={styles.hero_content_logo}
          src="/images/logo.svg"
          alt="logo"
          width={77}
          height={77}
        />
        <h1>{getPageTitle(pathname)}</h1>
        <Breadcrumb />
      </div>
    </main>
  );
}

interface PageTitleMap {
  [key: string]: string;
}

function getPageTitle(pathname: string): string {
  const pageTitleMap: PageTitleMap = {
    "/": "Home",
    "/shop": "Shop",
    "/about": "About",
    "/contact": "Contact",
    // Add more mappings for other pages as needed
  };

  const pageTitle = pageTitleMap[pathname] || "Page Not Found";
  return pageTitle;
}
