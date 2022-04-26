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
    idColor: "#f55",
  },
  {
    _id: 2,
    nom: "Lepont",
    prenom: "Jean",
    email: "jean@lepont.fr",
    telephone: "0000000000",
    poste: "Intervenant",
    idColor: "#5d5",
  },
  {
    _id: 3,
    nom: "Derkaoui",
    prenom: "Sélim",
    email: "selim@derkaoui.fr",
    telephone: "0000000000",
    poste: "Intervenant",
    idColor: "#55f",
  },
  {
    _id: 4,
    nom: "Banka",
    prenom: "Thimotée",
    email: "thimotee@banka.fr",
    telephone: "0000000000",
    poste: "Intervenant",
    idColor: "#992",
  },
  {
    _id: 5,
    nom: "Châtelin",
    prenom: "Erwan",
    email: "erwan@chatelin.fr",
    telephone: "0000000000",
    poste: "Intervenant",
    idColor: "#f5f",
  },
  {
    _id: 6,
    nom: "Moineau",
    prenom: "Nathalie",
    email: "nathalie@moineau.fr",
    telephone: "0000000000",
    poste: "Commercial",
    idColor: "#ccc",
  },
  {
    _id: 7,
    nom: "Leoiseau",
    prenom: "Bénédicte",
    email: "benedicte@loiseau.fr",
    telephone: "0000000000",
    poste: "Commercial",
    idColor: "#ccc",
  },
  {
    _id: 8,
    nom: "Saidi",
    prenom: "Yasmine",
    email: "yasmine@saidi.fr",
    telephone: "0000000000",
    poste: "Commercial",
    idColor: "#ccc",
  },
  {
    _id: 9,
    nom: "Ngo",
    prenom: "Marie",
    email: "marie@ngo.fr",
    telephone: "0000000000",
    poste: "Commercial",
    idColor: "#ccc",
  },
  {
    _id: 10,
    nom: "Hirondelle",
    prenom: "Delphine",
    email: "delphine@hrondelle.fr",
    telephone: "0000000000",
    poste: "Commercial",
    idColor: "#ccc",
  },

  {
    _id: 11,
    nom: "Kimono",
    prenom: "Yumi",
    email: "yumi@kimono.fr",
    telephone: "0000000000",
    poste: "Commercial",
    idColor: "#ccc",
  },
];

export function getOnePageTexts() {
  return onePageTexts;
}
const onePageTexts = {
  accueil: {
    name: "Accueil",
    title: "Un service de qualité",
    content:
      "Fort de nos expériences envers plusieurs sociétés du milieu des télécoms, HM Fibre souhaite créer un partenariat avec plusieurs entreprises pour les accompagner dans leur projet.",
  },
  soudure: {
    name: "Soudure",
    title: "Soudure",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nec arcu eget lacinia. Aenean consectetur, erat ac pretium bibendum, nisl tellus ullamcorper felis, in faucibus libero felis quis purus. Curabitur scelerisque odio et maximus vestibulum. Suspendisse risus nulla, hendrerit in turpis viverra, aliquam gravida quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet tellus ut erat facilisis mattis et vitae nisl. Fusce rutrum enim at sapien condimentum, porta venenatis lorem consectetur.",
  },
  tirages: {
    name: "Tirages",
    title: "Tirages",
    content:
      "Entendu, vieux, ridé et ratatiné sous l'effet de son imagination. Vieux sorcier, se préparent dans le plus profond. Disons trente ou quarante pas de lui déplaire, déranger des calculs. Arrive un moment où le maire et sa noble compagnie. Souffrez que nous ayons quitté les eaux territoriales de chaque autre littoral constituent sa frontière, les seuls que les douze billets impayés, traités inexécutés, reconnaissances restées vaines, engagements non tenus. Creuse, tu ne devrais pas me plaindre.",
  },
  pose: {
    name: "Pose",
    title: "Pose de boîtiers",
    content:
      "Quisque ut condimentum velit. Sed venenatis, lacus eget pharetra porttitor, risus sem sodales nisl, a dignissim ex orci nec nibh. Ut gravida rutrum pulvinar. Nam eleifend facilisis volutpat. Donec convallis rutrum efficitur. Nulla sagittis erat at scelerisque auctor. In eget pulvinar odio.",
  },
  mesures: {
    name: "Mesures",
    title: "Mesures",
    content:
      "Nam blandit leo eget sem pulvinar, in finibus neque luctus. Suspendisse a nulla tincidunt, convallis tellus sed, semper felis. Mauris sit amet laoreet odio. Duis lectus mauris, imperdiet in tincidunt at, sagittis lobortis diam. Etiam pharetra convallis risus non semper. Donec ut semper libero. Duis consectetur purus cursus turpis volutpat sagittis. Praesent luctus ornare pulvinar. Aliquam pretium, tortor a suscipit rhoncus, ex lacus varius libero, id maximus velit lorem nec nunc.",
  },
};

export function getEvenements() {
  return [
    {
      title: "Salon numérique",
      start: "2022-04-27T10:00:00",
      end: "2022-04-27T16:00:00",
      comments: "Pour rencontrer tous les professionnels du numérique.",
      color: "#d33",
    },
    {
      title: "Salon de la fibre optique",
      start: "2022-04-27T12:00:00",
      end: "2022-04-27T18:00:00",
      comments: "Salon où FHFibre tient un stand.",
      color: "#3d3",
    },
    {
      title: "Salon du BTP",
      start: "2022-04-27T14:00:00",
      end: "2022-04-27T20:00:00",
      comments: "Prospection indispensable.",
      color: "#33d",
    },
  ];
}
