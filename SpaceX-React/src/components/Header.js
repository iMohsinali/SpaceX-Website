import logo from "../img/logo.png";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="main-header">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <nav className="desktop-main-menu">
          <ul>
            <li>
              <a href="falcon9.html">Falcon 9</a>
            </li>
            <li>
              <a href="falcon-heavy.html">Falcon Heavy</a>
            </li>
            <li>
              <a href="#">Dream</a>
            </li>
            <li>
              <a href="#">Starship</a>
            </li>
            <li>
              <a href="#">Human Spaceflight</a>
            </li>
            <li>
              <a href="#">Rideshare</a>{" "}
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
