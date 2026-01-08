import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import './Header.css';

function Header() {
  const { cartCount } = useCart();
  const { isAuthenticated } = useAuth();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>🌮 Food Truck Paradise</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Accueil
          </Link>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/cart" className="cart-icon-container">
                <span className="cart-icon">🛒</span>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
              <Link to="/profile" className="nav-link">
                Mon Profil
              </Link>
            </>
          ) : (
            <>
              <Link to="/cart" className="cart-icon-container">
                <span className="cart-icon">🛒</span>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
              <Link to="/login" className="nav-link">
                Connexion
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
