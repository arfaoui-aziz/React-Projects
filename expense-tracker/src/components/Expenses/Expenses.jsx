import { useState } from "react";
import Card from "../Card";

import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "../../assets/css/Expenses.css";

const Expenses = (props) => {
  const expensesYears = [
    ...new Set(props.items.map((expense) => expense.date.getFullYear())),
  ];

  const [filteredYear, setFilteredYear] = useState("all");

  const filterByYear = (year) => {
    setFilteredYear(year);
  };

  let filteredExpenses = props.items;

  if (filteredYear !== "all") {
    filteredExpenses = props.items.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        years={expensesYears}
        selected={filteredYear}
        onFilter={filterByYear}
      />

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
