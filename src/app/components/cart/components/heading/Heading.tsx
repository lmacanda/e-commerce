"use client";

import styles from "./Heading.module.scss";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { removeFromCart } from "@/app/redux/slices/cartSlice";

function Heading() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItems[0]));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.cart__heading}>
        <li className={styles.cart__heading__item}>Product</li>
        <li className={styles.cart__heading__item}>Price</li>
        <li className={styles.cart__heading__item}>Quantity</li>
        <li className={styles.cart__heading__item}>Color</li>
        <li className={styles.cart__heading__item}>Size</li>
        <li className={styles.cart__heading__item}>Subtotal</li>

        <li></li>
      </ul>

      {cartItems.map((item) => (
        <ul key={item.id} className={styles.cart__main}>
          <li className={`${styles.cart__heading__item} ${styles.image}`}>
            <Image
              className={styles.image}
              src={`/images/${item.image}.png`}
              alt={item.name}
              width={100}
              height={100}
            />
          </li>
          <li className={styles.cart__heading__item}>Rs.{item.price}</li>
          <li className={styles.cart__heading__item}>
            <input type="text" value={item.quantity} className={styles.input} />
          </li>
          <li className={styles.cart__heading__item}>{item.color}</li>

          <li className={styles.cart__heading__item}>{item.size}</li>
          <li className={styles.cart__heading__item}>
            Rs.{item.quantity * item.price}
          </li>
          <li className={styles.cart__heading__item}>
            <button
              className={styles.deleteButton}
              onClick={handleRemoveFromCart}
            >
              <Image
                className={styles.image}
                src={`/images/cart/delete.svg`}
                alt="delete"
                width={20}
                height={20}
              />
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Heading;
