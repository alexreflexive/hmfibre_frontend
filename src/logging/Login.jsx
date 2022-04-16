import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { chiefs } from "../fakedb";
import styles from "./Login.module.css";
import Button from "../compnents/Button";

function Login() {
  const admin = chiefs[0];
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const doLogin = (event) => {
    event.preventDefault();
    if (event.target.pseudo.value !== "") {
      if (
        event.target.pseudo.value === admin.identifier &&
        event.target.password.value === admin.mdp
      ) {
        localStorage.setItem("id", "Alex");
        localStorage.setItem("role", "admin");
        console.log("Connexion");
      } else {
        localStorage.setItem("id", event.target.pseudo.value);
        localStorage.setItem("role", "logged");
      }
      navigate("/");
    }
  };

  return (
    <div className={styles.formcontainer}>
      <form className={styles.form} onSubmit={doLogin}>
        <input
          type="text"
          placeholder="Pseudo"
          name="pseudo"
          className={styles.inputtext}
          value={pseudo}
          onChange={(event) => setPseudo(event.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          className={styles.inputtext}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p>Alex/0000</p>
        <div style={{ textAlign: "center" }}>
          <Button label="Connexion" className={styles.button}></Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
