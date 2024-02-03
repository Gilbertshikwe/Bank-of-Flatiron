// App.js
import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: 0 });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions') // Assuming json-server is running on default port
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addTransaction = () => {
    if (newTransaction.description && newTransaction.amount !== 0) {
      setTransactions([...transactions, newTransaction]);
      setNewTransaction({ description: '', amount: 0 });
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Bank Transactions</h1>

      <TransactionForm
        newTransaction={newTransaction}
        setNewTransaction={setNewTransaction}
        addTransaction={addTransaction}
      />

      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={handleSearch}
      />

      <TransactionTable transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

export default App;





