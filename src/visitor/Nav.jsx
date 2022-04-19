import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <a href="/#" className="default-nav-item">
        Accueil
      </a>
      <a href="#accueil" className="hidden-nav-item">
        Accueil
      </a>
      <a href="#soudure">Soudure</a>
      <a href="#tirage">Tirage</a>
      <a href="#pose">Boîtiers</a>
      <a href="#mesure">Mesures</a>
      <a href="#formulaire">Réservation</a>
    </nav>
  );
}

export default Nav;
