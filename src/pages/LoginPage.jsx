import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    if (isSignup && !fullName) {
      setError('Veuillez entrer votre nom complet');
      return;
    }

    // Simple validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    // Simulated login/signup
    if (isSignup) {
      setSuccess('Compte créé avec succès! Redirection vers l\'accueil...');
      setTimeout(() => navigate('/'), 2000);
    } else {
      setSuccess('Connexion réussie! Redirection vers l\'accueil...');
      setTimeout(() => navigate('/'), 2000);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
      padding: '20px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          width: '100%',
          maxWidth: '450px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            fontSize: '50px',
            marginBottom: '15px'
          }}>
            🌿
          </div>
          <h1 style={{
            fontSize: '2em',
            color: 'var(--primary-color)',
            margin: '0 0 10px 0'
          }}>
            {isSignup ? 'Créer un compte' : 'Se connecter'}
          </h1>
          <p style={{ color: '#666', marginTop: '5px' }}>
            C'est Atangui Market
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              backgroundColor: '#ffebee',
              color: '#c62828',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '15px',
              fontSize: '0.95em'
            }}
          >
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              backgroundColor: '#e8f5e9',
              color: '#2e7d32',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '15px',
              fontSize: '0.95em'
            }}
          >
            {success}
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div style={{ marginBottom: '15px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#333',
                fontWeight: '500'
              }}>
                Nom complet
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid var(--primary-color)',
                  borderRadius: '8px',
                  fontSize: '1em',
                  boxSizing: 'border-box'
                }}
                placeholder="Votre nom"
              />
            </div>
          )}

          <div style={{ marginBottom: '15px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: '500'
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid var(--primary-color)',
                borderRadius: '8px',
                fontSize: '1em',
                boxSizing: 'border-box'
              }}
              placeholder="votreemail@example.com"
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: '500'
            }}>
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid var(--primary-color)',
                borderRadius: '8px',
                fontSize: '1em',
                boxSizing: 'border-box'
              }}
              placeholder="Minimum 6 caractères"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%',
              padding: '13px',
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1em',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            {isSignup ? 'Créer un compte' : 'Se connecter'}
          </motion.button>
        </form>

        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid #ddd'
        }}>
          <p style={{ color: '#666', margin: '0' }}>
            {isSignup ? 'Vous avez déjà un compte?' : 'Pas encore de compte?'}
          </p>
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setError('');
              setSuccess('');
              setEmail('');
              setPassword('');
              setFullName('');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-color)',
              fontSize: '1em',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '8px'
            }}
          >
            {isSignup ? 'Se connecter ici' : 'S\'inscrire ici'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
