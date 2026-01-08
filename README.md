# Foodtruck Paradise

 **Projet Évaluation – Jour 1 : Menu Foodtruck Statique**

Ce projet est un site web statique réalisé en **React** pour un foodtruck fictif **Foodtruck Paradise**.  
Le site présente le menu du foodtruck avec des cartes pour chaque plat, des badges conditionnels, et un design responsive.

---

## Fonctionnalités

- Affichage du menu avec **plus de 10 plats** répartis en catégories : entrées, plats, desserts, boissons.  
- Chaque plat possède :  
  - Nom, description, prix  
  - Image  
  - Badges conditionnels : `"Végé"` si végétarien, `"Nouveau"` si récemment ajouté, `"En stock"` permanent  
- Sections du site :  
  - **Header** : Logo, titre, navigation  
  - **Hero** : Accroche et bouton “Voir le menu”  
  - **Menu** : Cartes des plats en grille responsive  
  - **Footer** : Adresse, horaires, copyright  
- Design responsive avec **Flexbox / Grid**  
- Images et cartes uniformes et esthétiques  
- Couleurs et sections en pleine largeur  

---

## 🛠 Technologies utilisées

- **React.js** (via Vite)  
- **JavaScript** (ES6+)  
- **CSS** pour le design et la mise en page responsive  
- **Vite** pour le build et le serveur de développement  

---


Installer les dépendances :

npm install


Lancer le serveur de développement :

npm run dev


Ouvrir le navigateur à l’adresse indiquée dans le terminal (ex. http://localhost:5173/)

Structure du projet
foodtruck-paradise/
├─ node_modules/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Menu.jsx
│  │  ├─ MenuCard.jsx
│  │  └─ Footer.jsx
│  ├─ data/
│  │  └─ menuData.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ App.css
├─ package.json
└─ vite.config.js

 Design et CSS

Sections pleine largeur pour Header, Hero et Footer

Menu en grille responsive, cartes uniformes

Badges colorés pour “Végé”, “Nouveau” et “En stock”

Images proportionnelles et réduites pour s’adapter aux cartes

 Bonus inclus

Animations simples d’apparition des cartes

Badges conditionnels visibles

Design responsive sur mobile et tablette

Points forts

Code clair et structuré

Composants React séparés et réutilisables

Rendu conditionnel avec .map() pour le menu

Respect du cahier des charges de l’évaluation

