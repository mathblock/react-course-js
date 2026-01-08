import React, { useState } from "react";

const MenuCard = ({ item, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 500);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={item.image} alt={item.title} width="100%" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.price}€</p>
      <button onClick={handleAdd}>{added ? "Ajouté !" : "Ajouter au panier"}</button>
    </div>
  );
};

export default MenuCard;
