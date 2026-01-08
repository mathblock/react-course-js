import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet /> {/* ← Les pages s'affichent ici */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;