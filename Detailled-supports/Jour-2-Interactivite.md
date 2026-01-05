# JOUR 2 : Interactivité et État Local - useState

## 📊 Vue d'ensemble

**Durée totale** : 7 heures (3h30 matin + 3h30 après-midi)  
**Niveau** : Intermédiaire  
**Prérequis** : Jour 1 complété (composants, props, JSX)

---

## 🎯 Objectifs Pédagogiques

À la fin de cette journée, les étudiants seront capables de :

### Connaissances (Savoir)

- [ ] Expliquer ce qu'est l'état (state) et pourquoi il existe
- [ ] Comprendre le fonctionnement de useState
- [ ] Différencier état et props
- [ ] Expliquer l'immutabilité en React
- [ ] Comprendre le concept de "lifting state up"

### Compétences (Savoir-faire)

- [ ] Utiliser useState pour créer un état local
- [ ] Gérer les événements utilisateur (click, change, submit)
- [ ] Mettre à jour l'état de manière immuable
- [ ] Créer des formulaires contrôlés
- [ ] Implémenter un panier d'achat fonctionnel
- [ ] Filtrer et rechercher des données

### Attitudes (Savoir-être)

- [ ] Penser en termes d'état et de flux de données
- [ ] Comprendre l'importance de l'immutabilité
- [ ] Déboguer efficacement les problèmes d'état

---

## ⏰ Planning Détaillé

### 🌅 MATIN (08h00 - 12h00)

#### 08h00 - 08h15 | Accueil & Révisions (15 min)

**Format** : Discussion + Quiz

**Révision rapide jour 1** :

**Questions posées au groupe** :

1. "Qui peut me dire ce qu'est un composant ?" (Réponse attendue: fonction qui retourne du JSX)
2. "Comment passe-t-on des données d'un parent à un enfant ?" (Props)
3. "Peut-on modifier les props ?" (Non, elles sont immuables)
4. "Pourquoi utilise-t-on key dans les listes ?" (Pour que React identifie chaque élément)

**Annonce du jour** :
"Hier, notre site était **statique**. Aujourd'hui, on va le rendre **interactif** ! On va ajouter un panier, des filtres, une recherche. Pour ça, on a besoin d'une nouvelle notion : **l'état**."

---

#### 08h15 - 09h15 | Comprendre l'État (State) (1h)

**Format** : Présentation + Live coding + Exercices

##### 08h15 - 08h35 | Qu'est-ce que l'État ? (20 min)

**Problème à démontrer (LIVE)** :

```jsx
// ❌ Ceci ne fonctionne PAS
function Counter() {
  let count = 0; // Variable JavaScript normale

  const handleClick = () => {
    count = count + 1;
    console.log(count); // ✅ S'affiche dans la console
    // ❌ Mais l'interface ne se met PAS à jour !
  };

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}
```

**Lancer le code et montrer** : Le compteur dans la console augmente, mais pas à l'écran.

**Question au groupe** : "Pourquoi l'interface ne se met pas à jour ?"

**Réponse** : React ne sait pas que `count` a changé. Il ne re-rend pas le composant.

**Solution : useState** :

```jsx
import { useState } from "react";

// ✅ Ceci fonctionne !
function Counter() {
  const [count, setCount] = useState(0); // ← Hook useState

  const handleClick = () => {
    setCount(count + 1); // ← Mettre à jour avec setCount
    // React re-rend automatiquement !
  };

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}
```

**Lancer et montrer** : Maintenant ça marche !

**Analogie** :
"L'état c'est la **mémoire** du composant. Quand la mémoire change, React met à jour l'affichage automatiquement."

##### 08h35 - 08h55 | Syntaxe de useState (20 min)

**Anatomie de useState** :

```jsx
const [valeur, setValeur] = useState(valeurInitiale);
//      ↑        ↑                     ↑
//   Valeur   Fonction            Valeur au
//  actuelle  pour MAJ         premier rendu
```

**Exemples de différents types** :

```jsx
// Nombre
const [count, setCount] = useState(0);

// String
const [name, setName] = useState("");

// Boolean
const [isOpen, setIsOpen] = useState(false);

// Tableau
const [items, setItems] = useState([]);

// Objet
const [user, setUser] = useState({ name: "", age: 0 });

// Valeur calculée (lazy initialization)
const [expensiveValue, setExpensiveValue] = useState(() => {
  return computeExpensiveValue(); // Appelé une seule fois
});
```

