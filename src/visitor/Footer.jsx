import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <footer>
      <div id="socialmedia">
        <a href="https://www.facebook.com/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/home" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/?hl=fr" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:corto_soda@noos.fr">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <p>&copy; 2022</p>
    </footer>
  );
}

export default Footer;
