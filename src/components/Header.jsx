import React from "react";
import { NavLink } from "react-router-dom";
import catImage from "../assets/appdenotas.png";
import "./Header.css";
import { useUser } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user, setUser] = useUser();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="header-container">
      {/* Enlace dinámico del logo */}
      <NavLink to={user ? "/notes" : "/"} className="logo">
        <img src={catImage} alt="logo" />
      </NavLink>
      <div className="nav">
        {user ? (
          <>
            <span className="user-name">{user.userName}</span>
            <NavLink to="/create-note" className="create-note-link">
              <FontAwesomeIcon icon={faPlus} />
            </NavLink>
            <NavLink
              to="/create"
              onClick={handleLogout}
              className="logout-link"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="login-link">
              Login
            </NavLink>
            <NavLink to="/create-user" className="register-link">
              Register
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
