import styles from "./Top.module.scss";

function Top() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Get In Touch With Us</h3>
      <p className={styles.subtitle}>
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us
        <br />
        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>
    </div>
  );
}

export default Top;
