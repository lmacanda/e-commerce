import styles from "./Right.module.scss";

function Right() {
  return (
    <div className={styles.container}>
      <div className={styles.text}></div>
      <div className={styles.form}>
        <form className={styles.userInfo} action="post">
          <label htmlFor="username" className={styles.label}>
            Your name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="username"
            className={styles.input}
          />
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            name="email"
            className={styles.input}
          />
          <label htmlFor="email" className={styles.label}>
            Subject
          </label>
          <input
            type="text"
            placeholder="This is optional"
            name="subject"
            className={styles.input}
          />
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="4"
            placeholder="Hi! i'd like to ask about."
            className={styles.textArea}
          ></textarea>
          <input className={styles.button} type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default Right;
