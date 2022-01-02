import "../../assets/css/AddExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = ({ onAddExpense }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={onAddExpense} />
    </div>
  );
};

export default AddExpense;
