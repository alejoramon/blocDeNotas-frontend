// Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import catImage from "../assets/appdenotas.png";
import "./Header.css";
import { useUser } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user, betterSetUser] = useUser();

  const closeMobileMenu = () => {
    // No necesitamos toggleMobileMenu ya que solo estamos mostrando el menú en dispositivos móviles
  };

  return (
    <header className="header-container">
      <NavLink to="/" className="logo">
        <img src={catImage} alt="logo" />
      </NavLink>
      <div className="nav">
        {/* No necesitamos el icono del menú para dispositivos móviles */}
        {user ? (
          <>
            <span>{user.userName}</span>
            {/* Agrega espacio entre el nombre de usuario y el botón de logout */}
            <span>&nbsp;</span>
            <NavLink
              to="/"
              onClick={() => {
                betterSetUser(null);
              }}
              className="logout-link"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <div className="auth-links">
              <NavLink
                to="/login"
                className="login-link"
                onClick={closeMobileMenu}
              >
                Login
              </NavLink>
              <NavLink
                to="/CreateUser"
                className="register-link"
                onClick={closeMobileMenu}
              >
                Register
              </NavLink>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
