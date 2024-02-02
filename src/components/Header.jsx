// Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import catImage from "../assets/appdenotas.png";
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img src={catImage} alt="logo" />
      </div>
      <div className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          ☰
        </div>
        <NavLink
          to="/"
          activeClassName="active"
          onClick={() => setMobileMenuOpen(false)}
        >
          Inicio de sesión
        </NavLink>
        <NavLink
          to="/CreateUser"
          activeClassName="active"
          onClick={() => setMobileMenuOpen(false)}
        >
          Registrarse
        </NavLink>
        {/* Agrega más enlaces de navegación según tus necesidades */}
      </div>
    </header>
  );
}

export default Header;
