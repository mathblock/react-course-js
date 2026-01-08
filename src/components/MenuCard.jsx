import React, { useState } from 'react';

const MenuCard = ({ item, onAddToCart }) => {
  // État local pour l'animation de feedback
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    // 1. Appelle la fonction passée par App.jsx
    onAddToCart(item); 
    
    // 2. Active le feedback visuel
    setAdded(true);
    
    // 3. Attend 500ms avant de revenir à l'état initial
    setTimeout(() => {
      setAdded(false);
    }, 500);
  };

  return (
    <div className="menu-card">
      <div className="card-image">
        <img src={item.image} alt={item.name} />
        <div className="badges">
          {item.isNew && <span className="badge badge-new">NOUVEAU</span>}
          {item.isVegetarian && <span className="badge badge-vege">VÉGÉ</span>}
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3>{item.name}</h3>
          <span className="price">{item.price.toFixed(2)}€</span>
        </div>
        
        <p className="description">{item.description}</p>
        
        <div className="card-footer">
          <span className="stock-status">● En stock</span>
          <span className="category-tag">{item.category}</span>
        </div>

        {/* BOUTON INTERACTIF (Points clés de l'évaluation) */}
        <button 
          onClick={handleAdd} 
          className={added ? "btn-added" : "btn-primary"}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '15px',
            backgroundColor: added ? '#4CAF50' : '#ff6b00',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          {added ? "✓ Ajouté !" : "Ajouter au Panier"}
        </button>
      </div>
    </div>
  );
};

export default MenuCard;