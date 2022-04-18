import React, { useState } from "react";
import { getIntervenants, getNextId } from "../fakedb";
import tabStyle from "./TableStyles.module.css";
import Button from "../compnents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

function Intervenants() {
  const [showForm, setshowForm] = useState(false);
  const [intervenants, setIntervenants] = useState(getIntervenants());
  const [nextId, setnextId] = useState(getNextId());
  const [id, setId] = useState(0);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  return (
    <div style={{ width: "100%" }}>
      {" "}
      <h1 style={{ textAlign: "center" }}>Liste des intervenants</h1>
      <table style={{ width: "100%" }} className={tabStyle.tabItems}>
        <thead>
          <tr>
            <th>_id</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Mail</th>
            <th>Tél.</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {intervenants.map((intervenant) => {
            return (
              <tr key={intervenant._id}>
                <td>{intervenant._id}</td>
                <td>{intervenant.nom}</td>
                <td>{intervenant.prenom}</td>
                <td>{intervenant.email}</td>
                <td>{intervenant.telephone}</td>
                <td className={tabStyle.actions}>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className={tabStyle.actionIcon}
                    title="Supprimer"
                    onClick={() => {
                      console.log("deleteaction");
                      //   deleteAction(intervenant._id);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faPen}
                    className={tabStyle.actionIcon}
                    title="Modifier"
                    onClick={() => {
                      console.log("editaction");
                      // editAction(intervenant._id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
          <tr>
            <td style={{ textAlign: "center" }}>
              <FontAwesomeIcon
                icon={faPlus}
                className={tabStyle.actionIcon}
                title="Ajouter"
                onClick={() => {
                  console.log("addaction");

                  // addAction();
                }}
              />
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Intervenants;
