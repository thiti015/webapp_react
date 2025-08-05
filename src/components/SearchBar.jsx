import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', marginBottom: '1rem'}}>
      <input
        type="text"
        placeholder="ค้นหาสถานที่..."
        value={query}
        onChange={handleChange}
        style={{flex: 1, padding: '0.5rem'}}
      />
      <button type="submit" style={{padding: '0.5rem 1rem', marginLeft: '0.5rem', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px'}}>ค้นหา</button>
    </form>
  );
};

export default SearchBar;
