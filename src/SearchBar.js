// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Search Transactions</h2>
      <input
        type="text"
        placeholder="Search by description"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
