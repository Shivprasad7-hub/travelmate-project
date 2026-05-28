import { useState } from "react";
import toast from "react-hot-toast";

export default function Expenses(){

  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState("");

  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {

    if(title && amount){

      const newExpense = {
        title,
        amount: Number(amount)
      };

      setExpenses([
        ...expenses,
        newExpense
      ]);

      setTitle("");
      setAmount("");
      toast.success("Expense added successfully!");
    }
  };

  // TOTAL CALCULATION

  const totalExpense = expenses.reduce(
    (total, item) => total + item.amount,
    0
  );

  return(

    <div>

      <h1>Expense Tracker 💰</h1>

      <div className="form-card">

        <input
          type="text"
          placeholder="Expense Name"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
        />

        <button onClick={addExpense}>
          Add Expense
        </button>

      </div>

      <div
        className="card"
        style={{marginTop:"20px"}}
      >

        <h2>Total Expense</h2>

        <p>₹ {totalExpense}</p>

      </div>

      <div className="cards">

        {expenses.map((item,index)=>(

          <div className="card" key={index}>

            <h3>{item.title}</h3>

            <p>₹ {item.amount}</p>

          </div>

        ))}

      </div>

    </div>
  );
}