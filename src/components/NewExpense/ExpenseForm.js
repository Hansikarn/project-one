import React,{useState} from "react";
import  "./ExpenseForm.css";

const ExpenseForm = () => {
 const [userInput,setUserInput]=useState({
    enteredTitle:"",
    enteredAmount:"",
    enteredDate:"",
 });
    const titleChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredTitle:event.target.value,
            }
        });
};
 
    const amountChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return{
                 ...prevState,
                enteredAmount:event.target.value,
            }
    });
};
 
    const dateChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return{
            ...prevState,
        enteredDate:event.target.value,
            };
    });
};

    const formSubmitHandler =(event)=>{
    event.preventDefault();
    const expenseData = {
        title:userInput.enteredTitle,
        amount:userInput.enteredAmount,
        date:new Date(userInput.enteredDate),
    };
    console.log(expenseData);
    setUserInput({
    setEnteredTitle:"",
    setEnteredAmount:"",
    setEnteredDate:"",
});
    }
    return <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle}></input>
        </div>

        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler} value={userInput.enteredAmount}></input>
        </div>

        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler} value={userInput.enteredDate}></input>
        </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>

};

export default ExpenseForm;
