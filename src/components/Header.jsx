// Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import catImage from "../assets/appdenotas.png";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
        <NavLink to="/" onClick={closeMobileMenu}>
          Inicio de sesión
        </NavLink>
        <NavLink to="/CreateUser" onClick={closeMobileMenu}>
          Registrarse
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
