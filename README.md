# Foodtruck Paradise - Interactivité

Projet React pour le Jour 2 - Ajout de fonctionnalités interactives : panier, filtres et recherche.

## Fonctionnalités

### Panier
-  Ajout de plats au panier avec 'addToCart'
-  Suppression de plats avec 'removeFromCart'
-  Mise à jour des quantités avec 'updateQuantity'
-  Vidage complet du panier avec 'clearCart'
-  Badge compteur dans le header
-  Vue détaillée du panier avec 'CartSummary'

### Filtres
-  Filtrage par catégorie (Tous, Entrées, Plats, Desserts, Boissons)
-  Boutons de filtre avec style actif
-  Filtrage combiné avec la recherche

### Recherche
-  Recherche dans le titre et la description
-  Insensible à la casse
-  Affichage du nombre de résultats
-  Bouton pour effacer la recherche

### Interface
-  Animations de feedback lors de l'ajout au panier
-  Contrôles de quantité (+/-) dans le panier
-  Calcul automatique des sous-totaux et total général
-  Design moderne et responsive

## Installation
bash
npm install


## Lancement

bash
npm run dev


## Structure du projet


src/
├── components/
│   ├── Header.jsx          # Header avec badge panier
│   ├── Hero.jsx            # Section hero
│   ├── Menu.jsx            # Composant menu principal
│   ├── MenuCard.jsx        # Carte de plat avec bouton ajouter
│   ├── FilterBar.jsx       # Barre de filtres par catégorie
│   ├── SearchBar.jsx       # Barre de recherche
│   ├── CartSummary.jsx     # Vue du panier
│   └── Footer.jsx          # Footer
├── data/
│   └── menuData.js         # Données des plats
├── App.jsx                 # Composant principal avec état
└── main.jsx                # Point d'entrée


## Règles d'immutabilité respectées

- Utilisation de 'useState avec fonctions de mise à jour
- Pas de mutation directe ('cart.push()' interdit)
- Utilisation du spread operator ('[...cart, item]')
- Utilisation de '.map()' et '.filter()' pour les modifications

## Technologies utilisées

- React 18
- Vite
- CSS3 (animations et transitions)

