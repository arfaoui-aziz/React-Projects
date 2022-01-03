import Card from "../UI/Card";
import UserCard from "./UserCard";
import styles from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
