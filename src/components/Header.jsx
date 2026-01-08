import { Link } from "react-router-dom";
import "./Header.css";

function Header({ cart, onToggleCart }) {
 

  return (
    <header className="header">
      <div className="container">
        
        {/* Logo / Titre */}
        <Link to="/" className="logo">
          <h1>Davidson Market</h1>
        </Link>

        <p className="slogan">Le goût du bonheur, bien sûr</p>

        {/* Navigation */}
        <nav>
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Panier */}
        <div
          className="cart-icon"
          onClick={onToggleCart}
          style={{ cursor: "pointer", position: "relative" }}
        >
          Panier
          
        </div>

      </div>
    </header>
  );
}

export default Header;

