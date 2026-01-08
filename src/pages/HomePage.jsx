import Hero from '../components/Hero';
import Menu from '../components/Menu';
import { useCart } from '../context/CartContext';
import '../App.css';

function HomePage() {
  const { addToCart } = useCart();

  return (
    <div className="App">
      <Hero />
      <Menu addToCart={addToCart} /> {/* Pass addToCart to Menu */}
    </div>
  );
}

export default HomePage;