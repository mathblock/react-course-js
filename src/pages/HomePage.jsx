import React, { useState } from 'react';
import Hero from '../components/Hero';
import APropos from './APropos';
import CartSummary from '../components/CartSummary';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar'; // N'oublie pas cet import
import { menuData } from '../data/menuData'; // Import des données pour le filtrage
import Menu from '../components/Menu';

import '../App.css';

function HomePage() {
  const [cart, setCart] = useState([]);
  
  // 1. NOUVEAUX ÉTATS POUR LES FILTRES ET LA RECHERCHE
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  // 2. LOGIQUE DE FILTRAGE COMBINÉE
  const filteredMenu = menuData.filter(item => {
    const matchesFilter = activeFilter === 'Tous' || item.category === activeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // FONCTIONS DU PANIER (Immutabilité respectée)
  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId, amount) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const clearCart = () => setCart([]);

  return (
    <div className="app-container">
      
      <main>
        <Hero />
        
        <div className="container">
          {/* 3. AFFICHAGE DES NOUVELLES FONCTIONNALITÉS */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          
          <APropos />
          
          {/* On passe "menuItems" filtré au lieu de menuData */}
          <Menu menuItems={filteredMenu} onAddToCart={addToCart} />
          
          <CartSummary 
            cart={cart} 
            onUpdate={updateQuantity} 
            onRemove={removeFromCart} 
            onClear={clearCart} 
          />
          
        </div>
      </main>

    </div>
  );
}

export default HomePage;