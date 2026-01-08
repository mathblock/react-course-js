import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
  const { user, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getOrderStatusColor = (status) => {
    switch (status) {
      case 'En préparation':
        return '#f39c12';
      case 'Prête':
        return '#3498db';
      case 'Livrée':
        return '#2ecc71';
      case 'Annulée':
        return '#e74c3c';
      default:
        return '#95a5a6';
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h1>Mon Profil</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>

        <div className="profile-tabs">
          <button
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Mes Informations
          </button>
          <button
            className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Mes Commandes ({user?.orders?.length || 0})
          </button>
          <button
            className={`tab-btn ${activeTab === 'promotions' ? 'active' : ''}`}
            onClick={() => setActiveTab('promotions')}
          >
            Promotions
          </button>
        </div>

        <div className="profile-content">
          {activeTab === 'profile' && (
            <div className="profile-section">
              <div className="section-header">
                <h2>Informations personnelles</h2>
                {!isEditing && (
                  <button className="edit-btn" onClick={() => setIsEditing(true)}>
                    Modifier
                  </button>
                )}
              </div>

              {isEditing ? (
                <div className="edit-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Prénom</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Nom</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Adresse</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                    />
                  </div>

                  <div className="form-actions">
                    <button className="cancel-btn" onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        firstName: user?.firstName || '',
                        lastName: user?.lastName || '',
                        email: user?.email || '',
                        phone: user?.phone || '',
                        address: user?.address || ''
                      });
                    }}>
                      Annuler
                    </button>
                    <button className="save-btn" onClick={handleSave}>
                      Enregistrer
                    </button>
                  </div>
                </div>
              ) : (
                <div className="profile-info">
                  <div className="info-item">
                    <span className="info-label">Prénom :</span>
                    <span className="info-value">{user?.firstName || '-'}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Nom :</span>
                    <span className="info-value">{user?.lastName || '-'}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email :</span>
                    <span className="info-value">{user?.email || '-'}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Téléphone :</span>
                    <span className="info-value">{user?.phone || '-'}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Adresse :</span>
                    <span className="info-value">{user?.address || '-'}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="orders-section">
              <h2>Historique des commandes</h2>
              {!user?.orders || user.orders.length === 0 ? (
                <div className="empty-state">
                  <p>Vous n'avez pas encore passé de commande</p>
                  <button className="cta-btn" onClick={() => navigate('/menu')}>
                    Voir le menu
                  </button>
                </div>
              ) : (
                <div className="orders-list">
                  {user.orders.map(order => (
                    <div key={order.id} className="order-card">
                      <div className="order-header">
                        <div>
                          <h3>Commande #{order.id.slice(-6)}</h3>
                          <p className="order-date">{formatDate(order.date)}</p>
                        </div>
                        <span
                          className="order-status"
                          style={{ backgroundColor: getOrderStatusColor(order.status) }}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="order-items">
                        {order.items?.map((item, index) => (
                          <div key={index} className="order-item">
                            <span>{item.title} x{item.quantity}</span>
                            <span>{(item.price * item.quantity).toFixed(2)} €</span>
                          </div>
                        ))}
                      </div>
                      <div className="order-total">
                        <strong>Total : {order.total} €</strong>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'promotions' && (
            <div className="promotions-section">
              <h2>Promotions disponibles</h2>
              <div className="promotions-list">
                <div className="promotion-card">
                  <div className="promotion-badge">-10%</div>
                  <h3>Première commande</h3>
                  <p>Bénéficiez de 10% de réduction sur votre première commande</p>
                  <span className="promotion-code">Code: BIENVENUE10</span>
                </div>
                <div className="promotion-card">
                  <div className="promotion-badge">-15%</div>
                  <h3>Fidélité</h3>
                  <p>15% de réduction après 5 commandes</p>
                  <span className="promotion-code">
                    {user?.orders?.length >= 5 ? 'Code: FIDELE15' : `Encore ${5 - (user?.orders?.length || 0)} commande(s)`}
                  </span>
                </div>
                <div className="promotion-card">
                  <div className="promotion-badge">🎁</div>
                  <h3>Offre spéciale</h3>
                  <p>Un dessert offert pour toute commande supérieure à 25€</p>
                  <span className="promotion-code">Automatique</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
