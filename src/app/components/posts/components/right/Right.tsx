import styles from "./Right.module.scss";
import Bottom from "./components/bottom/Bottom";
import Top from "./components/top/Top";

function Right() {
  return (
    <div className={styles.container}>
      <Top />
      <Bottom />
    </div>
  );
}

export default Right;
