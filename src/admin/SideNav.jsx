import React from "react";
import { useNavigate } from "react-router-dom";
import sNav from "./SideNav.module.css";

function SideNav({ pageAdmin, setPageAdmin }) {
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
      <h3 style={{ width: "100%", textAlign: "center" }}>Admin</h3>
      <div className={sNav.navSector}>
        <div
          className={sNav.navItem}
          onClick={() => {
            navigate("/");
          }}
        >
          Aller au site
        </div>
        <div
          className={sNav.navItem}
          onClick={() => {
            navigate("/planning");
          }}
        >
          Aller au planning
        </div>
      </div>
      <div className={sNav.navSector}>
        <h4 style={{ textAlign: "center" }}>OnePage</h4>
        <div className={sNav.navItem} onClick={() => setPageAdmin("OnePage")}>
          OnePage
        </div>
        <div className={sNav.navItem} onClick={() => setPageAdmin("Autre 1")}>
          Autre 1
        </div>
        <div className={sNav.navItem} onClick={() => setPageAdmin("Autre 2")}>
          Autre 2
        </div>
      </div>
    </div>
  );
}

export default SideNav;
