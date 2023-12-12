// SizeButtons.tsx
import React from "react";
import styles from "../sizeButtons/sizeButtons.module.scss";

interface SizeButtonsProps {
  sizes: string[];
  selectedSize: string | null;
  onClick: (size: string) => void;
}

const SizeButtons: React.FC<SizeButtonsProps> = ({
  sizes,
  selectedSize,
  onClick,
}) => {
  return (
    <div className={styles.size_buttons}>
      {sizes.map((size, index) => (
        <button
          key={index}
          className="size-button"
          onClick={() => onClick(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeButtons;
