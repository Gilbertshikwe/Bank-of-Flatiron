// TransactionForm.js
import React from 'react';
import './index.css';

const TransactionForm = ({ newTransaction, setNewTransaction, addTransaction }) => {
  return (
    <div className="container">
      <form>
       <label>
          Date:
          <input
            type="date"
            value={newTransaction.date}
            onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={newTransaction.description}
            onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={newTransaction.category}
            onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={newTransaction.amount}
            onChange={(e) => setNewTransaction({ ...newTransaction, amount: parseFloat(e.target.value) })}
          />
        </label>
        <button type="button" onClick={addTransaction}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
