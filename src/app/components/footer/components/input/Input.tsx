import styles from "./Input.module.scss";

function Input() {
  return (
    <input
      className={styles.footerInput}
      type="text"
      placeholder="Enter your email address"
    />
  );
}

export default Input;
