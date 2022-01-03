import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
