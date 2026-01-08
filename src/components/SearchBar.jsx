import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm, count }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher un plat..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm !== "" && (
        <button onClick={() => setSearchTerm("")}>
          ✖
        </button>
      )}

      <p>{count} résultat(s)</p>
    </div>
  );
}

export default SearchBar;
