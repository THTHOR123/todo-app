import React, { useState } from 'react';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('');
    const [expense, setExpense] = useState([]);

    const addExpense = () => {
        if (!input || !amount) return;

        const newExp = {
            id: expense.length + 1,
            title: input,
            amount: amount
        };

        setExpense([...expense, newExp]);
        setInput('');
        setAmount('');
    };

    const deleteExpense = (id) => {
        setExpense(expense.filter((e) => e.id !== id));
    };

    return (
        <div className="expense-tracker">
            <h1>Expense Tracker</h1>

            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="Expense" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Amount" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                />
                <button onClick={addExpense}>Add Expense</button>
            </div>

            <ul className="expense-list">
                {expense.map((e) => (
                    <li key={e.id} className="expense-item">
                        <span>{e.title}</span>
                        <span>{e.amount}</span>
                        <button onClick={() => deleteExpense(e.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseTracker;
