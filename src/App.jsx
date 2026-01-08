import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import APropos from "./pages/APropos";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/A-propos" element={<APropos />} />
      </Route>
    </Routes>
  );
}

export default App;