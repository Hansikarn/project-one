import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate =new Date(2024,5,1).toISOString();
    const expenseTitle = "book";
    const expenseAmount=10;
    const expenseLocation='Bangalore';
    return(
    <div className='expense-item'>
        <div>{expenseDate}</div>
        <div>{expenseLocation}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </div>
    );
}
export default ExpenseItem;
