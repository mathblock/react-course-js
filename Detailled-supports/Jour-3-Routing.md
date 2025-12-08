# JOUR 3 : Navigation et État Global - React Router & Context API

## Vue d'ensemble

**Durée totale** : 7 heures (3h30 matin + 3h30 après-midi)  
**Niveau** : Intermédiaire/Avancé  
**Prérequis** : Jours 1-2 complétés (composants, props, useState)

---

## Objectifs Pédagogiques

À la fin de cette journée, les étudiants seront capables de :

### Connaissances (Savoir)
- [ ] Expliquer ce qu'est une Single Page Application (SPA)
- [ ] Comprendre le routing côté client
- [ ] Identifier le problème du prop drilling
- [ ] Comprendre le pattern Context/Provider/Consumer
- [ ] Différencier useState et useReducer

### Compétences (Savoir-faire)
- [ ] Installer et configurer React Router
- [ ] Créer des routes et naviguer entre pages
- [ ] Utiliser Link, useNavigate, useParams
- [ ] Créer un Context avec Provider
- [ ] Consommer un Context avec useContext
- [ ] Implémenter useReducer pour état complexe
- [ ] Refactorer du prop drilling vers Context

### Attitudes (Savoir-être)
- [ ] Penser architecture multi-pages
- [ ] Anticiper le besoin d'état global
- [ ] Choisir la bonne solution de state management

---

## Planning Détaillé

### MATIN

#### Accueil & Révisions
**Format** : Discussion + Vérification

**Quiz révision Jour 2** :

1. Comment créer un état local ? → `useState`
2. Comment ajouter un élément à un tableau immuablement ? → `[...arr, item]`
3. Quelle est la différence entre `onClick={fn}` et `onClick={fn()}` ?
4. Comment empêcher le rechargement d'un formulaire ? → `e.preventDefault()`
5. Qu'est-ce que le "lifting state up" ? → Remonter l'état dans le parent commun

**Annonce du jour** :
"Aujourd'hui, deux grands changements :
1. **React Router** : Transformer notre application en site multi-pages
2. **Context API** : Se débarrasser du prop drilling

À la fin de la journée, vous aurez une vraie app avec plusieurs pages et un état global propre !"

---

#### React Router : Navigation Multi-Pages
**Format** : Présentation + Live coding + Exercices

##### Qu'est-ce qu'une SPA ?

**Application traditionnelle** (multi-pages server-side) :

```
1. User clique sur lien
2. → Requête au serveur
3. → Serveur génère HTML
4. → Page complète rechargée
5. → Perte de l'état JavaScript
```

**Single Page Application** (SPA client-side) :

```
1. User clique sur lien
2. → JavaScript change l'URL
3. → React affiche le nouveau composant
4. → Pas de rechargement
5. → L'état est préservé
```

**Démonstration visuelle** :
- Ouvrir une app traditionnelle → Montrer le rechargement
- Ouvrir Gmail/Twitter → Montrer la navigation fluide

**Avantages SPA** :
- ⚡ Navigation instantanée
- 🎯 Meilleure UX (pas de flash blanc)
- 💾 État préservé
- 📱 Sensation d'app native

**Inconvénients** :
- 🔍 SEO plus complexe (mais Next.js résout ça)
- 📦 Bundle JS plus gros
- ⏱️ Temps de chargement initial

##### Installation et configuration

**Installation** :

```bash
npm install react-router-dom
```

**Configuration dans main.tsx** :

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

**Créer les pages** (structure de dossiers) :

```
src/
├── pages/
│   ├── HomePage.tsx
│   ├── MenuPage.tsx
│   ├── ItemDetailPage.tsx
│   ├── CartPage.tsx
│   └── NotFoundPage.tsx
└── components/
    └── Layout.tsx
```

**HomePage.tsx simple** :

```typescript
function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>🌮 Bienvenue chez Food Truck Paradise</h1>
        <p>Les meilleurs plats de rue, directement dans votre assiette</p>
      </section>
    </div>
  );
}

export default HomePage;
```

