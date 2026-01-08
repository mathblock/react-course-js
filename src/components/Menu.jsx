import MenuCard from "./MenuCard";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";

function Menu({
  items,
  onAddToCart,
  filter,
  setFilter,
  searchTerm,
  setSearchTerm, 
}) {
  const filteredItems = items
    .filter((item) =>
      filter === "Tous" ? true : item.category === filter
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

  return (
    <section>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} 
        count={filteredItems.length}
      />

      <FilterBar filter={filter} setFilter={setFilter} />

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
