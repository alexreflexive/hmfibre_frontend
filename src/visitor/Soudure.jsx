import React from "react";
import "./Soudure.css";

function Soudure() {
  return (
    <section id="soudure">
      <div id="soudureGauche" className="soudure-panneaux">
        <div className="panneau-texte">
          <h4>Soudure</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            pellentesque nec arcu eget lacinia. Aenean consectetur, erat ac
            pretium bibendum, nisl tellus ullamcorper felis, in faucibus libero
            felis quis purus. Curabitur scelerisque odio et maximus vestibulum.
            Suspendisse risus nulla, hendrerit in turpis viverra, aliquam
            gravida quam. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse sit amet tellus ut erat
            facilisis mattis et vitae nisl. Fusce rutrum enim at sapien
            condimentum, porta venenatis lorem consectetur.
          </p>
        </div>
      </div>
      <div id="soudureDroite" className="soudure-panneaux"></div>
    </section>
  );
}

export default Soudure;
