import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleClick = (value) => {
    if (value === '=') {
      let exp = input.replace(/\/\//g, '/'); // Treat // as regular division (floor div not fully supported in JS eval)
      try {
        const evalResult = eval(exp);
        setInput(evalResult.toString());
        setIsResultDisplayed(true);
      } catch (error) {
        setInput('Error');
        setIsResultDisplayed(true);
      }
    } else if (value === 'C') {
      setInput('');
      setIsResultDisplayed(false);
    } else {
      if (isResultDisplayed) {
        if (/[0-9]/.test(value)) {
          setInput(value);
        } else {
          setInput(input + value);
        }
        setIsResultDisplayed(false);
      } else {
        setInput(input + value);
      }
    }
  };

  return (
    <div>
      <div className="display">{input || '0'}</div>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <br /> <br />
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClick('/')}>/</button>
      <button onClick={() => handleClick('**')}>**</button>
      <button onClick={() => handleClick('//')}>//</button>
      <button onClick={() => handleClick('%')}>%</button>
      <button onClick={() => handleClick('=')}>=</button>
      <button onClick={() => handleClick('C')}>C</button>
    </div>
  );
}

export default App;






/* App.css or a separate Calculator.css */

/* Center the calculator on the page */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }
  
  .App {
    background-color: #333;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px; /* Fixed width for calculator look */
  }
  
  /* Display screen */
  .display {
    background-color: #222;
    color: #fff;
    font-size: 2rem;
    text-align: right;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  
  /* Button grid */
  .App > button {
    background-color: #444;
    color: #fff;
    border: none;
    font-size: 1.5rem;
    padding: 15px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .App > button:hover {
    background-color: #555;
  }
  
  /* Operator buttons (optional styling) */
  .App > button:nth-child(n+12):not(:last-child):not(:nth-last-child(2)) {
    background-color: #ff9500; /* Orange for operators */
  }
  
  .App > button:nth-child(n+12):not(:last-child):not(:nth-last-child(2)):hover {
    background-color: #e68900;
  }
  
  /* = and C buttons */
  .App > button:last-child,
  .App > button:nth-last-child(2) {
    background-color: #28a745; /* Green for = and red for C, adjust as needed */
  }
  
  .App > button:last-child {
    background-color: #dc3545; /* Red for C */
  }
  
  /* Arrange buttons in a grid */
  .App {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns for a classic calc look */
    grid-gap: 10px;
  }
  
  .App .display {
    grid-column: span 4; /* Span full width */
  }
  
  /* Adjust br if needed, but better to remove <br> and let grid handle */
  .App br {
    display: none;
  }









  import { useState } from 'react';
import './App.css'
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter une nouvelle todo"
      />
      <button onClick={addTodo}>Ajouter</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Todos restantes: {remainingTodos}</p>
    </div>
  );
}

export default TodoList;


/* App.css */

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #1e1d1d;
    font-family: Arial, sans-serif;
  }
  
  div {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  input[type="text"] {
    width: calc(100% - 80px);
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  button {
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
  }
  
  li {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
    color: #1e1d1d;
  }
  
  li:last-child {
    border-bottom: none;
  }
  
  li input[type="checkbox"] {
    margin-right: 10px;
  }
  
  li button {
    margin-left: auto;
    background-color: #dc3545;
  }
  
  li button:hover {
    background-color: #c82333;
  }
  
  p {
    text-align: center;
    font-weight: bold;
    color: #333;
  }