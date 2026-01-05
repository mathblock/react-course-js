# Jour 3 : Navigation et État Global - React Router & Context API

## 📋 Objectifs de la journée

À la fin de cette journée, vous serez capable de :

- ✅ Créer une application multi-pages avec React Router
- ✅ Utiliser Link et useNavigate pour la navigation
- ✅ Gérer les paramètres d'URL avec useParams
- ✅ Comprendre le problème du prop drilling
- ✅ Utiliser Context API pour l'état global
- ✅ Combiner Context et useReducer pour un state management robuste

---

## 🌅 MATIN (3h30) : React Router

### 1. Introduction au Routing (45 min)

#### Qu'est-ce qu'une Single Page Application (SPA) ?

Une **SPA** est une application web qui ne recharge jamais la page. Tout se passe côté client avec JavaScript.

**Application traditionnelle** :

```
Clic sur lien → Requête serveur → Page HTML complète → Rechargement
```

**SPA avec React Router** :

```
Clic sur lien → JavaScript change le contenu → Pas de rechargement
```

**Avantages** :

- ⚡ Navigation instantanée
- 🎯 Meilleure expérience utilisateur
- 📱 Sensation d'application native

#### Installation de React Router

```bash
npm install react-router-dom
```

#### Concepts de base

- **Router** : Conteneur principal qui active le routing
- **Routes** : Définit les routes de l'application
- **Route** : Une route individuelle (chemin → composant)
- **Link** : Composant pour créer des liens (remplace `<a>`)
- **useNavigate** : Hook pour naviguer programmatiquement
- **useParams** : Hook pour accéder aux paramètres d'URL

### 2. Configuration de React Router (1h)

#### Structure de base

```jsx
// src/main.jsx

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

#### Définir les routes

```jsx
// src/App.jsx

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
```

**Explication des chemins** :

- `/` : Page d'accueil
- `/menu` : Page menu
- `/cart` : Page panier
- `*` : Toutes les autres routes (404)

#### Navigation avec Link

```jsx
// src/components/Header.jsx

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Panier</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
```

**⚠️ Important** : Utilisez `Link` et NON `<a>` pour éviter le rechargement de la page !

```jsx
// ❌ Rechargement de la page
<a href="/menu">Menu</a>

// ✅ Navigation sans rechargement
<Link to="/menu">Menu</Link>
```

#### Styling des liens actifs

```jsx
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Accueil
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Menu
      </NavLink>
    </nav>
  );
}
```

CSS :

```css
.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
```

### 3. Navigation programmatique (30 min)

#### useNavigate Hook

Utilisé pour naviguer via du code (pas via un clic utilisateur).

```jsx
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Faire la connexion...

    // Rediriger vers la page d'accueil
    navigate("/");
  };

  return (
    <form onSubmit={handleLogin}>
      {/* ... */}
      <button type="submit">Se connecter</button>
    </form>
  );
}
```

#### Cas d'usage de useNavigate

```jsx
function ProductCard({ product }) {
  const navigate = useNavigate();

  // Navigation après action
  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // Aller au panier
  };

  // Navigation avec état
  const handleViewDetails = () => {
    navigate("/product/" + product.id, {
      state: { from: "menu" }, // Passer des données
    });
  };

  // Navigation arrière
  const handleGoBack = () => {
    navigate(-1); // Équivalent du bouton "retour"
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Ajouter et voir le panier</button>
      <button onClick={handleViewDetails}>Voir détails</button>
      <button onClick={handleGoBack}>Retour</button>
    </div>
  );
}
```

### 4. Paramètres d'URL avec useParams (1h)

#### Route avec paramètre

```jsx
// src/App.jsx

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/menu" element={<MenuPage />} />
  <Route path="/menu/:itemId" element={<ItemDetailPage />} />
  <Route path="/cart" element={<CartPage />} />
</Routes>
```

Le `:itemId` est un **paramètre dynamique**.

#### Accéder au paramètre avec useParams

```jsx
// src/pages/ItemDetailPage.jsx

import { useParams, useNavigate } from "react-router-dom";
import { menuItems } from "../data/menuData";

