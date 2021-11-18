import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [burgerBtn, setBurgetBtn] = useState(false);
  return (
    <header>
      <a to="/">
        {" "}
        <div style={{ color: "white" }} className="logo">
          LOGO
        </div>{" "}
      </a>

      <div
        className={`menu-btn ${burgerBtn ? "open" : ""}`}
        onClick={() => setBurgetBtn(!burgerBtn)}
      >
        <div className="menu-btn__burger"></div>
      </div>
      <ul className={`header__ul ${burgerBtn ? "dropdown" : ""}`}>
        <a to="#"></a>
        <a href="#roadmap">
          <li className="header__li" style={{ animation: "fadeIn 3s" }}>
            Roadmap
          </li>
        </a>
        <a href="#gallery">
          <li className="header__li" style={{ animation: "fadeIn 4s" }}>
            Team
          </li>
        </a>
        <a href="#about">
          <li className="header__li" style={{ animation: "fadeIn 5s" }}>
            Pyme
          </li>
        </a>
        <a href="#about">
          <li className="header__li" style={{ animation: "fadeIn 5s" }}>
            Discrod
          </li>
        </a>
      </ul>
      {/* <button className="wallet__btn">Connect Wallet</button> */}
    </header>
  );
}

export default Header;
