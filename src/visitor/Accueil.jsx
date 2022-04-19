import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Accueil.css";

function Accueil() {
  console.log("FM Fibre Accueil");
  // const slideImages = [
  //   "images/slides/slide_4.jpg",
  //   "images/slides/slide_1.jpg",
  //   "images/slides/slide_2.jpg",
  //   "images/slides/slide_3.jpg",
  // ];

  const slideImages = [
    "images/slides/pexels-brett-sayles-4497195.jpg",
    "images/slides/pexels-maria-orlova-4913385.jpg",
    "images/slides/pexels-pixabay-50711.jpg",
    "images/slides/pexels-pixabay-247676.jpg",
    "images/slides/pexels-rodolfo-clix-1036936.jpg",
    "images/slides/pexels-skylar-kang-6044217.jpg",
  ];

  return (
    <div id="accueil">
      <div className="slide-container">
        <Slide easing="ease">
          {slideImages.map((slideImage, index) => (
            <div
              className="each-slide"
              key={index}
              style={{ height: "600px", width: "100%" }}
            >
              {/* <img src={slideImage} alt="" height="100%" /> */}
              <div
                style={{
                  backgroundImage: `url(${slideImage})`,
                  height: "100%",
                  backgroundSize: "cover",
                }}
              >
                <div className="panneau-texte">
                  <h4>Un service de qualité</h4>
                  <p>
                    Fort de nos expériences envers plusieurs sociétés du milieu
                    des télécoms, Hm Fibre souhaite créer un partenariat avec
                    plusieurs entreprises pour les accompagner dans leur projet.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="smartphone-text">
        Fort de nos expériences envers plusieurs sociétés du milieu des
        télécoms, Hm Fibre souhaite créer un partenariat avec plusieurs
        entreprises pour les accompagner dans leur projet.
      </div>
    </div>
  );
}

export default Accueil;
