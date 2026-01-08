import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, resultCount }) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Rechercher un plat..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button
            className="clear-btn"
            onClick={() => onSearchChange('')}
            aria-label="Effacer la recherche"
          >
            ✕
          </button>
        )}
      </div>
      {searchTerm && (
        <p className="search-results-count">
          {resultCount} résultat{resultCount !== 1 ? 's' : ''} trouvé{resultCount !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
};

export default SearchBar;

