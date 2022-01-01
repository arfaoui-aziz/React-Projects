import expenses from "./data/expenses";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/Expenses/AddExpense";

function App() {
  return (
    <div>
      <h2 className="u-centerText">Let's get started!</h2>
      <AddExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
