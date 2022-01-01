import { useState } from "react";
import expensesDB from "./data/expenses";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/Expenses/AddExpense";

function App() {
  const [expenses, setExpenses] = useState(expensesDB);

  const addExpenses = (newExpense) => {
    setExpenses((prevState) => {
      return [
        ...prevState,
        {
          id: `e${prevState.length + 1}`,
          ...newExpense,
          date: new Date(),
        },
      ];
    });

    console.log(expenses);
  };

  return (
    <div>
      <h2 className="u-centerText">Let's get started!</h2>
      <AddExpense onAddExpense={addExpenses} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
