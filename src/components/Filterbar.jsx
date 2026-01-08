// src/components/Filterbar.jsx
const FilterBar = ({ activeFilter, onFilterChange }) => {
  const categories = ['Tous', 'Entrées', 'Plats', 'Desserts', 'Boissons'];

  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;