function ItemDetailPage() {
  const { itemId } = useParams();
  const navigate = useNavigate();

  // Trouver l'item correspondant
  const item = menuItems.find((item) => item.id === itemId);

  // Si l'item n'existe pas
  if (!item) {
    return (
      <div>
        <h2>Produit non trouvé</h2>
        <button onClick={() => navigate("/menu")}>Retour au menu</button>
      </div>
    );
  }

  return (
    <div className="item-detail">
      <button onClick={() => navigate("/menu")}>← Retour</button>

      <div className="detail-content">
        <img src={item.imageUrl} alt={item.name} />

        <div className="detail-info">
          <h1>{item.name}</h1>
          <p className="description">{item.description}</p>
          <p className="price">{item.price.toFixed(2)}€</p>

          {item.isVegetarian && <span className="badge">🌱 Végétarien</span>}

          <button className="btn-add-large">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}
```

#### Créer des liens vers des pages dynamiques

```jsx
// src/components/MenuCard.jsx

import { Link } from "react-router-dom";

function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <Link to={`/menu/${item.id}`}>
        <img src={item.imageUrl} alt={item.name} />
        <h3>{item.name}</h3>
      </Link>

      <p>{item.description}</p>
      <p className="price">{item.price}€</p>
    </div>
  );
}
```

### 5. Exercice : Structure multi-pages (1h)

#### Créer les pages

**HomePage.jsx** - Page d'accueil

```jsx
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Bienvenue chez Food Truck Paradise 🌮</h1>
        <p>Les meilleurs plats de rue, directement dans votre assiette</p>
        <Link to="/menu" className="btn-cta">
          Découvrir le menu
        </Link>
      </section>

      <section className="featured">
        <h2>Nos spécialités</h2>
        {/* Afficher 3-4 plats populaires */}
      </section>
    </div>
  );
}
```

**MenuPage.jsx** - Liste complète des plats

```jsx
function MenuPage() {
  return (
    <div className="menu-page">
      <h1>Notre Menu Complet</h1>
      {/* Réutiliser le composant Menu du jour 2 */}
      <Menu />
    </div>
  );
}
```

**CartPage.jsx** - Page panier

```jsx
function CartPage() {
  return (
    <div className="cart-page">
      <h1>Votre Panier</h1>
      {/* CartSummary du jour 2 */}
    </div>
  );
}
```

**NotFoundPage.jsx** - Page 404

```jsx
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oups ! Cette page n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}
```

---

## 🌆 APRÈS-MIDI (3h30) : Context API et État Global

### 1. Le problème du Prop Drilling (30 min)

#### Exercice pratique : Ressentir la frustration !

**Objectif** : Passer l'état du panier à travers toutes les routes.

**Instructions** : Essayez de faire passer `cart`, `setCart`, `addToCart`, etc. depuis `App.jsx` vers tous les composants qui en ont besoin.

```jsx
// src/App.jsx

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  // Vous allez devoir passer ces props partout...
  const addToCart = (item) => {
    /* ... */
  };
  const removeFromCart = (id) => {
    /* ... */
  };
  const updateQuantity = (id, qty) => {
    /* ... */
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route
        path="/menu"
        element={<MenuPage cart={cart} addToCart={addToCart} />}
      />
      <Route
        path="/cart"
        element={
          <CartPage
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        }
      />
    </Routes>
  );
}

export default App;
```

- Code verbeux et difficile à maintenir
- Composants qui ne font que transmettre des props dont ils n'ont pas besoin

**La solution** : Context API ! 🎉

### 2. Introduction à Context API (45 min)

#### Qu'est-ce que Context ?

Context permet de **partager des données entre composants** sans les passer explicitement via props à chaque niveau.

**Analogie** : Context est comme une **radio FM**.

- Le Provider est l'émetteur radio
- Tous les récepteurs captent le même signal

#### Créer un Context

```jsx
// src/context/CartContext.jsx

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existing = cart.find((cartItem) => cartItem.item.id === item.id);

    if (existing) {
      setCart(
        cart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((cartItem) => cartItem.item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart(
      cart.map((cartItem) =>
        cartItem.item.id === itemId ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const clearCart = () => setCart([]);

  const total = useMemo(
    () =>
      cart.reduce(
        (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
        0
      ),
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
    }),
    [cart, total]
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

#### Utiliser le Provider

```jsx
// src/main.jsx

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";

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

#### Consumer le Context

```jsx
// src/components/MenuCard.jsx

import { useCart } from "../context/CartContext";

function MenuCard({ item }) {
  const { addToCart } = useCart(); // ✨ Accès direct au context !

  return (
    <div className="menu-card">
      <h3>{item.name}</h3>
      <p>{item.price}€</p>
      <button onClick={() => addToCart(item)}>Ajouter</button>
    </div>
  );
}
```

```jsx
// src/components/Header.jsx

import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart(); // ✨ Accès au panier !

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <nav>
        {/* ... */}
        <Link to="/cart">🛒 Panier ({itemCount})</Link>
      </nav>
    </header>
  );
}
```

```jsx
// src/pages/CartPage.jsx

import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  return (
    <div>
      <h1>Votre Panier</h1>

      {cart.map((cartItem) => (
        <div key={cartItem.item.id}>
          <h3>{cartItem.item.name}</h3>
          <button
            onClick={() =>
              updateQuantity(cartItem.item.id, cartItem.quantity - 1)
            }
          >
            -
          </button>
          <span>{cartItem.quantity}</span>
          <button
            onClick={() =>
              updateQuantity(cartItem.item.id, cartItem.quantity + 1)
            }
          >
            +
          </button>
          <button onClick={() => removeFromCart(cartItem.item.id)}>
            Supprimer
          </button>
        </div>
      ))}

      <h2>Total : {total.toFixed(2)}€</h2>
    </div>
  );
}
```

### 3. useReducer pour un state management robuste (45 min)

#### Pourquoi useReducer ?

Quand votre état devient complexe avec beaucoup d'actions différentes, `useReducer` est plus approprié que `useState`.

**Avantages** :

- 📋 Toute la logique d'état au même endroit
- 🎯 Actions explicites et nommées
- 🧪 Plus facile à tester
- 📝 Meilleur pour les états complexes

#### Pattern useReducer

```jsx
// Variante useReducer (dans src/context/CartContext.jsx)

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

    case "REMOVE_ITEM": {
      return state.filter((cartItem) => cartItem.item.id !== action.payload);
    }

    case "UPDATE_QUANTITY": {
      const { itemId, quantity } = action.payload;

      if (quantity <= 0) {
        return state.filter((cartItem) => cartItem.item.id !== itemId);
      }

      return state.map((cartItem) =>
        cartItem.item.id === itemId ? { ...cartItem, quantity } : cartItem
      );
    }

    case "CLEAR_CART": {
      return [];
    }

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

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total,
    }),
    [cart, total]
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

