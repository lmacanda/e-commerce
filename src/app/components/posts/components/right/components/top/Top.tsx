import Categories from "../categories/Categories";
import Search from "../search/Search";
import styles from "./Top.module.scss";
function Top() {
  return (
    <div className={styles.box}>
      <Search />
      <Categories />
    </div>
  );
}

export default Top;
