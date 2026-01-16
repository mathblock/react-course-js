import { useState, useEffect } from 'react';

const MenuCard = ({ item, onAddToCart }) => {
  const [justAdded, setJustAdded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAdd = () => {
    if (onAddToCart) onAddToCart(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 500);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, boxShadow 0.2s',
        cursor: 'pointer',
        transform: `translateY(${scrollY * 0.1}px)`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `translateY(${scrollY * 0.1 - 5}px)`;
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `translateY(${scrollY * 0.1}px)`;
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      }}
    >
      {!imageError ? (
        <img
          src={item.image}
          alt={item.name}
          onError={handleImageError}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '1rem'
          }}
        >
          🍹 Image non disponible
        </div>
      )}

      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.name}</h3>
        <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>
          {item.description}
        </p>
        <strong style={{ fontSize: '1.2rem', color: '#e67e22' }}>
          {item.price.toFixed(2)} €
        </strong>

        <div style={{ margin: '0.5rem 0' }}>
          {item.isVegetarian && (
            <span style={{ marginRight: '8px', fontSize: '0.8rem' }}>🌱 Végétarien</span>
          )}
          {item.isNew && (
            <span style={{ marginLeft: '5px', fontSize: '0.8rem', fontWeight: 'bold', color: '#e67e22' }}>
              🆕 Nouveau
            </span>
          )}
        </div>

        {onAddToCart && (
          <button
            onClick={handleAdd}
            style={{
              marginTop: '12px',
              padding: '10px 16px',
              backgroundColor: justAdded ? '#4CAF50' : '#e67e22',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
              fontWeight: 'bold',
              transition: 'transform 0.12s, background-color 0.12s',
              transform: justAdded ? 'scale(0.97)' : 'scale(1)'
            }}
          >
            {justAdded ? 'Ajouté' : 'Ajouter au panier'}
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;