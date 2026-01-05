# JOUR 1 : Fondations React - Composants et Props

## 📊 Vue d'ensemble

**Durée totale** : 7 heures (3h30 matin + 3h30 après-midi)  
**Niveau** : Débutant  
**Prérequis** : JavaScript ES6+ de base, HTML/CSS

---

## 🎯 Objectifs Pédagogiques

À la fin de cette journée, les étudiants seront capables de :

### Connaissances (Savoir)

- [ ] Expliquer ce qu'est React et sa philosophie
- [ ] Comprendre le concept de composant
- [ ] Différencier props et state
- [ ] Expliquer le Virtual DOM
- [ ] Comprendre JSX et ses règles

### Compétences (Savoir-faire)

- [ ] Créer un projet React avec Vite
- [ ] Écrire des composants fonctionnels
- [ ] Utiliser JSX correctement
- [ ] Passer et recevoir des props
- [ ] Rendre des listes avec .map()
- [ ] Implémenter du rendu conditionnel
- [ ] Structurer une application simple

### Attitudes (Savoir-être)

- [ ] Adopter une approche composant-first
- [ ] Penser de manière déclarative
- [ ] Chercher dans la documentation React

---

## Planning Détaillé

### MATIN

#### Accueil & Introduction

**Format** : Présentation + Discussion

**Contenu** :

- Tour de table : prénom, expérience JavaScript
- Présentation du programme des 4 jours
- Objectifs de la journée
- Organisation pratique (pauses, déjeuner, questions)

**Notes formateur** :

- Créer un climat bienveillant dès le début
- Identifier les niveaux pour adapter si nécessaire
- Expliquer qu'on va faire beaucoup d'erreurs et que c'est normal

---

#### React : Philosophie et concepts

**Format** : Présentation + Démonstration

##### Qu'est-ce que React ?
**Points clés à couvrir** :

```
✓ React = bibliothèque (pas framework)
✓ Créé par Facebook en 2013
✓ Pour construire des interfaces utilisateur
✓ Populaire : 40M+ téléchargements npm/semaine
```

**Analogie** :
"React est comme des briques LEGO. Vous créez des petites pièces (composants) que vous assemblez pour construire quelque chose de grand (application)."

**Démonstration visuelle** :
Montrer un site web et décomposer visuellement en composants :

```
Application
├── Header
│   ├── Logo
│   └── Navigation
├── Main
│   ├── ProductList
│   │   ├── ProductCard
│   │   ├── ProductCard
│   │   └── ProductCard
│   └── Sidebar
└── Footer
```

##### Déclaratif vs Impératif

**Exemple comparatif live** :

```javascript
// ❌ Impératif (Vanilla JS)
// "Comment faire étape par étape"
const button = document.createElement("button");
button.textContent = "Compteur: 0";
let count = 0;
button.addEventListener("click", () => {
  count++;
  button.textContent = `Compteur: ${count}`;
});
document.body.appendChild(button);
```

```jsx
// ✅ Déclaratif (React)
// "Ce que je veux voir"
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Compteur: {count}</button>;
}
```

**Question interactive** : "Quel code trouvez-vous plus lisible ?"

##### Virtual DOM

**Explication simplifiée** :

1. React garde une copie du DOM en mémoire (Virtual DOM)
2. Quand les données changent, React met à jour le Virtual DOM
3. React compare (diff) avec la version précédente
4. React met à jour SEULEMENT ce qui a changé dans le vrai DOM

**Métaphore** :
"C'est comme un plan d'architecte. Avant de casser des murs, on dessine d'abord sur papier pour voir ce qui change vraiment."

**⚠️ Point important** : Pas besoin de comprendre l'algorithme de diff, juste savoir que React optimise automatiquement.

---

#### Installation et premier projet

**Format** : Live coding + Students follow along

##### Setup de l'environnement
**Vérifications prérequis** :

```bash
# Vérifier Node.js (doit être 18+)
node --version

# Vérifier npm
npm --version
```

**Si problème** : Télécharger depuis nodejs.org

**Création du projet** :

```bash
# Créer le projet (LIVE CODING)
npm create vite@latest foodtruck-paradise -- --template react

# Expliquer chaque partie de la commande
cd foodtruck-paradise
npm install
npm run dev
```

**Montrer dans le navigateur** : http://localhost:5173

**⚠️ Piège courant** : Port déjà utilisé → Montrer comment changer le port

