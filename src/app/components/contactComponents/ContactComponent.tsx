import styles from "./ContactComponent.module.scss";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
import Top from "./components/top/Top";

function Contact() {
  return (
    <div className={styles.container}>
      <Top />
      <div className={styles.bottom}>
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default Contact;
