import React from "react";
import Image from "./../../assets/main.jpg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__left">
          <h4>#100DAYSOFCODE</h4>
          <h1>Hicham Alami Talbi Portfolio</h1>
          <p>
            Thank you for checking out my website! This is where I will be
            posting all my recent projects.
          </p>
          <a className="btn btn--stretched primary">Hire Me</a>
        </div>
        <div className="header__right">
          <div className="header__profile">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