##### Tour de la structure

**Exploration du projet créé** (screen share + explication) :

```
foodtruck-paradise/
├── node_modules/       → Dépendances (ne pas toucher)
├── public/             → Assets statiques
├── src/
│   ├── App.jsx        → Composant principal ← FOCUS ICI
│   ├── main.jsx       → Point d'entrée
│   └── index.css      → Styles
├── index.html         → Page HTML
├── package.json       → Config npm
└── vite.config.js     → Config Vite
```

**Ouvrir App.jsx et expliquer ligne par ligne** :

```jsx
function App() {
  // ← Fonction composant
  return (
    // ← Retourne du JSX
    <div>
      {" "}
      // ← Comme du HTML
      <h1>Bonjour</h1>
    </div>
  );
}

export default App; // ← Export pour utiliser ailleurs
```

**Premier changement live** :

```jsx
function App() {
  return (
    <div>
      <h1>🌮 Bienvenue chez Food Truck Paradise !</h1>
    </div>
  );
}
```

Montrer que ça se met à jour instantanément dans le navigateur (Hot Module Replacement).

---

#### JSX : Le langage de React

**Format** : Présentation + Exercices pratiques

##### Les règles du JSX

**Règle 1 : Un seul élément parent**

```jsx
// ❌ ERREUR - Plusieurs éléments racine
function Bad() {
  return (
    <h1>Titre</h1>
    <p>Paragraphe</p>  // ← Erreur de syntaxe !
  );
}

// ✅ Solution 1 : Fragment <>...</>
function Good1() {
  return (
    <>
      <h1>Titre</h1>
      <p>Paragraphe</p>
    </>
  );
}

// ✅ Solution 2 : div englobante
function Good2() {
  return (
    <div>
      <h1>Titre</h1>
      <p>Paragraphe</p>
    </div>
  );
}
```

**Faire l'erreur intentionnellement** pour montrer le message.

**Règle 2 : className au lieu de class**

```jsx
// ❌ ERREUR
<div class="container">  // class est un mot réservé JS

// ✅ CORRECT
<div className="container">
```

**Règle 3 : Toutes les balises doivent être fermées**

```jsx
// ❌ ERREUR
<img src="logo.png">
<br>

// ✅ CORRECT
<img src="logo.png" />
<br />
```

**Règle 4 : JavaScript entre accolades { }**

```jsx
function Greeting() {
  const name = "Marie";
  const age = 25;

  return (
    <div>
      <h1>Bonjour {name} !</h1>
      <p>Tu as {age} ans</p>
      <p>Dans 5 ans : {age + 5} ans</p>
      <p>Majeur ? {age >= 18 ? "Oui" : "Non"}</p>
    </div>
  );
}
```

##### Exercice JSX

**🎯 Exercice 1 : Carte d'identité (10 min)**

```jsx
// Consigne : Créer un composant qui affiche vos infos
function IdentityCard() {
  // TODO : Déclarer des variables
  const firstName = "Votre prénom";
  const lastName = "Votre nom";
  const age = 0;
  const city = "Votre ville";

  // TODO : Afficher dans du JSX
  return <div>{/* Votre code ici */}</div>;
}
```

**Solution** :

```jsx
function IdentityCard() {
  const firstName = "Marie";
  const lastName = "Dubois";
  const age = 25;
  const city = "Paris";

  return (
    <div className="card">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>Âge : {age} ans</p>
      <p>Ville : {city}</p>
      <p>Status : {age >= 18 ? "Majeur(e)" : "Mineur(e)"}</p>
    </div>
  );
}
```

**🎯 Exercice 2 : Product Card (15 min)**

```jsx
// Consigne : Créer une carte produit
function ProductCard() {
  const product = {
    name: "Tacos Poulet",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300",
    inStock: true,
  };

  // TODO : Afficher le produit
  return <div className="product-card">{/* Votre code ici */}</div>;
}
```

**Critères de réussite** :

- [ ] Image affichée
- [ ] Nom du produit
- [ ] Prix avec €
- [ ] Badge "En stock" ou "Rupture" selon inStock

---

#### PAUSE (20 min)

#### Les Composants et les Props

**Format** : Live coding + Exercices progressifs

##### Créer des composants

**Anatomie d'un composant** :

```jsx
// 1. Import si nécessaire
import { useState } from "react";

// 2. Définir le composant (fonction)
function Welcome() {
  // 3. Logique JavaScript ici
  const message = "Bienvenue !";

  // 4. Retourner du JSX
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

// 5. Export pour utilisation
export default Welcome;
```

