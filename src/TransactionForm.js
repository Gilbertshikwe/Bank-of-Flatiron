// TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new transaction data to the parent component
    addTransaction(formData);
    // Clear the form
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: 0,
    });
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields go here */}
      </form>
    </div>
  );
};

export default TransactionForm;
