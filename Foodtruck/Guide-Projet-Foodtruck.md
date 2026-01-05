# Guide de Démarrage Rapide - Projet Foodtruck

## 🚀 Installation et Configuration

### Prérequis

- Node.js 18+ ([télécharger](https://nodejs.org))
- npm ou yarn
- VS Code (recommandé) avec extensions :
  - ESLint
  - Prettier
  - ES7+ React/Redux/React-Native snippets

### Créer le projet

```bash
# Créer le projet avec Vite
npm create vite@latest foodtruck-paradise -- --template react

# Se déplacer dans le dossier
cd foodtruck-paradise

# Installer les dépendances
npm install

# Installer React Router
npm install react-router-dom

# Lancer le serveur de développement
npm run dev
```

Le serveur démarre sur `http://localhost:5173`

---

## 📁 Structure du Projet Complète

```
foodtruck-paradise/
├── public/
│   └── _redirects              # Pour Netlify (React Router)
│
├── src/
│   ├── components/             # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── MenuCard.jsx
│   │   ├── CartSummary.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── ErrorMessage.jsx
│   │   └── Layout.jsx
│   │
│   ├── pages/                  # Pages de l'application
│   │   ├── HomePage.jsx
│   │   ├── MenuPage.jsx
│   │   ├── ItemDetailPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── OrderConfirmationPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── context/                # Context API
│   │   └── CartContext.jsx
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── useFetch.js
│   │   ├── useLocalStorage.js
│   │   └── useDebounce.js
│   │
│   ├── types/                  # Types (via JSDoc)
│   │   ├── menu.js
│   │   └── cart.js
│   │
│   ├── data/                   # Données mock
│   │   └── menuData.js
│   │
│   ├── utils/                  # Fonctions utilitaires
│   │   └── formatters.js
│   │
│   ├── App.jsx                 # Composant racine avec routes
│   ├── main.jsx                # Point d'entrée
│   ├── App.css                 # Styles globaux
│   └── index.css               # Reset CSS
│
├── .eslintrc.cjs               # Configuration ESLint
├── vite.config.js              # Configuration Vite
└── package.json
```

---

## 📝 Fichiers Clés à Créer

### 1. Types (`src/types/menu.js`)

```js
/**
 * @typedef {'entrees' | 'plats' | 'desserts' | 'boissons'} MenuCategory
 */

/**
 * @typedef {Object} MenuItem
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {MenuCategory} category
 * @property {string} imageUrl
 * @property {boolean} isVegetarian
 * @property {boolean} [isNew]
 * @property {string[]} [allergens]
 */

export {};
```

### 2. Types (`src/types/cart.js`)

```js
/**
 * @typedef {Object} CartItem
 * @property {any} item
 * @property {number} quantity
 */

export {};
```

### 3. Données (`src/data/menuData.js`)

```js
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
  // ... Ajouter 15-20 items minimum
];
```

### 4. Context (`src/context/CartContext.jsx`)

```jsx
import { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(
        (cartItem) => cartItem.item.id === action.payload.id
      );
      if (existing) {
        return state.map((cartItem) =>
          cartItem.item.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...state, { item: action.payload, quantity: 1 }];
    }

    case "REMOVE_ITEM":
      return state.filter((cartItem) => cartItem.item.id !== action.payload);

    case "UPDATE_QUANTITY": {
      const { itemId, quantity } = action.payload;
      if (quantity <= 0) {
        return state.filter((cartItem) => cartItem.item.id !== itemId);
      }
      return state.map((cartItem) =>
        cartItem.item.id === itemId ? { ...cartItem, quantity } : cartItem
      );
    }

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeFromCart = (itemId) =>
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  const updateQuantity = (itemId, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const total = useMemo(
    () =>
      cart.reduce(
        (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
        0
      ),
    [cart]
  );

  const itemCount = useMemo(
    () => cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0),
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total,
      itemCount,
    }),
    [cart, total, itemCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (ctx == null) {
    throw new Error("useCart doit être utilisé dans un CartProvider");
  }
  return ctx;
}
```

const clearCart = () => {
dispatch({ type: 'CLEAR_CART' });
};

const total = cart.reduce(
(sum, item) => sum + item.item.price \* item.quantity,
0
);

const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

return (
<CartContext.Provider
value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount
      }} >
{children}
</CartContext.Provider>
);
}

export function useCart() {
const context = useContext(CartContext);
if (context === undefined) {
throw new Error('useCart must be used within CartProvider');
}
return context;
}

````

### 5. Layout (`src/components/Layout.jsx`)

```jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
````

### 6. App avec Routes (`src/App.jsx`)

```jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:itemId" element={<ItemDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
```

### 7. Point d'entrée (`src/main.jsx`)

```jsx
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
```

### 8. Configuration Netlify (`public/_redirects`)

```
/* /index.html 200
```

---

## 🎨 CSS de Base Recommandé

### Reset CSS (`src/index.css`)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  font-family: inherit;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
```

### Styles principaux (`src/App.css`)

```css
:root {
  --primary: #e74c3c;
  --secondary: #3498db;
  --success: #27ae60;
  --warning: #f39c12;
  --danger: #c0392b;
  --dark: #2c3e50;
  --light: #ecf0f1;
  --white: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background: var(--dark);
  color: var(--white);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Buttons */
