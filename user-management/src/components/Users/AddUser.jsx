import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const initialUserData = { username: "", age: "" };
  const [userData, setUserData] = useState(initialUserData);

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
      userData.age.trim().length === 0 ||
      +userData.age < 6
    ) {
      console.log("ERROOOOOR!!!!!");
      return;
    }
    onAddUser(userData);
    setUserData(initialUserData);
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
    </Card>
  );
};

export default AddUser;
