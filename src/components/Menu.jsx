import React, { useState } from 'react';
import menuData from '../data/menuData';
import MenuCard from './MenuCard';
import './Menu.css';

const Menu = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [filterNew, setFilterNew] = useState(false);

  const filteredMenu = menuData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVegetarian = !filterVegetarian || item.isVegetarian;
    const matchesNew = !filterNew || item.isNew;
    return matchesSearch && matchesVegetarian && matchesNew;
  });

  return (
    <section className="menu" id="menu">
      <h2>Notre Menu</h2>
      <div className="menu-filters">
        <input
          type="text"
          placeholder="Rechercher un plat..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={filterVegetarian}
            onChange={(e) => setFilterVegetarian(e.target.checked)}
          />
          Végétarien seulement
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterNew}
            onChange={(e) => setFilterNew(e.target.checked)}
          />
          Nouveautés seulement
        </label>
      </div>
      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <MenuCard
            key={item.id}
            {...item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
