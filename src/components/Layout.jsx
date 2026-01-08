import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function Layout() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <Header cart={cart} />
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;