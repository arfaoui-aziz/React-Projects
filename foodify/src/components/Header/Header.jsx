import Button from "../UI/Button";
import Container from "../UI/Container";
import styles from "./Header.module.css";
import MainImg from "../../assets/img/banner2.jpg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Container className={styles.header__nav}>
          <h1 className={styles.header__logo}>Foodify</h1>
          <Button type="button" className={styles.header__button}>
            Your Cart <span className={styles.header__itemsCount}>0</span>{" "}
          </Button>
        </Container>
      </header>
      <div className={styles["main-image"]}>
        <img src={MainImg} alt="Foodify Main " />
      </div>
    </>
  );
};

export default Header;
