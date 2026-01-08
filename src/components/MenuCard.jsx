import { useState } from "react";
import "./MenuCard.css";

function MenuCard({ item, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAddToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 500);
  };

  return (
    <div className="card">
      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p><strong>{item.price.toFixed(2)} €</strong></p>

      <div>
        <span className="badge badge-stock">En stock</span>
        {item.isVegetarian && (
          <span className="badge badge-vege">Végé</span>
        )}
        {item.isNew && (
          <span className="badge badge-new">Nouveau</span>
        )}
      </div>

      <button onClick={handleClick}>
        {added ? "Ajouté ✔" : "Ajouter au panier"}
      </button>
    </div>
  );
}

export default MenuCard;
