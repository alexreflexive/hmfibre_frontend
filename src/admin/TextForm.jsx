import React, { useState } from "react";
import Button from "../compnents/Button";

function TextForm({ name, title, setTitle, content, setContent, action }) {
  //   const [localTitle, setLocalTitle] = useState(props.title);
  //   const [localContent, setLocalContent] = useState(props.content);
  return (
    <form style={{ marginBottom: "2rem" }} onSubmit={action}>
      <h3>
        Modification de <em>{name}</em>
      </h3>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          //   console.log(event.target.value);
        }}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="40"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
          //   console.log(event.target.value);
        }}
      />
      <div style={{ textAlign: "right" }}>
        <Button label="Enregistrer" />
      </div>
    </form>
  );
}

export default TextForm;
