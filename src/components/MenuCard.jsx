import React from 'react';
import './MenuCard.css';

const fallback = 'https://via.placeholder.com/400x220?text=Image+not+available';

const MenuCard = ({ id, name, description, price, image, isVegetarian, isNew, addToCart }) => {
  const handleAdd = () => {
    addToCart({ id, name, description, price, image, isVegetarian, isNew });
  };

  const handleImgError = (e) => {
    if (e?.target) e.target.src = fallback;
  };

  return (
    <div className="menu-card">
      <img src={image || fallback} alt={name} onError={handleImgError} />
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
