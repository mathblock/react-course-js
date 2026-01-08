import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartSummary from "./CartSummary";
import menuData from "../data/menuData";

function Layout() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [filter, setFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  // ➕ Ajouter au panier
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ➖ Supprimer un item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 🔄 Modifier quantité
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  // 🧹 Vider panier
  const clearCart = () => setCart([]);

  // Toggle affichage panier
  const toggleCart = () => setShowCart(!showCart);

  return (
    <div className="app">
      <Header cart={cart} onToggleCart={toggleCart} />

      <main>
        <Outlet
          context={{
            menuData,
            addToCart,
            filter,
            setFilter,
            searchTerm,
            setSearchTerm,
          }}
        />
      </main>

      {/* Affichage du panier */}
      {showCart && (
        <CartSummary
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      )}

      <Footer />
    </div>
  );
}

export default Layout;
