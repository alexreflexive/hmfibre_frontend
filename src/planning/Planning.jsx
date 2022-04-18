import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import PlanningTable from "./PlanningTable";
import Intervenants from "./Intervenants";
import Commerciaux from "./Commerciaux";

function Planning() {
  const [pagePlanning, setPagePlanning] = useState("planningTable");
  let displayPage;

  if (pagePlanning === "planningTable") {
    displayPage = <PlanningTable />;
  } else if (pagePlanning === "intervenants") {
    displayPage = <Intervenants />;
  } else if (pagePlanning === "commerciaux") {
    displayPage = <Commerciaux />;
  } else {
    console.error("Option inconnue");
  }

  return (
    <div style={{ display: "flex" }}>
      <SideNav pagePlanning={pagePlanning} setPagePlanning={setPagePlanning} />
      <main style={{ width: "100%" }}>
        <header
          style={{
            width: "100%",
            height: "80px",
            background: "#68689d",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Link to="/">Déconnexion [Pseudo_de_l_admin]</Link>
        </header>
        {displayPage}
      </main>
    </div>
  );
}

export default Planning;
