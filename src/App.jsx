import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('foodtruck-cart');
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      return parsed.map(item => ({
        ...item,
        quantity: Number(item.quantity) || 1
      }));
    }
    return [];
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem('foodtruck-page');
    return savedPage || 'accueil';
  });
  const [notification, setNotification] = useState('');

  useEffect(() => {
    localStorage.setItem('foodtruck-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('foodtruck-page', currentPage);
  }, [currentPage]);

  
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {

        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
    setNotification(`${item.name} ajouté avec succès`);
    setTimeout(() => setNotification(''), 2000);
  };

 
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  
  const updateQuantity = (itemId, quantity) => {
    const numQuantity = parseInt(quantity, 10);
    if (isNaN(numQuantity) || numQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) => 
      prevCart.map((item) => 
        String(item.id) === String(itemId) 
          ? { ...item, quantity: numQuantity }
          : item
      )
    );
  };

  
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Header cartCount={cart.length} onNavigate={setCurrentPage} currentPage={currentPage} />
      {notification && (
        <div style={{
          position: 'fixed',
          top: '120px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '5px',
          fontWeight: 'bold',
          zIndex: 1000,
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
          {notification}
        </div>
      )}

      <main style={{ maxWidth: '1400px', margin: '0 auto', minHeight: '60vh', backgroundColor: '#ffffff' }}>
        {currentPage === 'accueil' && (
          <div style={{
            backgroundImage: 'url(/images/1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            minHeight: '100vh'
          }}>
            <Hero />
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <button
                onClick={() => setCurrentPage('menu')}
                style={{
                  backgroundColor: '#e67e22',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '5px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d46a1f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e67e22'}
              >
                📋 Voir le Menu
              </button>
            </div>
          </div>
        )}

        {currentPage === 'menu' && (
          <div style={{ marginBottom: 0, paddingBottom: 0 }}>
            <Menu onAddToCart={addToCart} />
          </div>
        )}

        {currentPage === 'panier' && (
          <Cart
            cart={cart}
            onRemove={removeFromCart}
            onUpdate={updateQuantity}
            onClear={clearCart}
          />
        )}

        {currentPage === 'contact' && (
          <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#ffffff' }}>
            <h1 style={{ color: '#e67e22', marginBottom: '2rem' }}>📞 Nous Contacter</h1>
            <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', maxWidth: '600px', margin: '0 auto', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#333' }}>
                <strong style={{ color: '#e67e22' }}>📍 Adresse:</strong><br/>
                <span style={{ color: '#555' }}>Place du Marché, Paris</span>
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#333' }}>
                <strong style={{ color: '#e67e22' }}>📞 Téléphone:</strong><br/>
                <span style={{ color: '#555' }}>+33 (0)1 23 45 67 89</span>
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#333' }}>
                <strong style={{ color: '#e67e22' }}>✉️ Email:</strong><br/>
                <span style={{ color: '#555' }}>contact@foodtruckparadise.fr</span>
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#333' }}>
                <strong style={{ color: '#e67e22' }}>🕐 Horaires:</strong><br/>
                <span style={{ color: '#555' }}>Lun-Sam 11h-22h</span>
              </p>
              <div style={{ marginTop: '2rem' }}>
                <p style={{ color: '#666', marginBottom: '1rem' }}>Suivez-nous sur les réseaux sociaux</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                  <a href="#" style={{ textDecoration: 'none', color: '#e67e22', fontSize: '1.5rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>📘</a>
                  <a href="#" style={{ textDecoration: 'none', color: '#e67e22', fontSize: '1.5rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>📸</a>
                  <a href="#" style={{ textDecoration: 'none', color: '#e67e22', fontSize: '1.5rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>🐦</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer currentPage={currentPage} />
    </div>
  );
}

export default App;
