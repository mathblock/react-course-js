import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-area">
          <span className="logo-icon"></span>
          <div>
            <h1>Foodtruck Paradise</h1>
            <p className="slogan">L'art du bien manger !</p>
          </div>
        </div>
        
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/A-propos">A propos</a></li>
            
            {/* 2. Badge Panier (Critère d'évaluation) */}
            <li className="cart-container">
              <a href="#cart" className="cart-link">
                <span className="cart-icon">🛒</span>
                {/* Affiche le badge seulement si cartCount > 0 */}
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;