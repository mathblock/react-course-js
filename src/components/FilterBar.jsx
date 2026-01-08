import React from 'react';
import './FilterBar.css';

const FilterBar = ({ activeFilter, onFilterChange }) => {
  const categories = ['Tous', 'Entrées', 'Plats', 'Desserts', 'Boissons'];

  return (
    <div className="filter-bar">
      {categories.map(category => (
        <button
          key={category}
          className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

