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
            }
    });
};
    return <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}></input>
        </div>

        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler}></input>
        </div>

        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler}></input>
        </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>

}
export default ExpenseForm;