import React from 'react';
import MenuCard from "./MenuCard";

// On récupère "menuItems" (la liste filtrée) et "onAddToCart" (la fonction)
const Menu = ({ menuItems, onAddToCart }) => {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">Notre Carte</h2>
        
        {/* Affiche le nombre de résultats réels après filtrage */}
        <p className="menu-count">
          {menuItems.length > 0 
            ? `${menuItems.length} plats disponibles` 
            : "Aucun plat ne correspond à votre recherche !"}
        </p>

        <div className="menu-grid">
          {/* On boucle sur menuItems au lieu de menuData */}
          {menuItems.map((plat) => (
            <MenuCard 
              key={plat.id} 
              item={plat} 
              onAddToCart={onAddToCart} // Transmission indispensable vers MenuCard
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;