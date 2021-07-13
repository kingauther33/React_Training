import React, {useState} from 'react';

// import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;