import React from "react";

function Menu({ menu, onAddToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Notre Menu</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {menu.map(item => (
          <div key={item.id} style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center"
          }}>
            <img src={item.image} alt={item.name} width="80" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price.toFixed(2)} €</p>
            {item.isVegetarian && <span>🥦 Végé</span>}
            {item.isNew && <span> 🆕</span>}
            <br />
            <button 
              onClick={() => onAddToCart(item)}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
