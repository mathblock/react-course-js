// src/components/SearchBar.jsx
const SearchBar = ({ searchTerm, onSearchChange, resultCount }) => {
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Rechercher un plat..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm !== '' && (
          <button className="clear-btn" onClick={() => onSearchChange('')}>✕</button>
        )}
      </div>
      <div className="results-count">{resultCount} résultats trouvés</div>
    </>
  );
};

export default SearchBar;