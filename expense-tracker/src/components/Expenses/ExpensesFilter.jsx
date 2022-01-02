import { useState } from "react";
import "../../assets/css/ExpensesFilter.css";

const ExpensesFilter = ({ expenses }) => {
  const [filteredExpenses, setfilteredExpenses] = useState(expenses);

  const expensesYears = [
    ...new Set(expenses.map((expense) => expense.date.getFullYear())),
  ];

  const changeHandler = (e) => {
    const year = e.target.value;
    setfilteredExpenses((prevState) => {
      return prevState.filter((expense) => expense.date.getFullYear() == year);
    });
    console.log(filteredExpenses);
  };

  return (
    <div>
      <p>filter Expenses</p>
      <form>
        <label htmlFor="year-select">Select a year</label>
        <select onChange={changeHandler} name="years">
          {expensesYears.map((year) => (
            <option key={year} value={year} name={year}>
              {year}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default ExpensesFilter;
