Davidson Market est un site web statique interactif développé en React.js.
Il permet aux utilisateurs de :

Parcourir un menu varié (Entrées, Plats, Desserts, Boissons)

Ajouter des plats au panier avec animation de feedback et possibilité d'annuler

Filtrer les plats par catégorie

Rechercher des plats par nom ou description

Visualiser et gérer le panier en temps réel

Ce projet a été réalisé dans le cadre de l’Évaluation Journée 1 & 2 pour développer des compétences en React, useState, props, .map(), conditionnel et CSS responsive.

Structure du projet
foodtruck-paradise/
│
├─ src/
│   ├─ components/
│   │   ├─ Header.jsx
│   │   ├─ Hero.jsx
│   │   ├─ Menu.jsx
│   │   ├─ MenuCard.jsx
│   │   ├─ FilterBar.jsx
│   │   ├─ SearchBar.jsx
│   │   ├─ CartSummary.jsx
│   │   └─ Footer.jsx
│   │
│   ├─ data/
│   │   └─ menuData.js
│   │
│   ├─ App.jsx
│   └─ App.css
│
├─ package.json
└─ README.md

 Fonctionnalités
1 Panier

Ajouter des plats au panier

Animation de feedback “Ajouté” pendant 500ms

Possibilité d’annuler l’ajout

Modifier quantité (+/-)

Supprimer un plat

Vider tout le panier

2 Filtres

Boutons 'Tous', 'Entrées', 'Plats', 'Desserts', 'Boissons'

Filtrage dynamique en temps réel

 Recherche

Recherche sur nom et description

Input contrôlé avec bouton pour effacer

Affichage du nombre de résultats

Interface

Header fixe avec logo, slogan et badge panier

Menu sous forme de grille responsive

Footer avec horaires, adresse et réseaux sociaux

Design moderne, jeune et accessible pour tous

Technologies utilisées

React.js (JSX, composants fonctionnels, props)

useState pour la gestion du panier et des filtres

.map() & .filter() pour afficher et filtrer les éléments

CSS Grid & Flexbox pour le layout responsive

Animations simples au clic sur les boutons