**⚠️ Règles critiques de l'état** :

**Règle 1 : Ne JAMAIS muter directement**

```jsx
const [items, setItems] = useState([1, 2, 3]);

// ❌ INTERDIT - Mutation directe
items.push(4); // Ne déclenche PAS de re-rendu
setItems(items); // React ne voit pas le changement (même référence)

// ✅ CORRECT - Créer un nouveau tableau
setItems([...items, 4]); // Nouveau tableau, React détecte le changement
```

**Démonstration live du bug** :

- Faire la mauvaise façon
- Montrer que rien ne se passe
- Corriger avec spread operator
- Montrer que ça marche

**Règle 2 : setState est asynchrone**

```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count); // ⚠️ Affiche encore 0 (ancienne valeur)
  // La mise à jour sera visible au prochain rendu
};
```

**Règle 3 : État capturé dans les closures**

```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1); // count = 0 ici
  setCount(count + 1); // count = 0 ici aussi !
  // Résultat : count devient 1, pas 2 !
};

// ✅ Solution : Fonction de mise à jour
const handleClickCorrect = () => {
  setCount((prev) => prev + 1); // prev = valeur actuelle
  setCount((prev) => prev + 1); // Maintenant count devient 2 !
};
```

**Démonstration live** : Créer les deux versions et montrer la différence.

##### 08h55 - 09h15 | Exercices useState de base (20 min)

**🎯 Exercice 1 : Toggle (5 min)**

```jsx
// Consigne : Créer un bouton qui affiche/cache du texte
function Toggle() {
  // TODO: useState pour gérer l'état ouvert/fermé

  return (
    <div>
      <button>Toggle</button>
      {/* Afficher "Contenu visible" seulement si ouvert */}
    </div>
  );
}
```

**Solution** :

```jsx
function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Fermer" : "Ouvrir"}
      </button>
      {isOpen && <p>Contenu visible !</p>}
    </div>
  );
}
```

**🎯 Exercice 2 : Input contrôlé (10 min)**

```jsx
// Consigne : Créer un input qui affiche en temps réel ce qu'on tape
function NameInput() {
  // TODO: useState pour le nom

  return (
    <div>
      <input type="text" placeholder="Votre nom" />
      <p>Bonjour {/* nom */} !</p>
    </div>
  );
}
```

**Solution** :

```jsx
function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Votre nom"
      />
      <p>Bonjour {name || "inconnu"} !</p>
    </div>
  );
}
```

**🎯 Exercice 3 : Compteur avec plusieurs boutons (5 min)**

```jsx
// Consigne : Compteur avec +1, -1, +10, Reset
function Counter() {
  // TODO: Implémenter
}
```

**Passer dans les rangs** pour vérifier la compréhension.

---

#### 09h15 - 10h15 | Gestion des événements (1h)

**Format** : Présentation + Exercices pratiques

##### 09h15 - 09h40 | Événements de base (25 min)

**Types d'événements courants** :

```jsx
function EventExamples() {
  // Click
  const handleClick = () => {
    console.log("Cliqué !");
  };

  // Double click
  const handleDoubleClick = () => {
    console.log("Double clic !");
  };

  // Mouse enter/leave
  const handleMouseEnter = () => {
    console.log("Souris entrée");
  };

  // Key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Touche Entrée !");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Cliquer</button>
      <button onDoubleClick={handleDoubleClick}>Double cliquer</button>
      <div onMouseEnter={handleMouseEnter}>Survolez-moi</div>
      <input onKeyPress={handleKeyPress} />
    </div>
  );
}
```

**❌ Erreur TRÈS courante** :

```jsx
// ❌ FAUX - Appel immédiat de la fonction
<button onClick={handleClick()}>Cliquer</button>
// La fonction s'exécute au rendu, pas au clic !

// ✅ CORRECT - Référence à la fonction
<button onClick={handleClick}>Cliquer</button>

// ✅ CORRECT - Arrow function (si besoin de passer des arguments)
<button onClick={() => handleClick()}>Cliquer</button>
```

**Démonstration du bug** :

```jsx
function BadExample() {
  const handleClick = () => {
    console.log("Cliqué");
  };

  // ❌ Mauvais
  return <button onClick={handleClick()}>Bug</button>;
  // La console affiche "Cliqué" immédiatement au rendu !
}
```

**Passer des arguments aux handlers** :

