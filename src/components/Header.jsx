import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 style={{ margin: 0 }}>🌮 Food Truck Paradise</h1>
      </Link>

      {/* Navigation */}
      <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Accueil
        </Link>

        <Link to="/menu" style={{ color: "white", textDecoration: "none" }}>
          Menu
        </Link>

        {/* Panier */}
        <div style={{ position: "relative" }}>
          <span style={{ fontSize: "1.8rem" }}>🛒</span>

          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-10px",
                backgroundColor: "#ff4500",
                color: "white",
                borderRadius: "50%",
                padding: "2px 7px",
                fontSize: "0.75rem",
                fontWeight: "bold",
              }}
            >
              {cartCount}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
