# Cheat Sheet JavaScript ES6+ pour React

## 📦 JavaScript ES6+ Essentiels

### Variables

```javascript
// let - variable réassignable, scope de bloc
let count = 0;
count = 1; // ✅

// const - constante, non réassignable
const name = "Marie";
name = "Jean"; // ❌ Erreur !

// const avec objets/tableaux - la référence est constante, pas le contenu
const user = { name: "Marie" };
user.name = "Jean"; // ✅ Modification de propriété OK
user = {}; // ❌ Réassignation interdite
```

### Arrow Functions

```javascript
// Fonction classique
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Avec plusieurs instructions
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Sans paramètres
const greet = () => console.log("Hello");

// Un seul paramètre (parenthèses optionnelles)
const double = (x) => x * 2;

// Retour d'objet (entourer de parenthèses)
const makeUser = (name) => ({ name, age: 25 });
```

### Template Literals

```javascript
const name = "Marie";
const age = 25;

// Interpolation
const message = `Bonjour ${name}, vous avez ${age} ans`;

// Multi-lignes
const html = `
  <div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;

// Expressions
const info = `Dans 5 ans, j'aurai ${age + 5} ans`;
```

### Destructuring

```javascript
// Objets
const user = { name: "Marie", age: 25, city: "Paris" };
const { name, age } = user;

// Avec renommage
const { name: userName } = user;

// Valeur par défaut
const { country = "France" } = user;

// Tableaux
const fruits = ["pomme", "banane", "orange"];
const [first, second] = fruits;

// Rest operator
const [head, ...tail] = fruits;
console.log(tail); // ["banane", "orange"]
```

### Spread Operator

```javascript
// Copie de tableau
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Fusion de tableaux
const merged = [...arr1, ...arr2];

// Copie d'objet
const user = { name: "Marie", age: 25 };
const userCopy = { ...user };

// Fusion d'objets
const address = { city: "Paris", country: "France" };
const fullUser = { ...user, ...address };

// Override de propriétés
const updated = { ...user, age: 26 }; // age devient 26

// Spread dans les paramètres de fonction
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10
```

### Méthodes de Tableaux

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - Transformer chaque élément
const doubled = numbers.map((n) => n * 2);
// [2, 4, 6, 8, 10]

// filter - Garder certains éléments
const evens = numbers.filter((n) => n % 2 === 0);
// [2, 4]

// find - Trouver un élément
const found = numbers.find((n) => n > 3);
// 4

// findIndex - Trouver l'index
const index = numbers.findIndex((n) => n > 3);
// 3

// some - Au moins un élément vérifie la condition
const hasEven = numbers.some((n) => n % 2 === 0);
// true

// every - Tous les éléments vérifient la condition
const allPositive = numbers.every((n) => n > 0);
// true

// reduce - Réduire à une seule valeur
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// forEach - Itérer (pas de retour)
numbers.forEach((n) => console.log(n));

// includes - Vérifier la présence
const hasThree = numbers.includes(3);
// true
```

### Promises & Async/Await

```javascript
// Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "Hello" });
    }, 1000);
  });
};

// Utilisation avec .then()
fetchData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Async/Await
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Plusieurs appels parallèles
async function getMultiple() {
  const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
}
```

### Optional Chaining & Nullish Coalescing

```javascript
// Optional chaining (?.)
const user = { name: "Marie", address: { city: "Paris" } };

// Sans optional chaining
const cityLegacy = user && user.address && user.address.city;

// Avec optional chaining
const city = user?.address?.city; // "Paris"
const zip = user?.address?.zip; // undefined

// Nullish coalescing (??)
const value1 = null ?? "default"; // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default"; // 0
const value4 = "" ?? "default"; // ""

// Différence avec ||
const value5 = 0 || "default"; // "default"
const value6 = 0 ?? "default"; // 0
```

---

## ⚛️ Patterns Courants pour React (en JavaScript)

### Props

```jsx
function Button({ text, variant = "primary", onClick }) {
  return (
    <button className={variant} onClick={onClick}>
      {text}
    </button>
  );
}
```

### Événements

```jsx
function SearchInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Rechercher…"
    />
  );
}
```

### useState (privilégier la forme fonctionnelle)

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
```

---

## 🚀 Astuces & Best Practices

### Immutabilité

```javascript
// ❌ Mutation
const arr = [1, 2, 3];
arr.push(4); // Mutation !

const obj = { name: "Marie" };
obj.age = 25; // Mutation !

// ✅ Immutabilité
const newArr = [...arr, 4];
const newObj = { ...obj, age: 25 };

// Modifier un élément de tableau
const items = [1, 2, 3, 4, 5];
const updated = items.map((item) => (item === 3 ? 10 : item)); // [1, 2, 10, 4, 5]

// Supprimer un élément
const removed = items.filter((item) => item !== 3);
// [1, 2, 4, 5]
```

### Fonctions pures

```javascript
// ❌ Impure (modifie l'input)
function addItem(arr, item) {
  arr.push(item);
  return arr;
}

// ✅ Pure (retourne un nouveau tableau)
function addItem(arr, item) {
  return [...arr, item];
}
```

### Early return

```javascript
// ❌ Nested if
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return user.data;
      }
    }
  }
  return null;
}

// ✅ Early return
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  if (!user.hasPermission) return null;
  return user.data;
}
```

---

**Cette cheat sheet couvre l'essentiel de JavaScript ES6+ pour React. Gardez-la à portée de main !**
