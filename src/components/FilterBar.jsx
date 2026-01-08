const FilterBar = ({ activeFilter, setActiveFilter }) => {
  const categories = ['Tous', 'Entrées', 'Plats', 'Desserts', 'Boissons'];
  
  return (
    <div className="filter-bar">
      {categories.map(cat => (
        <button 
          key={cat}
          className={activeFilter === cat ? 'active' : ''}
          onClick={() => setActiveFilter(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
export default FilterBar;