**⚠️ Règles de nommage** :

- Toujours **PascalCase** : `Welcome`, `ProductCard`
- Jamais camelCase : ~~`welcome`~~, ~~`productCard`~~
- Nom = Ce que le composant représente

**Live coding : Premier composant ensemble**

```jsx
// src/components/Header.jsx (créer le dossier components)
function Header() {
  return (
    <header>
      <h1>🌮 Food Truck Paradise</h1>
      <nav>
        <a href="#menu">Menu</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
```

**Utiliser dans App.jsx** :

```jsx
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>Contenu principal</p>
      </main>
    </div>
  );
}
```

**Point pédagogique** : Expliquer qu'on "compose" l'application.

##### Les Props

**Concept** : Les props = arguments de la fonction composant

**Progression pédagogique** :

**Étape 1 : Composant sans props (pas réutilisable)**

```jsx
function Greeting() {
  return <h1>Bonjour Marie !</h1>; // ← Nom en dur
}

// Utilisation
<Greeting />; // Affiche toujours "Marie"
```

**Étape 2 : Composant avec props (réutilisable)**

```jsx
function Greeting({ name }) {
  return <h1>Bonjour {name} !</h1>;
}

// Utilisation
<Greeting name="Marie" />
<Greeting name="Pierre" />
<Greeting name="Sophie" />
```

**Props multiples** :

```jsx
function Card({ title, subtitle, price }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <span>{price}€</span>
    </div>
  );
}

// Utilisation
<Card title="Tacos" subtitle="Poulet mariné" price={8.5} />;
```

**Props optionnelles** :

```jsx
function Card({ title, subtitle = "Pas de description", imageUrl }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {imageUrl && <img src={imageUrl} alt={title} />}
    </div>
  );
}
```

##### Exercices Props

**🎯 Exercice 3 : Button réutilisable (15 min)**

```jsx
// Consigne : Créer un bouton avec variants
// Specs :
// - text (string)
// - variant: 'primary' | 'secondary' | 'danger'
// - Afficher un style différent selon variant

function Button(/* TODO: props */) {
  // TODO: Implémenter
}

// Test (dans App.jsx)
<Button text="Valider" variant="primary" />
<Button text="Annuler" variant="secondary" />
<Button text="Supprimer" variant="danger" />
```

**Solution** :

```jsx
function Button({ text, variant }) {
  return <button className={`btn btn-${variant}`}>{text}</button>;
}
```

**🎯 Exercice 4 : MenuCard avec props (25 min)**

```jsx
// Consigne : Créer une carte de menu réutilisable
function MenuCard(/* TODO */) {
  // TODO: Afficher toutes les infos
  // Bonus : Badge "🌱 Végé" si isVegetarian === true
}

// Test
<MenuCard
  name="Tacos Poulet"
  description="Tortilla avec poulet mariné"
  price={8.5}
  imageUrl="..."
  isVegetarian={false}
/>;
```

**Point de contrôle** : Passer dans les rangs et vérifier.

---

#### 🍽️ PAUSE DÉJEUNER

---

### 🌆 APRÈS-MIDI (13h30 - 17h30)

#### Rappel JavaScript ES6+ (30 min)

**Format** : Présentation interactive + Exercices rapides

**Objectif** : S'assurer que tout le monde a les bases pour l'après-midi.

##### Destructuring (10 min)

```javascript
// Objets
const user = { name: "Marie", age: 25, city: "Paris" };

// Sans destructuring
const name = user.name;
const age = user.age;

// Avec destructuring
const { name, age, city } = user;

// Dans les props React (très utilisé !)
function Greeting({ name, age }) {
  // ← Destructuring direct
  return (
    <p>
      Bonjour {name}, {age} ans
    </p>
  );
}

// Tableaux
const fruits = ["pomme", "banane", "orange"];
const [first, second, third] = fruits;
```

**Mini exercice** (3 min) : Destructurer un objet product.

##### Spread Operator (10 min)

```javascript
// Copie de tableau
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Copie d'objet
const user = { name: "Marie", age: 25 };
const updated = { ...user, age: 26 }; // { name: "Marie", age: 26 }

// Fusion d'objets
const info = { name: "Marie" };
const address = { city: "Paris" };
const full = { ...info, ...address };
```

