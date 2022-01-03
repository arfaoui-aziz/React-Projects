import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  let users = [{ id: "u1", name: "John", age: 28 }];

  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
