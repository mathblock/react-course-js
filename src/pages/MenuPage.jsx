import React, { useState } from 'react';
import Menu from '../components/Menu';
import { menuData } from '../data/menuData';
import { useCart } from '../context/CartContext';

function MenuPage() {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Menu
        menuItems={menuData}
        activeFilter={activeFilter}
        searchTerm={searchTerm}
        onFilterChange={setActiveFilter}
        onSearchChange={setSearchTerm}
        onAddToCart={addToCart}
      />
    </div>
  );
}

export default MenuPage;