```jsx
function ItemList() {
  const items = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
  ];

  const handleDelete = (id) => {
    console.log("Supprimer", id);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          {/* ✅ Arrow function pour passer l'argument */}
          <button onClick={() => handleDelete(item.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
}
```

##### 09h40 - 10h00 | Événements de formulaire (20 min)

**Pattern du formulaire contrôlé** :

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Change event
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Submit event
  const handleSubmit = (e) => {
    e.preventDefault(); // ⚠️ IMPORTANT : empêche rechargement
    console.log("Login avec", email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
      />
      <button type="submit">Se connecter</button>
    </form>
  );
}
```

**⚠️ Point CRITIQUE** : `e.preventDefault()` dans les formulaires !

**Démonstration** : Oublier `e.preventDefault()` → La page recharge.

**Événements React (rappel)** :

```jsx
// Input, textarea, select
const handleChange = (e) => {
  console.log(e.target.value);
};

// Form submit
const handleSubmit = (e) => {
  e.preventDefault();
};

// Button click
const handleClick = (e) => {
  console.log(e.currentTarget);
};

// Keyboard
const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    // ...
  }
};
```

##### 10h00 - 10h15 | Exercice événements (15 min)

**🎯 Exercice 4 : Calculatrice simple**

```jsx
// Consigne : Créer une calculatrice avec 2 inputs et 4 opérations
function Calculator() {
  // TODO:
  // - 2 inputs pour les nombres
  // - 4 boutons : +, -, *, /
  // - Afficher le résultat
}
```

**Solution à donner après 10 minutes** :

```jsx
function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const calculate = (operation) => {
    switch (operation) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num2 !== 0 ? num1 / num2 : 0);
        break;
    }
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <div>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>×</button>
        <button onClick={() => calculate("/")}>÷</button>
      </div>
      <p>Résultat : {result}</p>
    </div>
  );
}
```

---

#### ☕ 10h15 - 10h30 | PAUSE (15 min)

---

#### 10h30 - 12h00 | Immutabilité et mises à jour complexes (1h30)

**Format** : Présentation approfondie + Exercices

##### 10h30 - 11h00 | Immutabilité avec les tableaux (30 min)

**Pourquoi l'immutabilité ?**
"React compare les références d'objets. Si la référence ne change pas, React pense que rien n'a changé."

**Opérations sur les tableaux** :

```jsx
const [items, setItems] = useState([1, 2, 3]);

// ✅ AJOUTER un élément
setItems([...items, 4]); // [1, 2, 3, 4]
setItems([0, ...items]); // [0, 1, 2, 3]

// ✅ SUPPRIMER un élément (filter)
setItems(items.filter((item) => item !== 2)); // [1, 3]

// ✅ MODIFIER un élément (map)
setItems(items.map((item) => (item === 2 ? 20 : item))); // [1, 20, 3]

// ✅ REMPLACER complètement
setItems([10, 20, 30]);
```

**Exemple avec objets dans un tableau** :

```jsx
const [todos, setTodos] = useState([]);

// Ajouter une todo
const addTodo = (text) => {
  const newTodo = {
    id: Date.now().toString(),
    text,
    completed: false,
  };
  setTodos([...todos, newTodo]);
};

// Marquer comme complétée
const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed } // ✅ Spread pour copier
        : todo
    )
  );
};

// Supprimer
const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

**Live coding** : Implémenter ces 3 fonctions ensemble.

##### 11h00 - 11h20 | Immutabilité avec les objets (20 min)

**Mise à jour d'objet** :

```jsx
const [user, setUser] = useState({
  name: "Marie",
  age: 25,
  address: { city: "Paris", zip: "75001" },
});

// ✅ Modifier une propriété de premier niveau
setUser({ ...user, age: 26 });

// ✅ Modifier une propriété nested
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Lyon",
  },
});

// ❌ FAUX - Mutation
user.age = 26; // Ne déclenche PAS de re-rendu
setUser(user); // React ne voit pas le changement
```

**Pattern utile** : Fonction helper

```jsx
const updateUser = (field, value) => {
  setUser({ ...user, [field]: value });
};

// Utilisation
updateUser("age", 26);
updateUser("name", "Jean");
```

##### 11h20 - 12h00 | Exercices immutabilité (40 min)

**🎯 Exercice 5 : Todo List (30 min)**

