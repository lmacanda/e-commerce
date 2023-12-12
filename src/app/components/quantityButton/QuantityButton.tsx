import React from "react";
import { useDispatch } from "react-redux";
import { incrementQ, decrementQ } from "../../redux/slices/cartSlice";
import styles from "../quantityButton/quantityButton.module.scss";

interface QuantityButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    description: string;
    size?: string[];
    colors?: string[];
    SKU: string;
    category: string;
    tags?: string[];
    reviews: {
      id: number;
      name: string;
      comment: string;
      rating: number;
      image: string;
      date: string;
    }[];
  };
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>; // Add this line
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  product,
  quantity,
  setQuantity,
}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQ(product));
    setQuantity((prevQuantity) => prevQuantity + 1); // Update local state
  };

  const handleDecrement = () => {
    dispatch(decrementQ(product));
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)); // Ensure quantity doesn't go below 0
  };

  return (
    <div className={styles.quantity_button}>
      <button
        className={styles.quantity_button_btn_decrement}
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className={styles.quantity_button_btn_increment}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
