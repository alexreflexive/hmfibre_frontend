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
        <a href="#">Administration</a>
        <a href="#">Planing</a>
        <a href="#">Connexion</a>
      </div>
    </header>
  );
}

export default Header;
