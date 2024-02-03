// TransactionForm.js
import React from 'react';
import './index.css';

const TransactionForm = ({ newTransaction, setNewTransaction, addTransaction }) => {
  return (
    <div className="container">
      <form>
        <label>
          Description:
          <input
            type="text"
            value={newTransaction.description}
            onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
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
