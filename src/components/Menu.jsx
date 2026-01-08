// src/components/Menu.jsx
// Modified from Day 1 for filters and search
import { useState } from 'react';
import menuData from '../data/MenuData';
import MenuCard from './MenuCard';
import FilterBar from './Filterbar';
import SearchBar from './SearchBar';

const Menu = ({ onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMenu = menuData.filter((item) => {
    const matchesFilter = activeFilter === 'Tous' || item.category === activeFilter;
    const matchesSearch = searchTerm === '' ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="menu-section">
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} resultCount={filteredMenu.length} />
      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default Menu;