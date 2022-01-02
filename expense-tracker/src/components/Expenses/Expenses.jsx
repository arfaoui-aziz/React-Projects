import Card from "../Card";

import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "../../assets/css/Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesFilter expenses={props.items} />

      <ExpensesChart expenses={props.items} />

      <ExpensesList expenses={props.items} />
    </Card>
  );
};

export default Expenses;
