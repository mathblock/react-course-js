import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import { useCart } from '../context/CartContext'

const Header = ({ toggleTheme, theme }) => {
  const { cart, toggleCart } = useCart();
  const cartCount = cart.reduce((s, i) => s + (i.quantity || 0), 0);

  // Theme fallback if parent doesn't provide handlers
  const [localTheme, setLocalTheme] = useState('dark');
  const effectiveTheme = typeof theme !== 'undefined' ? theme : localTheme;
  const effectiveToggle = typeof toggleTheme === 'function'
    ? toggleTheme
    : () => {
        const newTheme = effectiveTheme === 'dark' ? 'light' : 'dark';
        setLocalTheme(newTheme);
        document.body.className = newTheme;
      };

  return (
    <header className="header">
      <div className="header-logo">
        <img src="/src/images/foodtruck logo.png" alt="Foodtruck Logo" />
        <div className="header-title">
          <Link to="/" className="logo" >
            <h1>🌮 Food Truck Paradise</h1>
          </Link>
          <p className="header-slogan">Les meilleurs plats de rue !</p>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <Link to="/" className="nav-link"> Accueil</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </ul>
        <div className="nav-actions">
          <button className="cart-button" onClick={toggleCart} aria-label="Ouvrir le panier">
            🛒
            <span className="cart-count">{cartCount}</span>
          </button>
          <button className="theme-toggle" onClick={effectiveToggle}>
            {effectiveTheme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header;


