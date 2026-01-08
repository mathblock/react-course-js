import React from 'react';

const APropos = () => {
  return (
    <section className="about-section" style={{ padding: '50px 10%', backgroundColor: '#fdfcfb' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Notre Histoire</h2>
      
      {/* Utilisation de votre case blanche préférée */}
      <div className="menu-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '30px' }}>
        <div className="card-info" style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#ff6b00', fontSize: '1.8rem' }}>La Passion du Goût</h3>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#444' }}>
            Né de l'envie de bousculer les codes de la street food, <strong>Foodtruck Paradise</strong> 
            propose une expérience gastronomique nomade. Nous sélectionnons nos produits chez des 
            producteurs locaux pour vous offrir des burgers et des tacos d'exception.
          </p>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#444' }}>
            Chaque recette est élaborée avec passion dans notre camion bleu iconique, 
            pour que chaque bouchée soit un véritable voyage culinaire.
          </p>
          
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;