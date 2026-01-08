import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '60px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
        }}>
          🌿
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2>Bienvenue chez C'est Atangui Market 🌿</h2>
          <p>Découvrez nos produits frais et savoureux pour une expérience unique.</p>
          <Link
            to="/login"
            style={{
              display: 'inline-block',
              marginTop: '15px',
              padding: '10px 25px',
              backgroundColor: 'rgba(255, 193, 7, 0.9)',
              color: '#1e1e1e',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: 'bold',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Se connecter 🔐
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;