**MenuPage.tsx** (réutiliser le composant Menu) :

```typescript
import Menu from '../components/Menu';

function MenuPage() {
  return (
    <div className="menu-page">
      <h1>Notre Menu Complet</h1>
      <Menu onAddToCart={/* on verra plus tard */} />
    </div>
  );
}

export default MenuPage;
```

**Layout.tsx** (enveloppe commune) :

```typescript
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />  {/* ← Les pages s'affichent ici */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
```

**Configuration des routes dans App.tsx** :

```typescript
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
```

**Explication** :
- `<Route path="/" element={<Layout />}>` : Layout est la coquille
- `<Route index ...>` : Route par défaut (/)
- `<Route path="menu" ...>` : /menu
- `<Route path="*" ...>` : 404 pour toutes les autres routes

##### Navigation avec Link

**Modifier Header.tsx** :

```typescript
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>🌮 Food Truck Paradise</h1>
        </Link>
        <nav>
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/cart" className="nav-link">Panier</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
```

**IMPORTANT** : 

```typescript
// ❌ FAUX - Recharge la page
<a href="/menu">Menu</a>

// ✅ BON - Navigation sans rechargement
<Link to="/menu">Menu</Link>
```

**Démonstration** :
1. Utiliser `<a href>` → Montrer le rechargement
2. Changer pour `<Link to>` → Montrer la navigation fluide

**NavLink pour les liens actifs** :

```typescript
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <NavLink 
        to="/"
        className={({ isActive }) => 
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Accueil
      </NavLink>
      
      <NavLink 
        to="/menu"
        className={({ isActive }) => 
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Menu
      </NavLink>
    </nav>
  );
}
```

**CSS pour .active** :

```css
.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background 0.3s;
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
```

##### Exercice navigation

**Exercice 1 : Créer les pages manquantes (20 min)**

```typescript
// Consignes :
// 1. Créer AboutPage.tsx avec informations sur le foodtruck
// 2. Ajouter un lien dans la navigation
// 3. Créer la route dans App.tsx
// 4. Styliser la page

// AboutPage.tsx
function AboutPage() {
  return (
    <div className="about-page">
      {/* TODO: Ajouter du contenu */}
    </div>
  );
}
```

**Points à vérifier** :
- [ ] Page créée
- [ ] Route configurée
- [ ] Lien dans le Header
- [ ] Navigation fonctionne

---

#### PAUSE (20 min)

---

#### useNavigate & useParams
**Format** : Live coding + Exercices

##### Navigation programmatique avec useNavigate

**Cas d'usage** : Rediriger après une action (clic, submit, etc.)

**Exemple basique** :

```typescript
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Faire la connexion...
    
    // Rediriger vers l'accueil
    navigate('/');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Se connecter</button>
    </form>
  );
}
```

**Différents usages** :

```typescript
function Examples() {
  const navigate = useNavigate();
  
  // Navigation simple
  const goToMenu = () => {
    navigate('/menu');
  };
  
  // Navigation avec remplacement (pas d'entrée dans l'historique)
  const replaceHome = () => {
    navigate('/', { replace: true });
  };
  
  // Navigation arrière
  const goBack = () => {
    navigate(-1);  // Équivalent du bouton "retour"
  };
  
  // Navigation avec état (passer des données)
  const goWithState = () => {
    navigate('/menu', {
      state: { from: 'homepage', promo: true }
    });
  };
  
  return (
    <div>
      <button onClick={goToMenu}>Menu</button>
      <button onClick={goBack}>← Retour</button>
    </div>
  );
}
```

**Cas pratique : Rediriger après ajout au panier**

```typescript
function MenuCard({ item }: MenuCardProps) {
  const navigate = useNavigate();
  
  const handleAddAndView = () => {
    addToCart(item);
    navigate('/cart');  // Aller au panier après ajout
  };
  
  return (
    <div>
      <button onClick={handleAddToCart}>Ajouter</button>
      <button onClick={handleAddAndView}>Ajouter et voir panier</button>
    </div>
  );
}
```

