// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer style={{
      padding: '30px 20px',
      backgroundColor: '#1e1e1e',
      color: 'white',
      textAlign: 'center',
      marginTop: '60px',
      borderTop: '3px solid var(--primary-color)'
    }}>
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.3em', color: 'var(--accent-color)' }}>
          C'est Atangui Market 🌿
        </h3>
        <p style={{ margin: '5px 0', fontSize: '0.95em', color: '#ddd' }}>
          Vos produits frais livrés directement à votre porte
        </p>
      </div>
      <div style={{ borderTop: '1px solid #444', paddingTop: '15px', marginTop: '15px' }}>
        <p style={{ margin: '0', fontSize: '0.9em' }}>
          &copy; 2026 C'est Atangui Market. Tous droits réservés.
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '0.85em', color: '#999' }}>
          Design & Development by Atangui Market
        </p>
      </div>
    </footer>
  );
};

export default Footer;