import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevState) => [
      ...prevState,
      { id: `u${users.length}`, ...user },
    ]);
    console.log(users);
  };

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
