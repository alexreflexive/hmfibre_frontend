import React, { useState } from "react";
import { getOnePageTexts } from "../fakedb";
import TextForm from "./TextForm";
//tirage pose mesure
function OnePage() {
  const texts = getOnePageTexts();
  const [titleAccueil, setTitleAccueil] = useState(texts.accueil.title);
  const [contentAccueil, setContentAccueil] = useState(texts.accueil.content);
  const [titleSoudure, setTitleSoudure] = useState(texts.soudure.title);
  const [contentSoudure, setContentSoudure] = useState(texts.soudure.content);
  const [titleTirage, setTitleTirage] = useState(texts.tirages.title);
  const [contentTirage, setContentTirage] = useState(texts.tirages.content);
  const [titlePose, setTitlePose] = useState(texts.pose.title);
  const [contentPose, setContentPose] = useState(texts.pose.content);
  const [titleMesure, setTitleMesure] = useState(texts.mesures.title);
  const [contentMesure, setContentMesure] = useState(texts.mesures.content);

  const test = (event) => {
    event.preventDefault();
    console.log("Enregistrement");
  };

  return (
    <div>
      <TextForm
        name={texts.accueil.name}
        title={titleAccueil}
        setTitle={setTitleAccueil}
        content={contentAccueil}
        setContent={setContentAccueil}
        action={test}
      />
      <TextForm
        name={texts.soudure.name}
        title={titleSoudure}
        setTitle={setTitleSoudure}
        content={contentSoudure}
        setContent={setContentSoudure}
        action={test}
      />
      <TextForm
        name={texts.soudure.name}
        title={titleSoudure}
        setTitle={setTitleSoudure}
        content={contentSoudure}
        setContent={setContentSoudure}
        action={test}
      />
      <TextForm
        name={texts.tirages.name}
        title={titleTirage}
        setTitle={setTitleTirage}
        content={contentTirage}
        setContent={setContentTirage}
        action={test}
      />
      <TextForm
        name={texts.pose.name}
        title={titlePose}
        setTitle={setTitlePose}
        content={contentPose}
        setContent={setContentPose}
        action={test}
      />
      <TextForm
        name={texts.mesures.name}
        title={titleMesure}
        setTitle={setTitleMesure}
        content={contentMesure}
        setContent={setContentMesure}
        action={test}
      />
    </div>
  );
}

export default OnePage;
