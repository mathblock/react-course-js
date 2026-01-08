import React from 'react';
import MenuCard from './MenuCard';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';
import './Menu.css';

const Menu = ({ 
  menuItems, 
  activeFilter, 
  searchTerm, 
  onFilterChange, 
  onSearchChange, 
  onAddToCart 
}) => {
  const filteredItems = menuItems.filter(item => {
    const matchesFilter = activeFilter === 'Tous' || item.category === activeFilter;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="menu-section">
      <div className="menu-container">
        <FilterBar activeFilter={activeFilter} onFilterChange={onFilterChange} />
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={onSearchChange}
          resultCount={filteredItems.length}
        />
        <div className="menu-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <MenuCard 
                key={item.id} 
                item={item} 
                onAddToCart={onAddToCart}
              />
            ))
          ) : (
            <div className="no-results">
              <p>Aucun plat trouvé</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;

