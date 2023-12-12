import React from "react";
import styles from "./Search.module.scss";
import Image from "next/image";

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.search__input} />
      <button type="submit" className={styles.search__btn}>
        <Image
          src={`images/posts/search.svg`}
          alt="search"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default Search;