```jsx
// Consigne : Créer une todo list complète
// Fonctionnalités :
// - Input pour ajouter une todo
// - Liste des todos
// - Checkbox pour marquer comme fait
// - Bouton supprimer
// - Compteur de todos restantes

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // TODO: Implémenter les fonctions
  const addTodo = () => {
    // ...
  };

  const toggleTodo = (id) => {
    // ...
  };

  const deleteTodo = (id) => {
    // ...
  };

  return <div>{/* TODO: Interface */}</div>;
}
```

**Passer dans les rangs** pour aider.

**Correction collective** après 25 minutes.

---

#### 12h00 - 13h00 | 🍽️ PAUSE DÉJEUNER

---

### 🌆 APRÈS-MIDI (13h00 - 17h00)

#### 13h00 - 13h30 | Lifting State Up (30 min)

**Format** : Présentation + Démonstration

##### Le problème (10 min)

**Scénario** : Deux composants ont besoin du même état.

```jsx
// ❌ Problème - États séparés
function ComponentA() {
  const [count, setCount] = useState(0);
  return <div>A: {count}</div>;
}

function ComponentB() {
  const [count, setCount] = useState(0); // ← État différent !
  return <div>B: {count}</div>;
}

// A et B ne sont pas synchronisés
```

##### La solution (20 min)

**Principe** : Remonter l'état dans le parent commun.

```jsx
// ✅ Solution - État partagé dans le parent
function Parent() {
  const [count, setCount] = useState(0); // ← État ici

  return (
    <div>
      <ComponentA count={count} setCount={setCount} />
      <ComponentB count={count} setCount={setCount} />
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

function ComponentA({ count, setCount }) {
  return <div>A: {count}</div>;
}

function ComponentB({ count, setCount }) {
  return <div>B: {count}</div>;
}
```

**Question clé** : "Où placer l'état ?"

**Règle** :

- 1 composant utilise → État local
- 2+ composants utilisent → État dans le parent commun
- Toute l'app utilise → Context API (demain !)

**Live coding** : Démontrer le problème puis la solution.

---

#### 13h30 - 17h00 | 🎯 ATELIER FIL ROUGE : Panier Fonctionnel (3h30)

**Objectifs** :

- [ ] Ajouter au panier avec useState
- [ ] Badge compteur dans le header
- [ ] Filtrage par catégorie
- [ ] Barre de recherche
- [ ] Vue panier avec quantités
- [ ] Calcul du total

##### 13h30 - 14h00 | Étape 1 : État du panier dans App (30 min)

**Structure du panier** :

- Un item de panier = `{ item, quantity }`

**Initialiser l'état dans App.jsx** :

```jsx
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  // Fonction pour ajouter au panier
  const addToCart = (item) => {
    // Vérifier si l'item existe déjà
    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);

    if (existingItem) {
      // Augmenter la quantité
      setCart(
        cart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Ajouter un nouvel item
      setCart([...cart, { item, quantity: 1 }]);
    }
  };

  // Fonction pour retirer du panier
  const removeFromCart = (itemId) => {
    setCart(cart.filter((cartItem) => cartItem.item.id !== itemId));
  };

  // Fonction pour mettre à jour la quantité
  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.item.id === itemId ? { ...cartItem, quantity } : cartItem
        )
      );
    }
  };

  return <div>{/* On passera ces fonctions aux composants enfants */}</div>;
}
```

**Expliquer chaque fonction ligne par ligne** au tableau.

**⚠️ Point important** : Toute la logique du panier est centralisée ici.

##### 14h00 - 14h20 | Étape 2 : Badge compteur dans Header (20 min)

**Modifier Header.jsx** :

```jsx
function Header({ cartItemsCount }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>🌮 Food Truck Paradise</h1>
        </div>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#about">À propos</a>
          <button className="cart-button">
            🛒 Panier
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
```

**Dans App.jsx** :

```jsx
// Calculer le nombre total d'items
const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

return (
  <div>
    <Header cartItemsCount={cartItemsCount} />
    {/* ... */}
  </div>
);
```

**CSS pour le badge** :

```css
.cart-button {
  position: relative;
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #c0392b;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}
```

##### 14h20 - 14h40 | Étape 3 : Bouton Ajouter au panier (20 min)

**Modifier MenuCard.jsx** :

```jsx
import { useState } from "react";

function MenuCard({ item, onAddToCart }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    onAddToCart(item);

    // Animation de feedback
    setTimeout(() => setIsAdding(false), 500);
  };

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
          <button
            className={`btn-add ${isAdding ? "adding" : ""}`}
            onClick={handleAdd}
          >
            {isAdding ? "✅ Ajouté" : "➕ Ajouter"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
```

