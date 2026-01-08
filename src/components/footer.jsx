const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>foodtruck-paradise</h4>
          <p>nouraedima - Tous droits réservés</p>
        </div>
        <div>
          <h4>Horaires</h4>
                   <p>Lundi   8h-22h</p>
                    <p>Mardi   8h-22h</p>
                    <p>Mercredi  8h-19h</p>
                    <p>Vendredi  8h-22h</p>
                    <p>Samedi   8h-22h</p>
                    <p>Dimanche  8h-22h</p>
        </div>
        <div>
          <h4>Adresse</h4>
          <p>La grande place, Paris</p>
        </div>
        <div className="socials">
          <span>instagram</span> <span>tiktok</span> <span>facebook</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;