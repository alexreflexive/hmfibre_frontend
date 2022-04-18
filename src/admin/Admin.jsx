import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import OnePage from "./OnePage";
import OnePageImages from "./OnePageImages";
import OnePageSN from "./OnePageSN";

// import Home from "./Components/Home";

function Admin() {
  const [pageAdmin, setPageAdmin] = useState("Accueil");
  const [pageTitle, setPageTitle] = useState("Textes de OnePage");
  let displayPage;

  if (pageAdmin === "OnePage") {
    displayPage = <OnePage />;
  } else if (pageAdmin === "Autre 1") {
    console.log("Autre 1");
  }
  return (
    <div style={{ display: "flex" }}>
      <SideNav pageAdmin={pageAdmin} setPageAdmin={setPageAdmin} />
      <main style={{ width: "100%" }}>
        <header
          style={{
            width: "100%",
            height: "80px",
            background: "#668f66",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Link to="/">Déconnexion [Pseudo_de_l_admin]</Link>
        </header>
        <h1 style={{ textAlign: "center" }}>{pageAdmin}</h1>
        {displayPage}
      </main>
    </div>
  );
}

export default Admin;