**Dans Menu.jsx** : Passer la fonction onAddToCart

```jsx
function Menu({ onAddToCart }) {
  return (
    <div className="menu-grid">
      {menuItems.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
          onAddToCart={onAddToCart} // ← Passer la fonction
        />
      ))}
    </div>
  );
}
```

**Tester ensemble** : Cliquer sur "Ajouter" → Le badge augmente !

---

#### ☕ 14h40 - 15h00 | PAUSE (20 min)

---

##### 15h00 - 15h40 | Étape 4 : Filtrage par catégorie (40 min)

**Modifier Menu.jsx** :

```jsx
import { useState } from "react";
import { menuItems } from "../data/menuData";
import MenuCard from "./MenuCard";

function Menu({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("tous");

  const categories = [
    { id: "tous", label: "Tous" },
    { id: "entrees", label: "🥗 Entrées" },
    { id: "plats", label: "🍔 Plats" },
    { id: "desserts", label: "🍰 Desserts" },
    { id: "boissons", label: "🥤 Boissons" },
  ];

  // ✅ Filtrer selon la catégorie active
  const filteredItems =
    activeCategory === "tous"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="menu-section">
      <div className="container">
        <h2>Notre Menu</h2>

        {/* Boutons de filtre */}
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${
                activeCategory === cat.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Affichage du nombre de résultats */}
        <p className="results-count">
          {filteredItems.length} produit{filteredItems.length > 1 ? "s" : ""}
        </p>

        {/* Grille de produits filtrés */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredItems.length === 0 && (
          <p className="no-results">Aucun produit dans cette catégorie</p>
        )}
      </div>
    </section>
  );
}

export default Menu;
```

**CSS pour les filtres** :

```css
.category-filters {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  background: white;
  border: 2px solid #ddd;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
}

.filter-btn:hover {
  border-color: #3498db;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: #3498db;
  color: white;
  border-color: #3498db;
}

.results-count {
  text-align: center;
  color: #7f8c8d;
  margin: 1rem 0;
}
```

**Tester ensemble** : Cliquer sur les catégories → Produits filtrés.

##### 15h40 - 16h20 | Étape 5 : Barre de recherche (40 min)

**Ajouter dans Menu.jsx** :

```jsx
function Menu({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("tous");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer par catégorie ET par recherche
  const filteredItems = menuItems
    .filter(
      (item) => activeCategory === "tous" || item.category === activeCategory
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section className="menu-section">
      <div className="container">
        <h2>Notre Menu</h2>

        {/* Barre de recherche */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Rechercher un plat..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button
              className="clear-search"
              onClick={() => setSearchTerm("")}
              title="Effacer"
            >
              ❌
            </button>
          )}
        </div>

        {/* Filtres de catégorie */}
        <div className="category-filters">{/* ... */}</div>

        {/* Reste du code ... */}
      </div>
    </section>
  );
}
```

**CSS pour la recherche** :

```css
.search-bar {
  position: relative;
  max-width: 500px;
  margin: 2rem auto;
}

.search-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 25px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #3498db;
}

.clear-search {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}
```

**Tester** : Rechercher "taco" → Seuls les tacos s'affichent.

##### 16h20 - 17h00 | Étape 6 : Vue panier avec quantités (40 min)

**Créer CartSummary.jsx** :

```jsx
function CartSummary({ cart, onUpdateQuantity, onRemove }) {
  const total = cart.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <p>🛒 Votre panier est vide</p>
        <p>Ajoutez des produits pour commencer !</p>
      </div>
    );
  }

  return (
    <div className="cart-summary">
      <h3>
        Votre Panier ({cart.length} produit{cart.length > 1 ? "s" : ""})
      </h3>

      <div className="cart-items">
        {cart.map((cartItem) => (
          <div key={cartItem.item.id} className="cart-item">
            <img
              src={cartItem.item.imageUrl}
              alt={cartItem.item.name}
              className="cart-item-image"
            />

            <div className="cart-item-info">
              <h4>{cartItem.item.name}</h4>
              <p className="item-price">{cartItem.item.price.toFixed(2)}€</p>
            </div>

            <div className="quantity-controls">
              <button
                onClick={() =>
                  onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)
                }
                className="qty-btn"
              >
                -
              </button>
              <span className="quantity">{cartItem.quantity}</span>
              <button
                onClick={() =>
                  onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)
                }
                className="qty-btn"
              >
                +
              </button>
            </div>

            <p className="item-subtotal">
              {(cartItem.item.price * cartItem.quantity).toFixed(2)}€
            </p>

            <button
              className="btn-remove"
              onClick={() => onRemove(cartItem.item.id)}
              title="Supprimer"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h3>Total</h3>
        <h3 className="total-amount">{total.toFixed(2)}€</h3>
      </div>

      <button className="btn-checkout">Commander</button>
    </div>
  );
}

export default CartSummary;
```

