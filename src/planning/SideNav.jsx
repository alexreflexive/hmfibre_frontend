import React from "react";
import { useNavigate } from "react-router-dom";
import sNav from "./SideNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarDays,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

function SideNav({ pagePlanning, setPagePlanning }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "250px",
        background: "#555",
        color: "whitesmoke",
        minHeight: "100vh",
      }}
    >
      <h3 style={{ width: "100%", textAlign: "center" }}>Planning</h3>
      <div className={sNav.navSector}>
        <div
          className={sNav.navItem}
          onClick={() => {
            navigate("/");
          }}
        >
          <FontAwesomeIcon icon={faHome} />
          <span style={{ marginLeft: "1rem" }}>Aller au site</span>
        </div>
      </div>
      <div className={sNav.navSector}>
        <div
          className={sNav.navItem}
          onClick={() => setPagePlanning("planningTable")}
        >
          <FontAwesomeIcon icon={faCalendarDays} />
          <span style={{ marginLeft: "0.5rem" }}>Planning</span>
        </div>
        <div
          className={sNav.navItem}
          onClick={() => setPagePlanning("intervenants")}
        >
          <FontAwesomeIcon icon={faUser} />
          <span style={{ marginLeft: "0.5rem" }}>Intervenants</span>
        </div>
        <div
          className={sNav.navItem}
          onClick={() => setPagePlanning("commerciaux")}
        >
          <FontAwesomeIcon icon={faUserTie} />
          <span style={{ marginLeft: "0.5rem" }}>Commerciaux</span>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
