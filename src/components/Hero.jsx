const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 style={{color: 'white'}}>Bienvenue chez Foodtruck Paradise</h1>
        <p><span style={{ fontWeight: 'bold', color: 'yellow', display: 'block', textAlign: 'center', fontSize:'20px' }}>Les meilleurs plats de rue !</span></p>
        <h2 style={{
          textAlign: 'center',
          marginTop: '1rem',
          fontSize: '2rem',
          color: 'red',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          🌮 Foodtruck Paradise : bien plus qu'un repas, une expérience !
        </h2>
        <p style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '1.1rem', lineHeight: '1.6', color: 'white' }}>
          Découvrez une carte généreuse où le savoir-faire camerounais rencontre la convivialité de la street food.
          Nous avons concocté pour vous une escale culinaire complète :<br/>
          🥗 Entrées savoureuses pour bien commencer<br/>
          🍛 Plats camerounais authentiques<br/>
          🍰 Desserts douceurs pour la note sucrée<br/>
          🥤 Boissons typiques pour accompagner le tout.
        </p>
      </div>
    </section>
  );
};
export default Hero;