**L'afficher temporairement dans App.jsx** pour tester :

```jsx
function App() {
  const [cart, setCart] = useState([]);

  // ... fonctions addToCart, removeFromCart, updateQuantity

  return (
    <div>
      <Header cartItemsCount={cartItemsCount} />
      <main>
        <Menu onAddToCart={addToCart} />

        {/* Vue temporaire du panier pour tester */}
        {cart.length > 0 && (
          <div style={{ padding: "2rem" }}>
            <CartSummary
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
```

**Tester ensemble** :

- Ajouter des produits
- Augmenter/diminuer quantités
- Supprimer des items
- Vérifier le calcul du total

---

#### 17h00 - 17h30 | Récapitulatif & Questions (30 min)

##### Quiz rapide (10 min)

**Questions** :

1. Quelle est la syntaxe de useState ?
2. Pourquoi ne peut-on pas faire `items.push(4); setItems(items)` ?
3. Comment ajoute-t-on un élément à un tableau immuablement ?
4. Quelle est la différence entre `onClick={handleClick}` et `onClick={handleClick()}` ?
5. À quoi sert `e.preventDefault()` ?

##### Ce qu'on a appris aujourd'hui (10 min)

✅ useState pour créer un état local  
✅ L'immutabilité est ESSENTIELLE en React  
✅ Spread operator pour copier sans muter  
✅ Événements : onClick, onChange, onSubmit  
✅ Lifting state up pour partager l'état  
✅ Formulaires contrôlés

##### Teaser Jour 3 (5 min)

"Aujourd'hui on a un problème : notre application n'a qu'une seule page.

Demain, on va créer une **vraie application avec plusieurs pages** :

- Page d'accueil
- Page menu
- Page panier
- Page de commande

Et on va voir une solution au prop drilling : le **Context API** !"

##### Questions & Retours (5 min)

---

## 📚 Ressources & Devoirs

### Devoirs (optionnel)

1. **Ajouter un toggle végétarien** : Filtrer seulement les plats végé
2. **Tri** : Prix croissant/décroissant
3. **LocalStorage** : Persister le panier (on verra useEffect demain)
4. **Favoris** : Système de produits favoris

### Lectures

- [React - State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [React - Responding to Events](https://react.dev/learn/responding-to-events)
- [React - Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [React - Updating Objects in State](https://react.dev/learn/updating-objects-in-state)

---

## 🎯 Critères d'Évaluation

**Niveau 1 - Basique** ⭐

- [ ] Utiliser useState pour un type primitif
- [ ] Gérer un événement onClick
- [ ] Formulaire simple avec un input

**Niveau 2 - Intermédiaire** ⭐⭐

- [ ] Gérer un tableau avec useState
- [ ] Mise à jour immuable (spread operator)
- [ ] Formulaire contrôlé complet
- [ ] Lifting state up

**Niveau 3 - Avancé** ⭐⭐⭐

- [ ] Panier d'achat complet
- [ ] Filtrage et recherche
- [ ] Gestion d'état complexe
- [ ] Code propre et organisé

---

## 📝 Notes Formateur

### Erreurs fréquentes Jour 2

1. **Mutation directe** : `items.push()` au lieu de `[...items]`
2. **onClick={handleClick()}** : Appel immédiat
3. **Oublier e.preventDefault()** dans les formulaires
4. **Closures** : Comprendre que count est "capturé"
5. **Oublier key** dans les .map()

### Adaptations

**Si en avance** :

- Ajouter tri et filtres multiples
- LocalStorage avec useEffect (preview)
- Validation de formulaire

**Si en retard** :

- Simplifier le panier (pas de quantités)
- Donner plus de code starter
- Focus sur l'essentiel : useState + événements

---

**Fin du support Jour 2** 🎉

[→ Jour 3 : React Router & Context API](../jour-3/README.md)
