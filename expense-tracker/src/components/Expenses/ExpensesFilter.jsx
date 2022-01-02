import "../../assets/css/ExpensesFilter.css";

const ExpensesFilter = ({ years, onFilter, selected }) => {
  const changeHandler = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={changeHandler} name="years">
          <option value="all">All Years</option>
          {years.map((year) => (
            <option key={year} value={year} name={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
