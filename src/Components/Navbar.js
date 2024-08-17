import React, { useState } from 'react';

const Navbar = ({ categories, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);  // Call the search handler in App.js
  };

  return (
    <nav>
      <input
        type="text"
        placeholder="Search by category"
        value={searchTerm}
        onChange={handleSearch}
      />
    </nav>
  );
};

export default Navbar;
