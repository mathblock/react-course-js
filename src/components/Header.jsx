function Header({ cartCount, onNavigate, currentPage }) {
  return (
    <header className="header">
      {/* Logo + titre */}
      <div className="header-logo">
        <div>🌮 FoodTruck Paradise</div>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        <div className="nav-buttons">
          <button
            className={`nav-button ${currentPage === 'accueil' ? 'active' : ''}`}
            onClick={() => onNavigate('accueil')}
          >
            Accueil
          </button>
          <button
            className={`nav-button ${currentPage === 'menu' ? 'active' : ''}`}
            onClick={() => onNavigate('menu')}
          >
            Menu
          </button>
          <button
            className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => onNavigate('contact')}
          >
            Contact
          </button>
          <button
            className={`nav-button cart-button ${currentPage === 'panier' ? 'active' : ''}`}
            onClick={() => onNavigate('panier')}
            style={{ position: 'relative', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span style={{ fontSize: '1.5rem', position: 'relative' }}>
              🔔
              {cartCount > 0 && (
                <span 
                  className="cart-badge"
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    backgroundColor: '#ff4444',
                    color: 'white',
                    borderRadius: '12px',
                    minWidth: '20px',
                    height: '20px',
                    padding: cartCount > 9 ? '0 6px' : '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    border: '2px solid white',
                    boxSizing: 'border-box'
                  }}
                >
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </span>
            <span>Panier</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
