import React from 'react';
import './MenuCard.css';

const MenuCard = ({ id, name, description, price, image, isVegetarian, isNew, addToCart }) => {
  const handleAdd = () => {
    console.debug('MenuCard: handleAdd', { id, name });
    addToCart({ id, name, description, price, image, isVegetarian, isNew });
  };

  return (
    <div className="menu-card">
      <img src={image} alt={name} />
      <div className="menu-card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="menu-card-price">{price.toFixed(2)} €</span>
        <div className="badges">
          {isVegetarian && <span className="badge badge-vege">Végétarien</span>}
          {isNew && <span className="badge badge-new">Nouveau</span>}
        </div>
  <button type="button" onClick={handleAdd}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default MenuCard;
