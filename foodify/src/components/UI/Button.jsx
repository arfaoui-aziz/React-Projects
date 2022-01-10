import styles from "./Button.module.css";

const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
