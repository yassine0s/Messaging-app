import './ExpenseItem.css'

function ExpenseItem() {
const expenseDate = new Date(2021,10,9);
const expenseTitle = 'Car insurance';
const expenseAmount = 294.67;
    return (
    <div className ="expense-item">
      <div>{expenseDate.toISOString}</div>
      <div className ="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className ="expense-item__price">$200.3</div>
    </div>
  );
}

export default ExpenseItem;
