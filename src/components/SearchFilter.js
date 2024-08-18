import React, { useState } from 'react';
import './SearchFilter.css'; 

const SearchFilter = ({ categories, onSearch, onSort, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    onSort(value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onFilter(value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button onClick={handleSearchClick} className="search-button">Search</button>
      <select onChange={handleSortChange} className="sort-select">
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
      <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;