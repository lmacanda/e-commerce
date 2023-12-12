// Sidebar.js

import React from "react";
import Link from "next/link";
import styles from "../sidebar/sidebar.module.scss";
import Image from "next/image";

type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }: SidebarProps) => {
  return (
    <>
      <nav className={`${styles.container} ${isOpen ? styles.active : ""}`}>
        <Image src={`/images/logo.svg`} alt="logo" width={80} height={80} />
        <ul className={styles.container_list}>
          <li>
            <Link className={styles.navLink} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