.btn {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--danger);
  transform: translateY(-2px);
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

/* Card */
.card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

/* Loading */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--primary);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
```

---

## 🔧 Scripts npm

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

---

## 📚 Ressources Essentielles

### Documentation Officielle

- **React** : [react.dev](https://react.dev)
- **TypeScript** : [typescriptlang.org](https://www.typescriptlang.org)
- **React Router** : [reactrouter.com](https://reactrouter.com)
- **Vite** : [vitejs.dev](https://vitejs.dev)

### Apprentissage

- **freeCodeCamp** : Cours React gratuits
- **React Tutorial** : [react.dev/learn](https://react.dev/learn)
- **JavaScript Info** : [javascript.info](https://javascript.info)
- **TypeScript Handbook** : Guide complet TypeScript

### Outils de Développement

- **React DevTools** : Extension navigateur
- **Redux DevTools** : Pour debugging d'état
- **VSCode Extensions** :
  - ESLint
  - Prettier
  - Auto Rename Tag
  - Better Comments

### Bibliothèques Utiles

#### Styling

- **Tailwind CSS** : Framework CSS utility-first
- **styled-components** : CSS-in-JS
- **Emotion** : Alternative à styled-components

#### Formulaires

- **React Hook Form** : Gestion de formulaires performante
- **Zod** : Validation de schémas TypeScript
- **Yup** : Alternative à Zod

#### Data Fetching

- **TanStack Query** (ex React Query) : Gestion de données async
- **SWR** : Alternative de Vercel
- **Axios** : Client HTTP

#### State Management

- **Zustand** : State management minimaliste
- **Jotai** : Atomic state management
- **Redux Toolkit** : Si besoin de Redux

#### UI Components

- **shadcn/ui** : Composants réutilisables
- **Radix UI** : Primitives UI accessibles
- **Headless UI** : Composants non-stylés

#### Testing

- **Vitest** : Framework de test (alternative à Jest)
- **React Testing Library** : Test de composants
- **Playwright** : Tests end-to-end

### Communautés

- **Reddit** : r/reactjs
- **Discord** : Reactiflux
- **Twitter** : #ReactJS
- **Stack Overflow** : Tag [reactjs]

### Newsletters & Blogs

- **React Newsletter** : Hebdomadaire
- **This Week in React** : Actualités React
- **Kent C. Dodds Blog** : Articles approfondis
- **Josh W. Comeau Blog** : Tutoriels visuels

### Vidéos & Cours

- **YouTube** :
  - Traversy Media
  - Web Dev Simplified
  - Fireship
  - Codevolution
- **Plateformes** :
  - Udemy : Cours React complets
  - Frontend Masters : Cours avancés
  - Egghead.io : Tutoriels courts

---

## 🚀 Checklist de Déploiement

### Avant le build

- [ ] Tests réussis
- [ ] Pas d'erreurs ESLint
- [ ] Images optimisées
- [ ] Variables d'environnement configurées
- [ ] Fichier \_redirects créé (pour Netlify)

### Build

```bash
npm run build
```

Le dossier `dist/` contient les fichiers prêts pour la production.

### Déploiement Netlify

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Connecter votre repo GitHub
3. Configuration build :
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy !

### Variables d'environnement

Créer un fichier `.env` :

```
VITE_API_URL=https://api.example.com
```

Utiliser dans le code :

```js
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🎯 Prochaines Étapes Après le Projet

### Semaine 1-2 : Consolider

- Refaire le projet de zéro sans regarder le code
- Ajouter des features (favoris, notes, allergènes)
- Améliorer le design avec Tailwind

### Semaine 3-4 : Élargir

- Créer un nouveau projet (Todo app, Weather app)
- Intégrer une vraie API publique
- Ajouter des tests avec Vitest

### Mois 2 : Approfondir

- Apprendre Next.js
- Explorer TanStack Query
- Contribuer à l'open source

### Mois 3+ : Maîtriser

- Créer un projet portfolio complet
- Apprendre les patterns avancés
- Préparer les entretiens techniques

---

## 💡 Conseils pour Réussir

### Pendant l'apprentissage

1. **Pratiquer tous les jours** : 30 min minimum
2. **Construire des projets** : La théorie ne suffit pas
3. **Lire du code** : GitHub, CodeSandbox
4. **Poser des questions** : Stack Overflow, Discord
5. **Enseigner** : Expliquer renforce la compréhension

### Éviter les pièges

- ❌ Tutorial hell : Ne pas enchaîner les tutoriels
- ❌ Perfectionnisme : Finir > Parfaire
- ❌ Comparer : Chacun son rythme
- ❌ Négliger les bases : JS solide avant React avancé
- ❌ Copier-coller : Comprendre chaque ligne

### Rester motivé

- 🎯 Fixer des objectifs clairs
- 🏆 Célébrer les petites victoires
- 👥 Rejoindre une communauté
- 📅 Routine quotidienne
- 🚀 Projet personnel inspirant

---

**Bon courage dans votre apprentissage React ! 🎉**

Le code ne s'apprend pas en lisant, mais en **pratiquant**. Alors ouvrez VSCode et commencez à coder ! 💪
