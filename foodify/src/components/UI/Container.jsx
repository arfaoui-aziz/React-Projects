import styles from "./Container.module.css";

const Container = ({ children, className }) => {
  const classes = `${styles.container} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Container;
