import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container" style={{ textAlign: 'center', margin: '20px 0' }}>
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Rechercher un plat..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '12px', width: '300px', borderRadius: '25px', border: '1px solid #ddd', fontSize: '1rem' }}
      />
      {/* Bouton pour effacer visible si texte présent */}
      {searchTerm !== '' && (
        <button 
          onClick={() => setSearchTerm('')} 
          style={{ marginLeft: '-35px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#888' }}
        >
          ✖
        </button>
      )}
    </div>
  );
};

export default SearchBar;