import React from "react";
import "./Accueil.css";

function Accueil() {
  return (
    <div id="accueil">
      <div id="accueilDroite" className="accueil-panneaux">
        <div className="panneau-texte">
          <h4>Un service de qualité</h4>
          <p>
            Fort de nos expériences envers plusieurs sociétés du milieu des
            télécoms, Hm Fibre souhaite créer un partenariat avec plusieurs
            entreprises pour les accompagner dans leur projet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
