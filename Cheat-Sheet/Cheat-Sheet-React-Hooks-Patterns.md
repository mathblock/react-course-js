# Cheat Sheet React - Hooks, Patterns & Erreurs Courantes

## 🪝 Hooks React

### useState

```jsx
import { useState } from "react";

// Types primitifs
const [count, setCount] = useState(0);
const [name, setName] = useState("");
const [isOpen, setIsOpen] = useState(false);

// Tableaux
const [items, setItems] = useState([]);

// Objets
const [user, setUser] = useState({ name: "", age: 0 });

// Union types
const [status, setStatus] = useState("idle");

// Nullable
const [data, setData] = useState(null);

// Fonction d'initialisation (lazy initialization)
const [expensiveValue, setExpensiveValue] = useState(() => {
  return computeExpensiveValue();
});

// Mise à jour fonctionnelle (recommandé)
setCount((prev) => prev + 1);

// Mise à jour d'objet (immutabilité)
setUser((prev) => ({ ...prev, age: 26 }));

// Mise à jour de tableau
setItems((prev) => [...prev, newItem]); // Ajouter
setItems((prev) => prev.filter((item) => item.id !== id)); // Supprimer
setItems((prev) =>
  prev.map((item) => (item.id === id ? { ...item, name: "New" } : item))
); // Modifier
```

### useEffect

```jsx
import { useEffect } from "react";

// Au montage seulement
useEffect(() => {
  console.log("Composant monté");
}, []);

// À chaque rendu
useEffect(() => {
  console.log("Après chaque rendu");
});

// Quand les dépendances changent
useEffect(() => {
  console.log(`Count a changé: ${count}`);
}, [count]);

// Avec cleanup
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);

// Fetch de données
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [url]);

// Avec AbortController
useEffect(() => {
  const controller = new AbortController();

  fetch(url, { signal: controller.signal })
    .then((res) => res.json())
    .then(setData);

  return () => {
    controller.abort();
  };
}, [url]);
```

### useContext

```jsx
import { createContext, useContext } from "react";

// Créer le context
const ThemeContext = createContext(undefined);

// Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personnalisé
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

// Utilisation
function Button() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}
```

### useReducer

```jsx
import { useReducer } from "react";

// State et actions
// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// Utilisation
function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
```

### useRef

```jsx
import { useRef, useEffect } from "react";

// Référence à un élément DOM
function TextInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} />;
}

// Stocker une valeur mutable
function Timer() {
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      console.log("Tick");
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

// Garder une référence à la valeur précédente
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
```

### useMemo

```jsx
import { useMemo } from "react";

function ExpensiveComponent({ items, filter }) {
  // Calcul coûteux mémorisé
  const filteredItems = useMemo(() => {
    console.log("Calcul du filtre");
    return items.filter((item) => item.name.includes(filter));
  }, [items, filter]);

  // Objet mémorisé
  const config = useMemo(
    () => ({
      apiUrl: "https://api.example.com",
      timeout: 5000,
    }),
    []
  );

  return <div>{/* ... */}</div>;
}
```

### useCallback

```jsx
import { useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  // Fonction mémorisée
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  // Avec dépendances
  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return <Child onClick={handleClick} />;
}

const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});
```

### Custom Hooks

```jsx
// useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// useLocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// useDebounce
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle];
}
```

---

## 🎨 Patterns React

### Composition

```jsx
// Layout pattern
function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// Slots pattern
function Card({ header, footer, children }) {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// Utilisation
<Card header={<h2>Titre</h2>} footer={<button>Action</button>}>
  <p>Contenu</p>
</Card>;
```

### Render Props (moins utilisé maintenant)

```jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <>{render(position)}</>;
}

// Utilisation
<MouseTracker
  render={({ x, y }) => (
    <div>
      Position: {x}, {y}
    </div>
  )}
/>;
```

### Higher-Order Component (HOC) - Moins utilisé avec les hooks

```jsx
function withLoading(Component) {
  return function WithLoadingComponent(props) {
    if (props.loading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// Utilisation
const UserListWithLoading = withLoading(UserList);
```

### Compound Components

```jsx
const TabsContext = createContext(undefined);

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ id, children }) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab must be used within Tabs");
  }
  const { activeTab, setActiveTab } = context;

  return (
    <button
      className={activeTab === id ? "active" : ""}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabPanel must be used within Tabs");
  }
  const { activeTab } = context;

  if (activeTab !== id) return null;

  return <div className="tab-panel">{children}</div>;
}

// Utilisation
<Tabs>
  <TabList>
    <Tab id="tab1">Tab 1</Tab>
    <Tab id="tab2">Tab 2</Tab>
  </TabList>

  <TabPanel id="tab1">Contenu 1</TabPanel>
  <TabPanel id="tab2">Contenu 2</TabPanel>
</Tabs>;
```

---

## ❌ Erreurs Courantes & Solutions

