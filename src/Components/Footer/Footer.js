import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="column">
          <h3>About us</h3>
          <div>Who we are</div>
          <div>Inspiration</div>
          <div>History</div>
        </div>
        <div className="column">
          <h3>Team</h3>
          <div>Michael</div>
          <div>John</div>
          <div>Paul</div>
          <div>Olive</div>
        </div>
        <div className="column">
          <h3>Products</h3>
          <div>Food for everyone</div>
          <div>Various drinks</div>
          <div>Clothes </div>
          <div>Workshop tools</div>
        </div>
        <div className="column">
          <h3>Contact</h3>
          <div>+48 123 456 789</div>
          <div>mail@mail.com</div>
        </div>
      </div>
      <span id="signature">
        Created by{" "}
        <a
          href="https://github.com/mfakawa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Michał Kawa
        </a>
      </span>
    </footer>
  );
};
