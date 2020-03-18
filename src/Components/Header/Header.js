import React from "react";
import "./Header.scss";
import { HeaderIcons } from "./HeaderIcons/HeaderIcons";
import { HeaderNav } from "./HeaderNav/HeaderNav";
import { HeaderSearchBar } from "./HeaderSearchBar/HeaderSearchBar";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <HeaderIcons />
        <HeaderNav />
        <HeaderSearchBar />
      </div>
    </header>
  );
};
