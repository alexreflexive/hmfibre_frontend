import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div id="logo">
        <img src="./logo.png" alt="Logo HM Fible" />
        <h1>HM Fibre</h1>
      </div>
      <div id="connexion">
        <a href="/admin">Administration</a>
        <a href="/planning">Planning</a>
        <a href="/login">Connexion</a>
      </div>
    </header>
  );
}

export default Header;
