import React, { useState } from 'react';
import menuData from '../data/MenuData'; // Assume chemin correct
import { motion } from 'framer-motion';

function Menu({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = ['Tous', ...new Set(menuData.map(item => item.category))];

  const filteredMenu = menuData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Tous' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="menu">
      <h2>Notre Menu 🍽️</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un plat..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && <button className="clear-btn" onClick={() => setSearchTerm('')}>×</button>}
      </div>
      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <p className="results-count">{filteredMenu.length} résultats trouvés</p>
      <div className="menu-grid">
        {filteredMenu.map(item => (
          <motion.div
            key={item.id}
            className="menu-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(76, 175, 80, 0.3)" }}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.price.toFixed(2)} €</span>
            <motion.button
              onClick={() => onAddToCart(item)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ajouter au panier
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Menu;