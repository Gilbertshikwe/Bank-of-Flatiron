// TransactionForm.js
import React from 'react';

const TransactionForm = ({ newTransaction, setNewTransaction, addTransaction }) => {
  return (
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
  );
};

export default TransactionForm;
