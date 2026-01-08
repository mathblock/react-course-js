import { Link } from 'react-router-dom';

const Header = ({ cart = [] }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ backgroundColor: '#ff6b35', padding: '15px 20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🚚 Foodtruck Paradise</Link>
      </div>
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil</Link>
        <Link to="/menu" style={{ color: 'white', textDecoration: 'none' }}>Menu</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none', position: 'relative' }}>
          🛒
          {totalItems > 0 && (
            <span style={{ backgroundColor: 'white', color: '#ff6b35', borderRadius: '50%', padding: '2px 6px', marginLeft: '5px', fontWeight: 'bold' }}>
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;