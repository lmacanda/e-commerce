// ColorButtons.tsx
import React from "react";
import styles from "./colorButtons.module.scss";

interface ColorButtonsProps {
  colors: string[];
  selectedColor: string | null;
  onClick: (color: string) => void;
}

const ColorButtons: React.FC<ColorButtonsProps> = ({
  colors,
  selectedColor,
  onClick,
}) => {
  return (
    <div className={styles.color_buttons}>
      {colors.map((color, index) => (
        <button
          key={index}
          className={`${styles.color_buttons_btn} ${
            selectedColor === color ? styles.selected : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorButtons;
