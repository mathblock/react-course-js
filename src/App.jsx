import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCart } from './context/CartContext';

function App() {
  const [theme, setTheme] = useState('dark');
  const { addToCart } = useCart();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App" id="accueil">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Menu addToCart={addToCart} /> {/* Pass addToCart to Menu */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;