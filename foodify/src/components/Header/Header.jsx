import Button from "../UI/Button";
import Container from "../UI/Container";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.header__nav}>
        <h1 className={styles.header__logo}>Foodify</h1>
        <Button type="button" className={styles.header__button}>
          Your Cart <span className={styles.header__itemsCount}>0</span>{" "}
        </Button>
      </Container>
    </header>
  );
};

export default Header;
