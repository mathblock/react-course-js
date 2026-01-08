import './Hero.css';

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <img src="/src/images/foodtruck logo.png" alt="Foodtruck Paradise Logo" className="hero-logo" /> {/* Integrated logo */}
        <h1 className="hero-title">Bienvenue chez Foodtruck Paradise</h1>
        <p className="hero-subtitle">Découvrez nos délicieux plats de rue préparés avec passion et fraîcheur !</p>
        <a href="#menu" className="hero-button">Voir le menu</a>
      </div>
    </section>
  );
};

export default Hero;
