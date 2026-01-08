
function Hero() {
  return (
    <section style={{ 
      textAlign: 'center', 
      padding: '50px 20px', 
      backgroundColor: '#f4f4f4',
      borderBottom: '2px solid #ddd' 
    }}>
      <h1>Bienvenue chez Foodtruck Paradise</h1>
      <p>Découvrez les meilleures saveurs de la rue cuisinées avec amour !</p>
      <button style={{ 
        padding: '10px 20px', 
        fontSize: '16px', 
        backgroundColor: '#ff4500', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Voir le menu
      </button>
    </section>
  );
}

export default Hero;