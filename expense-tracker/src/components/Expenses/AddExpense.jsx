import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "../../assets/css/AddExpense.css";

const AddExpense = ({ onAddExpense }) => {
  const [toggleExpenseForm, setToggleExpenseForm] = useState(false);

  const clickHandler = () => {
    setToggleExpenseForm((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {toggleExpenseForm && <ExpenseForm onAddExpense={onAddExpense} />}
      <button type="button" className="new-expense__toggle" onClick={clickHandler}>
        {toggleExpenseForm ? "Cancel" : "Add New Expense"}
      </button>
    </div>
  );
};

export default AddExpense;