**⚠️ TRÈS IMPORTANT pour React** : On ne mute JAMAIS, on copie !

##### Array.map() (10 min)

```javascript
// Transformer chaque élément
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
// [2, 4, 6, 8, 10]

const users = [
  { name: "Marie", age: 25 },
  { name: "Pierre", age: 30 },
];

// Extraire juste les noms
const names = users.map((user) => user.name);
// ["Marie", "Pierre"]

// Transformer en JSX (très utilisé en React !)
const userList = users.map((user) => (
  <div key={user.name}>
    <h2>{user.name}</h2>
    <p>{user.age} ans</p>
  </div>
));
```

**Mini exercice** (5 min) : Map un tableau de produits pour extraire les prix.

---

#### Rendre des listes avec .map()

**Format** : Live coding + Exercices

##### Principe du rendu de liste

**Pattern de base** :

```jsx
function FruitList() {
  const fruits = ["Pomme", "Banane", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

**Étape par étape** :

1. `fruits.map(...)` → Transformer chaque élément
2. `fruit => <li>...</li>` → Élément en JSX
3. `key={index}` → Identifiant unique (on reviendra dessus)
4. Entourer de `{...}` pour injecter dans JSX

**Avec des objets** :

```jsx
function ProductList() {
  const products = [
    { id: "1", name: "Tacos", price: 8.5 },
    { id: "2", name: "Burger", price: 9.0 },
    { id: "3", name: "Pizza", price: 12.0 },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}€</p>
        </div>
      ))}
    </div>
  );
}
```

##### La prop key (IMPORTANT)

**Pourquoi key ?**
React a besoin d'identifier chaque élément de la liste pour optimiser les mises à jour.

**❌ MAUVAIS : Index comme key**

```jsx
{
  items.map((item, index) => (
    <div key={index}>{item}</div> // ❌ Problème si liste change
  ));
}
```

**Démonstration du bug** (live) :

```jsx
function TodoList() {
  const [todos, setTodos] = useState(["A", "B", "C"]);

  // Avec index comme key
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" />
          <span>{todo}</span>
        </div>
      ))}
    </div>
  );
}
```

→ Cocher "A", supprimer "A" → "B" se retrouve coché !

**✅ BON : ID unique comme key**

```jsx
{
  items.map((item) => (
    <div key={item.id}>{item.name}</div> // ✅ ID stable et unique
  ));
}
```

**Règles pour key** :

1. Unique parmi les siblings (frères/sœurs)
2. Stable (ne change pas entre les rendus)
3. Prévisible (pas random)

##### Exercice listes

**🎯 Exercice 5 : Liste de produits**

```jsx
// Données fournies
const products = [
  { id: "1", name: "Tacos Poulet", price: 8.5, image: "..." },
  { id: "2", name: "Burger Bœuf", price: 9.0, image: "..." },
  { id: "3", name: "Pizza Margherita", price: 12.0, image: "..." },
  { id: "4", name: "Salade César", price: 7.5, image: "..." },
];

