import expenses from "./data/expenses";
import Expenses from "./components/Expenses/Expenses";

function App() {
  return (
    <div>
      <h2 className="u-centerText">Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
