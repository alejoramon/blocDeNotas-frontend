// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import CreateUser from "./components/CreateUser"; // Asegúrate de importar CreateUser

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/CreateUser" element={<CreateUser />} />{" "}
        {/* Agrega la ruta a CreateUser */}
      </Routes>
      {/* Footer aquí */}
    </Router>
  );
}

export default App;
