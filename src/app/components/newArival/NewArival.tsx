import Image from "next/image";
import styles from "./NewArival.module.scss";

function NewArival() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={`/images/home/new_arival.png`}
          alt="new arival"
          width={800}
          height={800}
        />
      </div>
      <div className={styles.text}>
        <p className={styles.textRegular}>New Arival</p>
        <h3 className={styles.textBold}>Asgaard Sofa</h3>
        <button className={styles.button}>Order Now</button>
      </div>
    </div>
  );
}

export default NewArival;
