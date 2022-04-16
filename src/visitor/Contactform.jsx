import React from "react";
import "./Contactform.css";

function Contactfort() {
  return (
    <section id="formulaire">
      <div id="formContainer">
        <form action="#">
          <h4>Réservez votre horaire</h4>
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénom" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Téléphone" />
          <input type="datetime-local" name="datetime" id="datetime" />
          <textarea placeholder="Observations"></textarea>
          <p>
            <button>Réserver</button>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contactfort;
