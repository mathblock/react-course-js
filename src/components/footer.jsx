import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div>
        <p>© 2025 Foodtruck Paradise</p>
        <p>Horaires : Lun-Sam 11h-22h</p>
        <p>Adresse : Place du Marché, Paris</p>
      </div>
      <div style={styles.socials}>
        <span style={styles.icon}>📘</span>
        <span style={styles.icon}>🐦</span>
        <span style={styles.icon}>📸</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#111",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "10px",
  },
  socials: {
    display: "flex",
    gap: "15px",
    fontSize: "24px",
  },
  icon: {
    cursor: "pointer",
  },
};
