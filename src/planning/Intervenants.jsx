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
  const [actionType, setActionType] = useState("");
  const [id, setId] = useState(0);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  // Dispatche s'il s'agit d'un nouveau enregistrement ou d'une mise à jour.
  const save = (event) => {
    event.preventDefault();
    if (event.target.actionType.value === "new") saveNewIntervenant();
    else if (event.target.actionType.value === "edit") saveEditIntervenant();
    else console.error("Option inconnue.");
  };

  // Affiche le formulaire Ajouter
  const addAction = () => {
    setActionType("new");
    setshowForm(true);
  };

  // Enregistre le nouvel intervenant
  const saveNewIntervenant = () => {
    setIntervenants((intervenants) => [
      ...intervenants,
      { _id: nextId, nom, prenom, email, telephone },
    ]);
    setnextId((nextId) => (nextId = nextId + 1));
    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setshowForm(false);
  };

  // Affiche le formulaire d'édition
  const editAction = (id) => {
    setActionType("edit");
    const collaborateur = intervenants.filter((item) => item._id === id)[0];
    setId(collaborateur._id);
    setNom(collaborateur.nom);
    setPrenom(collaborateur.prenom);
    setEmail(collaborateur.email);
    setTelephone(collaborateur.telephone);
    setshowForm(true);
  };

  // Enregistre la MàJ de l'intervenant
  const saveEditIntervenant = () => {
    const collaborateur = intervenants.filter((item) => item._id === id)[0];
    const index = intervenants.indexOf(collaborateur);
    const copy = [...intervenants];
    copy[index].nom = nom;
    copy[index].prenom = prenom;
    copy[index].email = email;
    copy[index].telephone = telephone;
    setIntervenants(copy);
    setshowForm(false);
    reset();
  };

  // Supprime l'intervenant
  const deleteAction = (id) => {
    setIntervenants(intervenants.filter((item) => item._id !== id));
  };

  // Réinitialisation du formulaire.
  const reset = () => {
    setId(0);
    setNom();
    setPrenom();
    setEmail();
    setTelephone();
  };

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
                      deleteAction(intervenant._id);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faPen}
                    className={tabStyle.actionIcon}
                    title="Modifier"
                    onClick={() => {
                      editAction(intervenant._id);
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
                  addAction();
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
      {showForm && (
        <form onSubmit={save} style={formStyle}>
          <h3>Ajouter un intervenant</h3>
          <input type="hidden" name="actionType" value={actionType} />
          <input
            type="text"
            placeholder="Nom"
            name="nom"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Prénom"
            name="prenom"
            value={prenom}
            onChange={(event) => setPrenom(event.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={inputStyle}
          />
          <input
            type="tel"
            placeholder="Téléphone"
            name="telephone"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
            style={inputStyle}
          />
          <div style={{ textAlign: "center" }}>
            <Button label="Enregistrer" />
          </div>
        </form>
      )}
    </div>
  );
}

export default Intervenants;

const formStyle = {
  width: "50%",
  padding: "2rem",
  margin: "auto",
  border: "1px solid gray",
  borderRadius: "10px",
  boxShadow: "10px 15px 15px gray",
};

const inputStyle = {
  width: "100%",
  height: "2rem",
  margin: "0.5rem 0",
};