##### Routes dynamiques avec useParams

**Définir une route avec paramètre** :

```typescript
// Dans App.tsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="menu" element={<MenuPage />} />
    <Route path="menu/:itemId" element={<ItemDetailPage />} />
    {/*                ↑ paramètre dynamique */}
    <Route path="cart" element={<CartPage />} />
  </Route>
</Routes>
```

**Créer ItemDetailPage.tsx** :

```typescript
import { useParams, useNavigate } from 'react-router-dom';
import { menuItems } from '../data/menuData';

function ItemDetailPage() {
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();
  
  // Trouver l'item correspondant
  const item = menuItems.find(item => item.id === itemId);
  
  // Si l'item n'existe pas
  if (!item) {
    return (
      <div className="not-found">
        <h2>Produit non trouvé</h2>
        <p>Ce produit n'existe pas ou a été supprimé.</p>
        <button onClick={() => navigate('/menu')}>
          ← Retour au menu
        </button>
      </div>
    );
  }
  
  return (
    <div className="item-detail">
      <button onClick={() => navigate('/menu')} className="btn-back">
        ← Retour
      </button>
      
      <div className="detail-content">
        <div className="detail-image">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        
        <div className="detail-info">
          <h1>{item.name}</h1>
          
          <div className="badges">
            {item.isVegetarian && <span className="badge">🌱 Végétarien</span>}
            {item.isNew && <span className="badge">✨ Nouveau</span>}
          </div>
          
          <p className="description">{item.description}</p>
          
          <div className="price-section">
            <span className="price">{item.price.toFixed(2)}€</span>
            <button 
              className="btn-add-large"
              onClick={() => {
                addToCart(item);
                navigate('/cart');
              }}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailPage;
```

**Créer les liens vers les pages détail** :

**Dans MenuCard.tsx** :

```typescript
import { Link } from 'react-router-dom';

function MenuCard({ item, onAddToCart }: MenuCardProps) {
  return (
    <div className="menu-card">
      <Link to={`/menu/${item.id}`}>
        <img src={item.imageUrl} alt={item.name} />
        <h3>{item.name}</h3>
      </Link>
      
      <p className="description">{item.description}</p>
      <p className="price">{item.price}€</p>
      
      <button onClick={() => onAddToCart(item)}>
        Ajouter
      </button>
    </div>
  );
}
```

**Tester ensemble** :
1. Cliquer sur une carte → Page détail s'affiche
2. URL change : `/menu/1`, `/menu/2`, etc.
3. Bouton retour fonctionne

##### Exercice routes dynamiques

**Exercice 2 : Page de catégorie**

```typescript
// Consignes :
// 1. Créer une route /menu/category/:categoryName
// 2. Créer CategoryPage.tsx qui affiche les plats de cette catégorie
// 3. Ajouter des liens dans HomePage vers chaque catégorie

// CategoryPage.tsx
import { useParams } from 'react-router-dom';
import { menuItems } from '../data/menuData';

function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  // TODO: Filtrer les items par catégorie
  // TODO: Afficher la liste
  // TODO: Gérer le cas où la catégorie n'existe pas
}
```

**Points à implémenter** :
- [ ] Route configurée
- [ ] Filtrage des produits
- [ ] Affichage de la grille
- [ ] Gestion d'erreur si catégorie invalide
- [ ] Liens depuis HomePage

**Solution fournie après 35 minutes**.

---

#### PAUSE DÉJEUNER

---

### APRÈS-MIDI

#### Le problème du Prop Drilling
**Format** : Présentation + Démonstration du problème

##### Exercice : Vivre le Prop Drilling (20 min)

**Objectif pédagogique** : Les étudiants doivent **ressentir la frustration** avant d'apprendre la solution.

**Consigne** :
"Maintenant qu'on a plusieurs pages, essayez de passer l'état du panier (cart, addToCart, removeFromCart, etc.) depuis App.tsx vers tous les composants qui en ont besoin."