// Consigne : Afficher tous les produits avec .map()
// Utiliser le composant MenuCard créé plus tôt
function Menu() {
  return (
    <div className="menu-grid">
      {/* TODO: Utiliser .map() pour afficher chaque produit */}
    </div>
  );
}
```

**Solution** :

```jsx
function Menu() {
  return (
    <div className="menu-grid">
      {products.map((product) => (
        <MenuCard
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.image}
          description=""
          isVegetarian={false}
        />
      ))}
    </div>
  );
}
```

---

#### Rendu conditionnel

**Format** : Présentation + Exercices

##### Techniques de rendu conditionnel

**Technique 1 : Opérateur &&**

```jsx
function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <p>Bienvenue !</p>}
      {!isLoggedIn && <p>Veuillez vous connecter</p>}
    </div>
  );
}
```

**Technique 2 : Ternaire**

```jsx
function Badge({ isOnline }) {
  return <span>{isOnline ? "🟢 En ligne" : "🔴 Hors ligne"}</span>;
}
```

**Technique 3 : Variable**

```jsx
function ProductCard({ product }) {
  let badge = null;

  if (product.isNew) {
    badge = <span className="badge-new">Nouveau</span>;
  } else if (product.onSale) {
    badge = <span className="badge-sale">Promo</span>;
  }

  return (
    <div>
      <h3>{product.name}</h3>
      {badge}
    </div>
  );
}
```

**Technique 4 : Early return**

```jsx
function Message({ message }) {
  if (!message) {
    return <p>Pas de message</p>;
  }

  return <p>{message}</p>;
}
```

##### Exercice conditionnel

**🎯 Exercice 6 : Badge de statut**

```jsx
// Consigne : Afficher un badge selon le stock
function Product({ name, stock }) {
  // TODO: Afficher
  // - "✅ En stock" si stock > 0
  // - "⚠️ Stock faible" si stock > 0 et stock < 5
  // - "❌ Rupture" si stock === 0
}
```

---

#### PAUSE (20 min)

---

#### ATELIER FIL ROUGE : Menu Foodtruck (2h)

**Format** : Projet guidé en binôme

##### Présentation du projet

**Montrer le résultat final** (démo) :

- Header avec logo et navigation
- Grille de plats organisés
- Footer avec infos

**Objectifs de l'atelier** :

- [ ] Structure de données en JavaScript (JSDoc optionnel)
- [ ] Composant Header
- [ ] Composant MenuCard
- [ ] Composant Menu qui utilise .map()
- [ ] Composant Footer
- [ ] Assemblage dans App.jsx
- [ ] Styling CSS de base

**Organisation** :

- Travail en binôme recommandé
- Aide du formateur disponible
- Commits Git réguliers

##### Étape 1 : Structure des données

**Créer `src/data/menuData.js`** :

```js
/**
 * @typedef {Object} MenuItem
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {'entrees'|'plats'|'desserts'|'boissons'} category
 * @property {string} imageUrl
 * @property {boolean} isVegetarian
 * @property {boolean} [isNew]
 */

/** @type {MenuItem[]} */
export const menuItems = [
  {
    id: "1",
    name: "Tacos Poulet",
    description:
      "Tortilla garnie de poulet mariné, légumes frais et sauce maison",
    price: 8.5,
    category: "plats",
    imageUrl:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
    isVegetarian: false,
    isNew: true,
  },
  {
    id: "2",
    name: "Burger Végétarien",
    description: "Steak végétal, tomates, salade, oignons rouges",
    price: 9.0,
    category: "plats",
    imageUrl:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500",
    isVegetarian: true,
  },
  {
    id: "3",
    name: "Pizza Margherita",
    description: "Tomate, mozzarella, basilic frais",
    price: 12.0,
    category: "plats",
    imageUrl:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
    isVegetarian: true,
  },
  // TODO: Ajouter 12-15 items minimum pour avoir assez de contenu
];
```

**Consigne étudiants** : Ajoutez au moins 15 items au total (entrées, plats, desserts, boissons).

##### Étape 2 : Composant Header

**Créer `src/components/Header.jsx`** :

```jsx
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>🌮 Food Truck Paradise</h1>
          <p className="tagline">Les meilleurs plats de rue !</p>
        </div>
        <nav className="nav">
          <a href="#menu" className="nav-link">
            Menu
          </a>
          <a href="#about" className="nav-link">
            À propos
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
```

##### Étape 3 : Composant MenuCard

**Créer `src/components/MenuCard.jsx`** :

```jsx
function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <div className="card-image">
        <img src={item.imageUrl} alt={item.name} />
        {item.isNew && <span className="badge-new">Nouveau</span>}
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3>{item.name}</h3>
          {item.isVegetarian && <span className="badge-vege">🌱</span>}
        </div>

        <p className="description">{item.description}</p>

        <div className="card-footer">
          <span className="price">{item.price.toFixed(2)}€</span>
          <button className="btn-add">Ajouter</button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
```

##### Étape 4 : Composant Menu et Assemblage

**Créer `src/components/Menu.jsx`** :

```jsx
import { menuItems } from "../data/menuData";
import MenuCard from "./MenuCard";

function Menu() {
  return (
    <section className="menu-section">
      <div className="container">
        <h2>Notre Menu</h2>

        <div className="category-section">
          <h3>🍴 Plats Principaux</h3>
          <div className="menu-grid">
            {menuItems
              .filter((item) => item.category === "plats")
              .map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
          </div>
        </div>

        {/* Répéter pour desserts, boissons, etc. */}
      </div>
    </section>
  );
}

export default Menu;
```

**Footer simple** :

```jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Food Truck Paradise</p>
      </div>
    </footer>
  );
}

export default Footer;
```

**Assemblage dans App.jsx** :

```jsx
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

#### 17h00 - 17h30 | Récapitulatif & Questions (30 min)

