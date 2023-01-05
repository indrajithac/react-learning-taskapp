import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  let initialObject = {
    title: "",
    amount: "",
    date: "",
  };
  const [enteredValues, setEnteredValues] = useState(initialObject);
  console.log("enteredValues", enteredValues);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setEnteredValues(initialObject);
  };

  return (
    <div className="new-expense">
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredValues.title}
              onChange={(e) =>
                setEnteredValues((prevState) => {
                  return { ...prevState, title: e.target.value };
                })
              }
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredValues.amount}
              onChange={(e) =>
                setEnteredValues((prevState) => {
                  return { ...prevState, amount: e.target.value };
                })
              }
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredValues.date}
              onChange={(e) =>
                setEnteredValues((prevState) => {
                  return { ...prevState, date: e.target.value };
                })
              }
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
