import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from './Footer';

function Layout() {
  const [cart, setCart] = useState([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <motion.nav
        className="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1>C'est Atangui Market 🌿</h1>
        <ul>
          <li><Link to="/">Accueil 🏠</Link></li>
          <li><Link to="/menu">Menu 🍽️</Link></li>
          <li><Link to="/cart">Panier 🛒 ({cart.length})</Link></li>
        </ul>
      </motion.nav>
      <div style={{ flex: 1 }}>
        <Outlet context={{ cart, setCart }} />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;