import React, { useState } from "react";

function Button(props) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={props.function}
      className={[buttonStyle]}
      style={buttonStyle({ hover })}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {props.label}
    </button>
  );
}
export default Button;

const buttonStyle = ({ hover }) => ({
  backgroundColor: "royalblue",
  padding: "10px",
  minWidth: "150px",
  color: "whitesmoke",
  margin: "10px",
  border: "none",
  borderRadius: "10px",
  opacity: hover ? "0.75" : "1",
});
