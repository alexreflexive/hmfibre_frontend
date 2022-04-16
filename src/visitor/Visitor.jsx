import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Accueil from "./Accueil";
import Soudure from "./Soudure";
import Tirage from "./Tirage";
import Pose from "./Pose";
import Mesure from "./Mesure";
import Contactform from "./Contactform";
import Footer from "./Footer";

function Visitor() {
  return (
    <div>
      <Header />
      <Nav />
      <Accueil />
      <Soudure />
      <Tirage />
      <Pose />
      <Mesure />
      <Contactform />
      <Footer />
    </div>
  );
}

export default Visitor;