**Arborescence actuelle** :

```
App.tsx (état du panier ici)
├── Layout
│   ├── Header (besoin de cart pour badge)
│   ├── Outlet
│   │   ├── HomePage
│   │   ├── MenuPage
│   │   │   └── Menu
│   │   │       └── MenuCard (besoin de addToCart)
│   │   ├── ItemDetailPage (besoin de addToCart)
│   │   └── CartPage (besoin de cart, updateQuantity, removeFromCart)
│   └── Footer
```

**Le problème va devenir évident** :

```typescript
// App.tsx
function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Fonctions du panier
  const addToCart = (item: MenuItem) => { /* ... */ };
  const removeFromCart = (id: string) => { /* ... */ };
  const updateQuantity = (id: string, qty: number) => { /* ... */ };
  
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout 
            cart={cart}           // ← Passer au Layout
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        }
      >
        <Route 
          index 
          element={<HomePage />} 
        />
        <Route 
          path="menu" 
          element={
            <MenuPage             // ← Puis à MenuPage
              addToCart={addToCart}
            />
          } 
        />
        {/* Et ainsi de suite... 😫 */}
      </Route>
    </Routes>
  );
}
```

**Laisser les étudiants essayer pendant 15 minutes** (ils vont bloquer).

##### Diagnostic du problème

**Demander au groupe** :
- "Comment vous sentez-vous ?"
- "Qu'est-ce qui est frustrant ?"

**Problèmes identifiés** :
1. 😫 Code très verbeux
2. 🔄 Props passées à travers des composants qui ne les utilisent pas
3. 🐛 Difficile à maintenir
4. 📝 TypeScript devient pénible (props partout)
5. 🔀 Composants couplés à la structure

**Annonce** :
"Il y a une solution élégante à ce problème : **Context API** !"

---

#### Context API : État Global
**Format** : Live coding progressif

##### Concept du Context

**Analogie** :
"Context est comme une **radio FM**.
- Le Provider est l'émetteur
- Les composants qui consomment sont des récepteurs
- Tous les récepteurs captent le même signal
- Pas besoin de passer le signal de main en main !"

**Schéma au tableau** :

```
Sans Context (Prop Drilling):
App → Layout → Header (besoin de cart)
  └→ props → props → enfin utilisé ❌

Avec Context:
App (Provider)
├→ Layout
│  └→ Header ← accès direct au cart ✅
└→ MenuPage
   └→ MenuCard ← accès direct à addToCart ✅
```

**Vocabulaire** :
- **createContext** : Créer le context
- **Provider** : Fournir les valeurs
- **useContext** : Consommer les valeurs

##### Implémentation du CartContext

**Créer `src/context/CartContext.tsx`** :

```typescript
import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, MenuItem } from '../types';

// 1. Définir le type du context
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

// 2. Créer le context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Créer le Provider
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const addToCart = (item: MenuItem) => {
    const existing = cart.find(cartItem => cartItem.item.id === item.id);
    
    if (existing) {
      setCart(cart.map(cartItem =>
        cartItem.item.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { item, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (itemId: string) => {
    setCart(cart.filter(cartItem => cartItem.item.id !== itemId));
  };
  
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(cartItem =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      ));
    }
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  const total = cart.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );
  
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // 4. Valeur fournie par le Provider
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    itemCount
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// 5. Hook personnalisé pour utiliser le context
export function useCart() {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
}
```

**Expliquer chaque partie** :
1. Interface : Définit ce que le context fournit
2. createContext : Crée le "canal de communication"
3. Provider : Composant qui "émet" les valeurs
4. value : L'objet avec toutes les données/fonctions
5. useCart : Hook custom pour faciliter l'usage

##### Utiliser le CartContext

**Envelopper l'app dans le Provider** :

**Dans main.tsx** :

```typescript
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
```

**Consommer dans Header.tsx** :

