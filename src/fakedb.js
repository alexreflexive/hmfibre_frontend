export function getIntervenants() {
  const intervenants = [];
  collaborateurs.forEach((collaborateur) => {
    if (collaborateur.poste === "Intervenant") {
      intervenants.push(collaborateur);
    }
  });
  return intervenants;
}

export function getCommerciaux() {
  const commerciaux = [];
  collaborateurs.forEach((collaborateur) => {
    if (collaborateur.poste === "Commercial") {
      commerciaux.push(collaborateur);
    }
  });
  return commerciaux;
}

export function getCollaborateurById(id) {
  collaborateurs.forEach((collaborateur) => {
    if (collaborateur.id === id) {
      return collaborateur;
    }
  });
}

export const chiefs = [
  { _id: 1, identifier: "Alex", mdp: "0000", role: "admin" },
];

export function getNextId() {
  return collaborateurs.length + 1;
}
const collaborateurs = [
  {
    _id: 1,
    nom: "Dupond",
    prenom: "Pierre",
    email: "pierre@dupond.fr",
    telephone: "0000000000",
    poste: "Intervenant",
  },
  {
    _id: 2,
    nom: "Lepont",
    prenom: "Jean",
    email: "jean@lepont.fr",
    telephone: "0000000000",
    poste: "Intervenant",
  },
  {
    _id: 3,
    nom: "Derkaoui",
    prenom: "Sélim",
    email: "selim@derkaoui.fr",
    telephone: "0000000000",
    poste: "Intervenant",
  },
  {
    _id: 4,
    nom: "Banka",
    prenom: "Thimotée",
    email: "thimotee@banka.fr",
    telephone: "0000000000",
    poste: "Intervenant",
  },
  {
    _id: 5,
    nom: "Châtelin",
    prenom: "Erwan",
    email: "erwan@chatelin.fr",
    telephone: "0000000000",
    poste: "Intervenant",
  },
  {
    _id: 6,
    nom: "Moineau",
    prenom: "Nathalie",
    email: "nathalie@moineau.fr",
    telephone: "0000000000",
    poste: "Commercial",
  },
  {
    _id: 7,
    nom: "Leoiseau",
    prenom: "Bénédicte",
    email: "benedicte@loiseau.fr",
    telephone: "0000000000",
    poste: "Commercial",
  },
  {
    _id: 8,
    nom: "Saidi",
    prenom: "Yasmine",
    email: "yasmine@saidi.fr",
    telephone: "0000000000",
    poste: "Commercial",
  },
  {
    _id: 9,
    nom: "Ngo",
    prenom: "Marie",
    email: "marie@ngo.fr",
    telephone: "0000000000",
    poste: "Commercial",
  },
  {
    _id: 10,
    nom: "Hirondelle",
    prenom: "Delphine",
    email: "delphine@hrondelle.fr",
    telephone: "0000000000",
    poste: "Commercial",
  },

  {
    _id: 11,
    nom: "Kimono",
    prenom: "Yumi",
    email: "yumi@kimono.fr",
    telephone: "0000000000",
    poste: "Commercial",
  },
];
