import { useState } from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import CartSummary from "../components/CartSummary"; // Import du panier
import menuData from "../data/menuData";
import "../App.css";

function HomePage() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false); // état toggle panier

  //  Ajouter au panier
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Supprimer un item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Modifier quantité
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  //  Vider panier
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      {/* Header avec toggle du panier */}
      

      <Hero />

      <Menu
        items={menuData}
        onAddToCart={addToCart}
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Affichage conditionnel du panier */}
      { (
        <CartSummary
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      )}

      
    </>
  );
}

export default HomePage;
