import React from 'react'
import './Hero.css'
import logo from '../assets/foodtruck-logo.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={logo} alt="Foodtruck Paradise Logo" className="hero-logo" />
        <h1 className="hero-title">Bienvenue chez Foodtruck Paradise</h1>
        <p className="hero-subtitle">Découvrez nos délicieux plats de rue préparés avec passion !</p>
        <a href="#menu" className="hero-button">Voir le menu</a>
      </div>
    </section>
  )
}

export default Hero
