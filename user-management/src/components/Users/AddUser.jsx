import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const initialUserData = { username: "", age: "" };
  const initialError = { isError: false, title: "", message: "" };

  const [userData, setUserData] = useState(initialUserData);
  const [error, setError] = useState(initialError);

  const changeHandler = (e) => {
    const input = e.target;

    setUserData((prevState) => {
      return {
        ...prevState,
        [input.name]: input.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      userData.username.trim().length === 0 ||
      userData.age.trim().length === 0
    ) {
      setError({
        isError: true,
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+userData.age < 6) {
      setError({
        isError: true,
        title: "Invalid Age",
        message:
          "Please enter a valid age | your age must be greater than 6 Years",
      });
      return;
    }
    onAddUser(userData);
    setError("");
    setUserData(initialUserData);
  };

  const closeModal = () => {
    setError(initialError);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={changeHandler}
          type="text"
          name="username"
          value={userData.username}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          name="age"
          onChange={changeHandler}
          value={userData.age}
        />
        <Button> Add User </Button>
      </form>

      {error.isError && <ErrorModal error={error} onConfirm={closeModal} />}
    </Card>
  );
};

export default AddUser;