```typescript
import { useCart } from '../context/CartContext';

function Header() {
  const { itemCount } = useCart();  // ✨ Accès direct !
  
  return (
    <header>
      <nav>
        <Link to="/cart">
          🛒 Panier
          {itemCount > 0 && (
            <span className="badge">{itemCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}
```

**Consommer dans MenuCard.tsx** :

```typescript
import { useCart } from '../context/CartContext';

function MenuCard({ item }: MenuCardProps) {
  const { addToCart } = useCart();  // ✨ Accès direct !
  
  return (
    <div className="menu-card">
      <h3>{item.name}</h3>
      <button onClick={() => addToCart(item)}>
        Ajouter
      </button>
    </div>
  );
}
```

**Consommer dans CartPage.tsx** :

```typescript
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, total } = useCart();
  
  return (
    <div>
      <h1>Votre Panier</h1>
      {cart.map(item => (
        <div key={item.item.id}>
          <h3>{item.item.name}</h3>
          <button onClick={() => updateQuantity(item.item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.item.id, item.quantity + 1)}>+</button>
          <button onClick={() => removeFromCart(item.item.id)}>🗑️</button>
        </div>
      ))}
      <h2>Total : {total.toFixed(2)}€</h2>
    </div>
  );
}
```

**Montrer la magie** :
"Regardez : plus besoin de passer les props ! Chaque composant accède directement au panier."

---

#### PAUSE (15 min)

---

#### useReducer pour état complexe
**Format** : Présentation + Refactoring

##### Introduction à useReducer

**Pourquoi useReducer ?**

Quand l'état devient complexe avec plusieurs actions, useReducer est plus approprié que useState.

**Comparaison** :

```typescript
// ❌ Avec useState - Beaucoup de fonctions séparées
const [cart, setCart] = useState([]);

const addToCart = (item) => { /* ... */ };
const removeFromCart = (id) => { /* ... */ };
const updateQuantity = (id, qty) => { /* ... */ };
const clearCart = () => { /* ... */ };

// ✅ Avec useReducer - Logique centralisée
const [cart, dispatch] = useReducer(cartReducer, []);

dispatch({ type: 'ADD_ITEM', payload: item });
dispatch({ type: 'REMOVE_ITEM', payload: id });
dispatch({ type: 'UPDATE_QUANTITY', payload: { id, qty } });
dispatch({ type: 'CLEAR_CART' });
```

**Avantages** :
- 📋 Toute la logique au même endroit
- 🎯 Actions explicites et nommées
- 🧪 Plus facile à tester
- 📝 Mieux pour les états complexes

**Anatomie de useReducer** :

```typescript
// 1. Types d'actions
type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET'; payload: number };

// 2. Reducer (pure function)
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'SET':
      return action.payload;
    default:
      return state;
  }
}

// 3. Utilisation
const [count, dispatch] = useReducer(reducer, 0);
//      ↑       ↑                      ↑      ↑
//   valeur  dispatcher            reducer  initial
```

##### Refactoring du CartContext avec useReducer

**Créer le reducer** :

```typescript
// Types d'actions
type CartAction =
  | { type: 'ADD_ITEM'; payload: MenuItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// Reducer
function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(item => item.item.id === action.payload.id);
      
      if (existing) {
        return state.map(item =>
          item.item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...state, { item: action.payload, quantity: 1 }];
    }
    
    case 'REMOVE_ITEM': {
      return state.filter(item => item.item.id !== action.payload);
    }
    
    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload;
      
      if (quantity <= 0) {
        return state.filter(item => item.item.id !== itemId);
      }
      
      return state.map(item =>
        item.item.id === itemId
          ? { ...item, quantity }
          : item
      );
    }
    
    case 'CLEAR_CART': {
      return [];
    }
    
    default:
      return state;
  }
}
```

**Refactoring du CartProvider** :

```typescript
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  
  const addToCart = (item: MenuItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };
  
  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };
  
  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  // Calculs dérivés (comme avant)
  const total = cart.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );
  
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    itemCount
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
```

