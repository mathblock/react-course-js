function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>404 - Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <a href="/" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontSize: '1.2em' }}>Retour à l'accueil</a>
    </div>
  );
}

export default NotFoundPage;