import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CartProvider } from '../context/CartContext';

function Layout() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main>
          <Outlet /> {/* ← Les pages s'affichent ici */}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default Layout;