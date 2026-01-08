import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section" style={{ padding: '50px 10%' }}>
      <h2 style={{ textAlign: 'center' }}>Contactez-nous</h2>
      
      {/* case blanche sans photo */}
      <div className="menu-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="card-info">
          <h3>Nos coordonnées</h3>
          <p>📍 123 Rue du Burger, Paradise City</p>
          <p>📞 01 23 45 67 89</p>
          <p>📧 hello@foodtruck-paradise.fr</p>
          
          <hr style={{ margin: '20px 0', border: '0.5px solid #eee' }} />
          
          <h3>Envoyez-nous un message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input type="text" placeholder="Votre nom" style={inputStyle} />
            <textarea placeholder="Votre message" style={{...inputStyle, height: '100px'}}></textarea>
            <button className="btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const inputStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  outline: 'none'
};

export default Contact;