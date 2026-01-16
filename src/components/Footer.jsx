const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#e67e22', 
      color: 'white', 
      padding: '2rem', 
      textAlign: 'center',
      width: '100%',
      marginTop: 'auto',
      height: '230px',
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transform: 'translateY(100%)' // Déplace le footer vers le bas
    }}>
      <p style={{ margin: '0.5rem 0' }}>© 2025 Foodtruck Paradise</p>
      <p style={{ margin: '0.5rem 0' }}>🕐 Horaires : Lun-Sam 11h-22h</p>
      <p style={{ margin: '0.5rem 0' }}>📍 Adresse : Place du Marché, Paris</p>

      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '2rem' }}>
        <p style={{ margin: 0, fontSize: '1.1rem' }}>📘 Facebook</p>
        <p style={{ margin: 0, fontSize: '1.1rem' }}>📸 Instagram</p>
        <p style={{ margin: 0, fontSize: '1.1rem' }}>🐦 Twitter</p>
      </div>
    </footer>
  );
};
export default Footer;