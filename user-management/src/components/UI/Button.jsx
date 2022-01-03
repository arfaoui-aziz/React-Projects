import styles from "./Button.module.css";

const Button = ({ type, children, onClick }) => {
  return (
    <button className={styles.button} type={type || "submit"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
