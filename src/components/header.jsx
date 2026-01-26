import React from 'react';
import './Header.css';
import { useCart } from '../context/CartContext';
import logo from '../assets/foodtruck-logo.png';

const Header = ({ toggleTheme, theme }) => {
  const { cart = [], toggleCart = () => {} } = useCart();
  const cartCount = Array.isArray(cart) ? cart.reduce((s, i) => s + (i.quantity || 0), 0) : 0;

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Foodtruck Logo" />
        <div className="header-title">
          <a href="#accueil" className="logo">
            <h1>🌮 Food Truck Paradise</h1>
          </a>
          <p className="header-slogan">Les meilleurs plats de rue !</p>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#accueil" className="nav-link">Accueil</a></li>
          <li><a href="#menu" className="nav-link">Menu</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <button className="cart-button" onClick={toggleCart} aria-label="Ouvrir le panier">
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Basculer le thème"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

