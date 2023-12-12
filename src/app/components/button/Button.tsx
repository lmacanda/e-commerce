import StyledButton from "./Button.styled";
import styles from "./Button.module.scss";
interface IButton {
  fontSize: string;
  children: {};
}

const Button: React.FC<IButton> = ({ fontSize, children }) => {
  return (
    <div className={styles.center}>
      <StyledButton fontSize={fontSize}>{children}</StyledButton>
      <hr className={styles.line} />
    </div>
  );
};

export default Button;
