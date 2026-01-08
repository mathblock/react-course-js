import React from "react";

function Header({ cart, onCartClick }) {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#111",
      color: "#fff"
    }}>
      <h1>🌮 Food Truck Paradise</h1>

      <button 
        onClick={onCartClick}
        style={{
          backgroundColor: "#444",
          color: "#fff",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Panier ({cart.reduce((acc, item) => acc + item.quantity, 0)})
      </button>
    </header>
  );
}

export default Header;
