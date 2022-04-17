import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
  const navigate = useNavigate();
  let loginLink;

  if (!localStorage.getItem("id")) {
    loginLink = (
      <div id="connexion">
        <Link to="/login">Connexion</Link>
      </div>
    );
  } else {
    if (localStorage.getItem("role") === "admin") {
      loginLink = (
        <div id="connexion">
          <Link to="/admin">Administration</Link>
          <Link to="/planning">Planning</Link>
          <span className="link" onClick={logout}>
            Déconnexion
          </span>
        </div>
      );
    } else {
      loginLink = (
        <div id="connexion">
          <Link to="/commercials">Planning</Link>
          <span className="link" onClick={logout}>
            Déconnexion
          </span>
        </div>
      );
    }
  }

  function logout() {
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    navigate("/");
  }

  return (
    <header>
      <div id="logo">
        <img src="./logo.png" alt="Logo HM Fible" />
        <h1>HM Fibre</h1>
      </div>
      {/* <div id="connexion">
        <Link to="/admin">Administration</Link>
        <Link to="/planning">Planning</Link>
        <Link to="/login">Connexion</Link>
      </div> */}
      {loginLink}
    </header>
  );
}

export default Header;