### 1. Mutation directe de l'état

```jsx
// ❌ FAUX
const [items, setItems] = useState([1, 2, 3]);
items.push(4); // Mutation !
setItems(items); // React ne détecte pas le changement

// ✅ BON
setItems([...items, 4]);
```

### 2. Boucle infinie dans useEffect

```jsx
// ❌ FAUX - Boucle infinie
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1); // Re-render → useEffect → Re-render → ...
});

// ✅ BON - Avec dépendances
useEffect(() => {
  // S'exécute seulement au montage
}, []);
```

### 3. Objet dans les dépendances

```jsx
// ❌ FAUX - Nouvel objet à chaque render
const [data, setData] = useState(null);

const options = { id: 123 }; // Nouveau à chaque render

useEffect(() => {
  fetchData(options);
}, [options]); // options change → boucle infinie

// ✅ BON - Extraire les valeurs
const optionId = 123;

useEffect(() => {
  fetchData({ id: optionId });
}, [optionId]);

// ✅ BON - useMemo
const options = useMemo(() => ({ id: 123 }), []);
```

### 4. Event handler appelé immédiatement

```jsx
// ❌ FAUX
<button onClick={handleClick()}>Click</button>
// S'exécute au render !

// ✅ BON
<button onClick={handleClick}>Click</button>

// ✅ BON - Avec argument
<button onClick={() => handleClick(id)}>Click</button>
```

### 5. Async directement dans useEffect

```jsx
// ❌ FAUX
useEffect(async () => {
  const data = await fetchData();
}, []);

// ✅ BON
useEffect(() => {
  const loadData = async () => {
    const data = await fetchData();
    setData(data);
  };

  loadData();
}, []);
```

### 6. setState juste après dans le même handler

```jsx
// ❌ FAUX
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count); // Affiche encore l'ancienne valeur !
};

// ✅ BON - Comprendre l'asynchrone
const handleClick = () => {
  setCount(count + 1);
  // count ne change que au prochain render
};

// ✅ BON - Utiliser la valeur précédente
const handleClick = () => {
  setCount((prev) => {
    console.log(prev); // Valeur actuelle
    return prev + 1;
  });
};
```

### 7. Key instable dans les listes

```jsx
// ❌ FAUX - Index comme key
{
  items.map((item, index) => <div key={index}>{item.name}</div>);
}

// ✅ BON - ID unique et stable
{
  items.map((item) => <div key={item.id}>{item.name}</div>);
}
```

### 8. Oublier le cleanup dans useEffect

```jsx
// ❌ FAUX - Memory leak
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Tick");
  }, 1000);
}, []);

// ✅ BON
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```

### 9. Modifier les props

```jsx
// ❌ FAUX
function Component({ user }) {
  user.name = "New name"; // Mutation des props !
  return <div>{user.name}</div>;
}

// ✅ BON
function Component({ user }) {
  const [localUser, setLocalUser] = useState(user);
  // Modifier localUser, pas user
}
```

### 10. Optimisation prématurée

```jsx
// ❌ FAUX - Complexifie sans bénéfice
function SimpleComponent({ name }) {
  const greeting = useMemo(() => `Hello ${name}`, [name]);
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <div onClick={handleClick}>{greeting}</div>;
}

// ✅ BON - Simple et lisible
function SimpleComponent({ name }) {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <div onClick={handleClick}>Hello {name}</div>;
}
```

---

## 🎯 Checklist Best Practices

### Composants

- ✅ Un composant = une responsabilité
- ✅ Props claires et cohérentes
- ✅ Déstructurer les props
- ✅ Valeurs par défaut pour props optionnelles
- ✅ Nom de composant en PascalCase

### État

- ✅ État local par défaut
- ✅ Remonter l'état si partagé
- ✅ Immutabilité (spread operator)
- ✅ Mise à jour fonctionnelle si basé sur état précédent
- ✅ Derived state calculé, pas dupliqué

### useEffect

- ✅ Penser "synchronisation"
- ✅ Inclure TOUTES les dépendances
- ✅ Cleanup pour timers, listeners, abonnements
- ✅ Fonction async à l'intérieur, pas directement
- ✅ AbortController pour les requêtes

### Performance

- ✅ Mesurer d'abord avec Profiler
- ✅ React.memo pour composants purs coûteux
- ✅ useMemo pour calculs coûteux
- ✅ useCallback si passé à composant mémorisé
- ✅ Ne PAS optimiser prématurément

### TypeScript

### Documentation (JS)

- ✅ Documenter la forme des données (JSDoc si utile)
- ✅ Rester cohérent sur la “shape” des objets (ex: `cartItem.item.id`)
- ✅ Gérer les valeurs `null/undefined` explicitement
- ✅ Nommer clairement les handlers (`handleSubmit`, `handleChange`, etc.)

---

**Gardez cette cheat sheet sous la main pour référence rapide ! 🚀**
