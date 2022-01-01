import { useState } from "react";
import "../../assets/css/ExpenseForm.css";

const ExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: 0.01,
    date: new Date().toISOString().split("T")[0],
  });

  const changeHandler = (e) => {

    const input = e.target;

    setExpenseData((prevState) => {
      return {
        ...prevState,
        [input.name]: input.value,
      };
    });
    
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={changeHandler}
            value={expenseData.title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={changeHandler}
            value={expenseData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseData.date}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
