"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../sideCart/sideCart.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/app/redux/slices/cartSlice";
import MyCartButton from "../myCartButton/MyCartButton";
import { useRouter } from "next/navigation";

const SideCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isSideCartOpen, setIsSideCartOpen] = useState(true);

  const closeSideCart = () => {
    setIsSideCartOpen(!isSideCartOpen);
  };

  const goToCheckout = () => {
    router.push("/checkout");
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item));
  };

  const subtotal = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );

  return (
    <>
      <main
        className={`${styles.side_cart} ${isSideCartOpen ? "" : styles.closed}`}
      >
        <div className={styles.side_cart_header}>
          <h3 className={styles.side_cart_header_title}>Shopping Cart</h3>
          <button
            className={styles.side_cart_close_btn}
            onClick={closeSideCart}
          >
            <Image
              src={`/images/cart/group.svg`}
              alt="cart"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className={styles.side_cart_content}>
          {cartItems?.map((item) => (
            <div key={item.id} className={styles.side_cart_content_item}>
              <div className={styles.side_cart_content_item_left}>
                <div
                  style={{
                    backgroundImage: `url(/images/${item.image}.png)`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",

                    width: "105px",
                    height: "105px",
                    borderRadius: "10px",
                  }}
                ></div>
                <div className={styles.side_cart_content_item_left}>
                  <p className={styles.side_cart_content_item_left_name}>
                    {item.name}
                  </p>
                  <p>
                    {item.quantity} X{" "}
                    <span className={styles.side_cart_content_item_left_price}>
                      Rs.{item.price}
                    </span>
                  </p>
                </div>
              </div>
              <button
                className={styles.side_cart_content_delete_btn}
                onClick={() => handleRemoveFromCart(item)}
              >
                <Image
                  src={`/images/cart/delete.svg`}
                  alt="delete"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.side_cart_footer}>
          <div className={styles.side_cart_footer_total}>
            <p className={styles.side_cart_footer_total_text}>Subtotal</p>
            <p className={styles.side_cart_footer_total_price}>Rs.{subtotal}</p>
          </div>
          <div className={styles.side_cart_footer_buttons}>
            <MyCartButton />
            <button
              className={styles.side_cart_footer_buttons_checkout_btn}
              onClick={goToCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default SideCart;
