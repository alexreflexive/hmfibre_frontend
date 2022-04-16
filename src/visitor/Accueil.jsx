import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Accueil.css";

function Accueil() {
  const slideImages = [
    "../../public/images/slides/slide_1.jpg",
    "../../public/images/slides/slide_2.jpg",
    "../../public/images/slides/slide_3.jpg",
  ];
  return (
    <div id="accueil">
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <img src={slideImage} alt="" width="100%" />
            </div>
          ))}
        </Slide>
      </div>
      {/* <div id="accueilDroite" className="accueil-panneaux">
        <div className="panneau-texte">
          <h4>Un service de qualité</h4>
          <p>
            Fort de nos expériences envers plusieurs sociétés du milieu des
            télécoms, Hm Fibre souhaite créer un partenariat avec plusieurs
            entreprises pour les accompagner dans leur projet.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Accueil;

//  background-image: url("../../public/images/photo-3.jpg");
