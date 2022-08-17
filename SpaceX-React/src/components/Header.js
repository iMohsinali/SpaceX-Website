import logo from "../img/logo.png";
import React, { useEffect } from "react";
import { openMenu, closeMenu } from "../Features/states";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { isOpen } = useSelector((state) => state.menu);
  console.log(isOpen, openMenu);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const dispatch = useDispatch();
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

      <button
        class={`${isOpen ? "open hamburger" : "hamburger"}`}
        type="button"
        onClick={() => {
          dispatch(openMenu());
        }}
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>
  );
};

export default Header;
