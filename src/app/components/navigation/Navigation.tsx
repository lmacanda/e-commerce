"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import Image from "next/image";
import styles from "./navigation.module.scss";
import Sidebar from "../sidebar/Sidebar";
import SideCart from "../sideCart/SideCart";

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSideCart, setShowSideCart] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleSideCart = () => {
    console.log("Toggling Side Cart");
    setShowSideCart(!showSideCart);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSidebar]);

  return (
    <>
      <button className={styles.hamburger} onClick={toggleSidebar}>
        <Image
          className={styles.hamburger_image}
          src={`/images/nav/icon-menu.svg`}
          alt="menu"
          width={20}
          height={20}
        />
        {}
      </button>

      {showSidebar ? (
        <>
          <Sidebar
            isOpen={showSidebar}
            closeSidebar={closeSidebar}
            toggleSidebar={toggleSidebar}
          />
          <div
            className={`${styles.blurBackground} ${
              showSidebar ? styles.blur : ""
            }`}
            onClick={closeSidebar}
          />
        </>
      ) : null}

      <nav className={styles.container}>
        <ul className="flex gap-10 pr-40">
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className={styles.navLink}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex gap-10">
          {/* To be substituted with icons */}
          <li>
            <Link href="/myAccount">
              {" "}
              <Image
                src={`/images/nav/ICON1.svg`}
                alt="Account"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/search"> </Link>
            <Image
              src={`/images/nav/ICON2.svg`}
              alt="Account"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Link href="/favorites"> </Link>
            <Image
              src={`/images/nav/ICON3.svg`}
              alt="Account"
              width={20}
              height={20}
            />
          </li>
          <li>
            <button onClick={toggleSideCart}>
              <Image
                src={`/images/nav/ICON4.svg`}
                alt="Account"
                width={20}
                height={20}
              />
              {}
            </button>
          </li>
        </ul>
      </nav>
      {showSideCart && <SideCart />}
    </>
  );
};

export default Navigation;
