import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact_container">
        <p>
          Email: <span>jijinprabhakar@gmail.com</span>
        </p>
        <p>
          Github Username: <span>@jijinprabhakar</span>
        </p>
        <div className="contact_icons">
          <a href="#">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href="#">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
          <a href="#">
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