**⚠️ Règles du reducer** :
1. **Pure function** : Pas d'effets de bord
2. **Retourner un nouvel état** : Toujours créer un nouveau tableau/objet
3. **Ne jamais muter** : Immutabilité stricte
4. **Default case** : Toujours retourner l'état actuel par défaut

**Montrer que l'interface reste la même** :
"Pour les composants qui utilisent `useCart`, rien ne change ! C'est l'avantage de cette architecture."

---

#### App.tsx simplifié & Récapitulatif

##### App.tsx ultra simple

**Avant (avec prop drilling)** :

```typescript
// 😫 Code verbeux avec props partout
function App() {
  const [cart, setCart] = useState([]);
  const addToCart = () => { /* ... */ };
  const removeFromCart = () => { /* ... */ };
  
  return (
    <Routes>
      <Route path="/" element={<Layout cart={cart} addToCart={addToCart} ... />}>
        <Route path="menu" element={<MenuPage addToCart={addToCart} ... />} />
        {/* Props partout 😫 */}
      </Route>
    </Routes>
  );
}
```

**Après (avec Context)** :

```typescript
// ✨ Code propre et simple
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:itemId" element={<ItemDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
```

**Montrer la différence** : Compter les lignes de code.

##### Récapitulatif & Questions

**Quiz rapide** :

1. Quelle est la différence entre une app traditionnelle et une SPA ?
2. Comment naviguer sans rechargement ? → `<Link>`
3. Comment accéder à un paramètre d'URL ? → `useParams`
4. Qu'est-ce que le prop drilling ?
5. À quoi sert Context API ?
6. Quelle est la différence entre useState et useReducer ?

**Ce qu'on a appris** :

✅ React Router pour navigation multi-pages  
✅ Link, useNavigate, useParams  
✅ Routes dynamiques  
✅ Context API pour éviter prop drilling  
✅ useReducer pour état complexe  
✅ Architecture propre avec Context  

**Teaser Jour 4** :

"Demain, on finalise l'application :
- useEffect pour les données asynchrones
- Appels API
- Formulaire de commande complet
- Et on **déploie en ligne** ! 🚀"

---

## 📚 Ressources & Devoirs

### Devoirs

1. **Ajouter une page "Mes Favoris"** avec Context
2. **Thème clair/sombre** avec ThemeContext
3. **Page "Historique des commandes"**
4. **Améliorer ItemDetailPage** avec plus d'infos

### Lectures

- [React Router - Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [React - Context](https://react.dev/learn/passing-data-deeply-with-context)
- [React - useReducer](https://react.dev/reference/react/useReducer)

---

## 🎯 Critères d'Évaluation

**Niveau 1** ⭐
- [ ] Créer des routes simples
- [ ] Utiliser Link pour naviguer
- [ ] Créer un Context basique

**Niveau 2** ⭐⭐
- [ ] Routes dynamiques avec useParams
- [ ] Navigation programmatique
- [ ] Context avec plusieurs valeurs
- [ ] Refactoring de prop drilling

**Niveau 3** ⭐⭐⭐
- [ ] useReducer pour état complexe
- [ ] Architecture propre avec Context
- [ ] Gestion d'erreurs (404, etc.)
- [ ] Code organisé et maintenable

---

## 📝 Notes Formateur

### Points critiques

1. **Faire vivre le prop drilling** avant Context (important !)
2. **Montrer la simplicité de useContext** pour les convaincre
3. **useReducer peut être intimidant** : Aller doucement
4. **TypeScript avec Context** : Bien typer le context

### Adaptations

**Si en avance** :
- Multiple Contexts (Theme + Cart)
- Composition de Providers
- Patterns avancés

**Si en retard** :
- Simplifier useReducer (rester sur useState)
- Donner plus de code starter
- Focus sur Context essentials

---

**Fin du support Jour 3** 🎉

[→ Jour 4 : useEffect, API & Déploiement](../jour-4/README.md)
