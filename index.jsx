// Consigne : Créer un bouton qui affiche/cache du texte
function Toggle() {
  // TODO: useState pour gérer l'état ouvert/fermé

  return (
    <div>
      <button>Toggle</button>
      {/* Afficher "Contenu visible" seulement si ouvert */}
   </div>
  );
//}

import { useState } from "react";
function Toggle() {
  const [ouvert, setOuver] = useState(ferme);
    return (
    <div>
      <button onClick={() => setOuver(ouvert)}>Toggle</button>
       <p>etat du texte </p>
   </div>
  );
}



// creer un input qui affiche en temps reel ce qu'on ecrit dans un paragraphe
function nameinput() {  
    const  [text, setText] = useState("");
    return (
    <div>
      <input type="text" placeholder="votre nom" />   
        <p>bonjour {texte} !</p>
    </div>
    );
}


// creer un compteur avec deux boutons +1, -1, +10, reset
function Count() {
    const [count, setCount] = useState(0);
    return (
    <div>
      <p> mon compteur</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button> 
        <button onClick={() => setCount(count + 10)}>+10</button>
        <button onClick={() => setCount(0)}>reset</button>
    </div>
    );
}





//creer une calculatrice avec 2 inputs et 4 boutons + - * /
function Calculatrice() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    return (
    <div>
      <input type="number" onChange={(e) => setNum1(e.target.value)}/>
      <input type="number" onChange={(e) => setNum2((e.target.value))} /> 
        <button onClick={() => setResult(num1 + num2)}>+</button>
        <button onClick={() => setResult(num1 - num2)}>-</button>
        <button onClick={() => setResult(num1 * num2)}>*</button>
        <button onClick={() => setResult(num1 / num2)}>/</button>
        <p>Resultat: {result}</p>
    </div>
    );
}




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
    const addTodo = () => {
        const newTodo = { text: input, done: false };
        setTodos([...todos, newTodo]);
        setInput("");  
    };
   
    const toggleDone = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

