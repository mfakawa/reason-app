import React from "react";
import { Link } from "react-router-dom";
import { Basket } from "./Basket/Basket";
import user from "./user.png";
import en from "./en.png";
import "./HeaderIcons.scss";

export const HeaderIcons = () => {
  return (
    <section>
      <Link to="/">
        <h1>MY STORE ICON</h1>
      </Link>
      <div className="header-icons">
        <div className="english">
          <img src={en} alt="english" />
        </div>
        <div className="user">
          <img src={user} alt="user" />
        </div>
        <Basket />
      </div>
    </section>
  );
};
