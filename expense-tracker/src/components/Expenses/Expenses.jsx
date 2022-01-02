import Card from "../Card";
import ExpenseItem from "./ExpenseItem";
import "../../assets/css/Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesChart expenses={props.items} />

      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