##### Quiz rapide (10 min)

**Questions posées au groupe** :

1. Qu'est-ce qu'un composant React ?
2. Quelle est la différence entre props et state ?
3. Pourquoi utiliser key dans les listes ?
4. Comment passe-t-on des données d'un parent à un enfant ?
5. Peut-on modifier les props dans un composant ?

##### Ce qu'on a appris aujourd'hui (5 min)

✅ React c'est des composants  
✅ Les composants sont des fonctions qui retournent du JSX  
✅ Les props permettent de rendre les composants réutilisables  
✅ .map() pour afficher des listes  
✅ key doit être unique et stable  
✅ Les props sont en lecture seule (immutables)

##### Teaser Jour 2 (5 min)

"Demain, on va rendre tout ça **interactif** ! Vous allez pouvoir :

- Ajouter des plats au panier
- Filtrer les produits
- Avoir une vraie recherche
- Gérer les quantités

Pour ça, on va apprendre **useState** - la mémoire des composants !"

##### Questions & Débriefing (10 min)

- Comment vous sentez-vous ?
- Qu'est-ce qui était difficile ?
- Qu'est-ce qui était clair ?
- Des questions sur le projet ?

---

## 📚 Ressources & Devoirs

### Devoirs pour demain (optionnel mais recommandé)

1. **Finir le menu** : Ajouter 20 items minimum
2. **Ajouter un Hero** : Grande image d'accueil avec slogan
3. **Améliorer le design** : CSS personnalisé
4. **Ajouter des badges** : "Bio", "Épicé", "Sans gluten"

### Lectures

- [React - Your First Component](https://react.dev/learn/your-first-component)
- [React - Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [React - Rendering Lists](https://react.dev/learn/rendering-lists)

### Vidéos recommandées

- Fireship : "React in 100 Seconds"
- Web Dev Simplified : "React Components & Props"

---

## 🎯 Critères d'Évaluation de la Journée

### Compétences acquises

**Niveau 1 - Basique** ⭐

- [ ] Créer un projet React avec Vite
- [ ] Écrire du JSX valide
- [ ] Créer un composant simple
- [ ] Utiliser une prop

**Niveau 2 - Intermédiaire** ⭐⭐

- [ ] Créer plusieurs composants
- [ ] Passer plusieurs props
- [ ] Afficher une liste avec .map()
- [ ] Utiliser key correctement

**Niveau 3 - Avancé** ⭐⭐⭐

- [ ] Structurer une application complète
- [ ] Props optionnelles avec valeurs par défaut
- [ ] Rendu conditionnel complexe
- [ ] Composition de composants

---

## 📝 Notes Formateur

### Points d'attention

⚠️ **Erreurs fréquentes jour 1** :

1. Oublier `key` dans les listes
2. Utiliser l'index comme key
3. Essayer de modifier les props
4. Oublier les accolades `{}` dans JSX
5. Plusieurs éléments racine sans fragment

### Adaptations possibles

**Si en avance** :

- Approfondir le rendu conditionnel
- Introduire les children props
- Montrer React DevTools

**Si en retard** :

- Simplifier le projet (moins de composants)
- Donner plus de code starter
- Faire l'atelier ensemble en live coding

### Signaux de difficulté

🚨 **Les étudiants sont perdus si** :

- Silence lors des exercices
- Questions répétitives sur les mêmes concepts
- Copier-coller sans comprendre
- Abandonnent l'atelier

**Actions correctives** :

- Ralentir le rythme
- Revenir sur les bases
- Sessions individuelles
- Simplifier les exercices

---

## ✅ Checklist Formateur

### Avant le cours

- [ ] Environnement de développement prêt
- [ ] Projet exemple fonctionnel
- [ ] VS Code avec extensions
- [ ] Slides de présentation
- [ ] Code starter disponible
- [ ] Solutions des exercices prêtes

### Pendant le cours

- [ ] Prendre le temps pour les questions
- [ ] Live coding à chaque concept
- [ ] Montrer les erreurs volontairement
- [ ] Pauses régulières
- [ ] Vérifier la compréhension

### Après le cours

- [ ] Partager le code du jour
- [ ] Envoyer les ressources
- [ ] Noter les difficultés rencontrées
- [ ] Préparer les ajustements pour J2

---

**Fin du support Jour 1** 🎉

[→ Jour 2 : Interactivité avec useState](../jour-2/README.md)
