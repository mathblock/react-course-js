import React from 'react'
import './Contact.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message envoyé ! Merci pour votre contact.')
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contactez-nous</h2>
        <p>Prêt à commander ou avez des questions ? Contactez Foodtruck Paradise !</p>
        <div className="contact-info">
          <div className="info-item">
            <span className="icon">📍</span>
            <h3>Adresse</h3>
            <p>Place du Marché, Paris</p>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <h3>Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <h3>Email</h3>
            <p>contact@foodtruckparadise.fr</p>
          </div>
          <div className="info-item">
            <span className="icon">🕒</span>
            <h3>Horaires</h3>
            <p>Lun-Sam 11h-22h</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Votre message" rows="5" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
