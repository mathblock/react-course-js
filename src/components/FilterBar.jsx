import "./FilterBar.css";

function FilterBar({ filter, setFilter }) {
  const categories = [
    "Tous",
    "entrees",
    "plats",
    "desserts",
    "boissons",
  ];

  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={filter === cat ? "active" : ""}
          onClick={() => setFilter(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
