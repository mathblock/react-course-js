import React from "react";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <h2 style={styles.heroTitle}>Bienvenue chez Foodtruck Paradise</h2>
      <p style={styles.heroSubtitle}>
        Découvrez nos plats de rue frais et délicieux, préparés avec amour !
      </p>
      <button style={styles.heroButton}>Voir le menu</button>
    </section>
  );
}

const styles = {
  hero: {
    marginTop: "100px", // pour éviter le header fixe
    height: "400px",
    backgroundColor: "#f2f2f2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px",
  },
  heroTitle: {
    fontSize: "36px",
    margin: "10px 0",
  },
  heroSubtitle: {
    fontSize: "18px",
    margin: "10px 0 20px 0",
  },
  heroButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