#### Règles du Reducer

**1. Le reducer doit être une fonction pure**

```js
// ❌ Impure - modifie l'état
function badReducer(state, action) {
  state.push(action.payload); // ❌ Mutation !
  return state;
}

// ✅ Pure - retourne un nouvel état
function goodReducer(state, action) {
  return [...state, action.payload]; // ✅ Nouveau tableau
}
```

**2. Toujours retourner un état**

```js
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    default:
      return state; // ⚠️ Important !
  }
}
```

**3. Ne jamais faire d'effets de bord**

```js
// ❌ Interdit dans un reducer
function badReducer(state, action) {
  fetch("/api/cart"); // ❌ Effet de bord !
  localStorage.setItem("cart", JSON.stringify(state)); // ❌
  return [...state, action.payload];
}

// ✅ Les effets de bord vont dans useEffect
function CartProvider() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // ✅
  }, [cart]);
}
```

### 4. Refactoring complet avec Context (1h30)

#### App.jsx simplifié

```jsx
// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // ✨ Plus besoin de gérer l'état ici !

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:itemId" element={<ItemDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
```

#### Layout avec Outlet

```jsx
// src/components/Layout.jsx

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet /> {/* Les pages s'affichent ici */}
      </main>
      <Footer />
    </div>
  );
}
```

#### Tous les composants accèdent au panier facilement

```jsx
// Depuis N'IMPORTE QUEL composant, n'importe où dans l'arbre :

import { useCart } from "../context/CartContext";

function AnyComponent() {
  const { cart, addToCart, total } = useCart();

  // Utiliser les données et fonctions du panier !
}
```

---

## 📝 Points Clés à Retenir

### React Router

✅ `BrowserRouter` enveloppe toute l'application
✅ `Routes` et `Route` définissent les routes
✅ `Link` pour la navigation (pas `<a>`)
✅ `useNavigate` pour navigation programmatique
✅ `useParams` pour les paramètres d'URL
✅ `:paramName` pour les routes dynamiques

### Context API

✅ Évite le prop drilling
✅ `createContext` pour créer
✅ `Provider` pour fournir les valeurs
✅ `useContext` pour consommer
✅ **Ne pas abuser** : Context pour état partagé, pas pour tout !

### useReducer

✅ Meilleur que useState pour état complexe
✅ Actions explicites et nommées
✅ Reducer = fonction pure
✅ Toujours retourner un nouvel état (immutabilité)

### Architecture

✅ **État local** (90%) → useState
✅ **État partagé proche** → Lifting state up
✅ **État global** → Context API
✅ **État très complexe** → Context + useReducer

---

## 🏠 Exercice à la maison

1. **Ajoutez un ThemeContext** pour un mode sombre/clair
2. **Créez une page About** avec des informations sur le foodtruck
3. **Ajoutez la persistance** du panier dans localStorage
4. **Créez une page "Mes commandes"** qui liste les commandes passées
5. **Ajoutez des transitions** entre les pages

---

## 📚 Ressources supplémentaires

- [React Router - Documentation](https://reactrouter.com)
- [React - Context](https://react.dev/learn/passing-data-deeply-with-context)
- [React - useReducer](https://react.dev/reference/react/useReducer)

---

**Bravo ! Vous avez terminé le Jour 3 ! 🎉**

Demain, nous finaliserons l'application avec useEffect, les appels API, les formulaires avancés, et le déploiement !
