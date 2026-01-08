import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
//import Menu from "./pages/MenuPage";
//import Cart from "./pages/Cart";
//import NotFoundPage from "./pages/NotFoundPage";
import Layout from './components/layout.jsx';
import Contact from './components/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;