import React from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.scss";

export const HeaderNav = () => {
  return (
    <nav>
      <Link to="#">HOME </Link>
      <Link to="#">NEWS </Link>
      <Link to="#">SALE </Link>
      <Link to="#">CONTACT </Link>
    </nav>
  );
};
