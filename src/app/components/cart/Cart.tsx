import Hero from "@/app/components/hero/Hero";
import styles from "./Cart.module.scss";
import Heading from "./components/heading/Heading";

function Cart() {
  return (
    <div className={styles.container}>
      <Hero />
      <Heading />
    </div>
  );
}

export default Cart;
