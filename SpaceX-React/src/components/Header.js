import logo from "../img/logo.png";
import React, { useEffect } from "react";
import { openMenu } from "../Features/states";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeName } from "../Features/states";
const Header = () => {
  const { isOpen } = useSelector((state) => state.menu);

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
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav className="desktop-main-menu">
          <ul>
            <li onClick={() => dispatch(changeName("/falcon9"))}>
              <Link to={"/falcon9"}>Falcon 9</Link>
            </li>
            <li onClick={() => dispatch(changeName("/falcon-heavy"))}>
              <Link to={"falcon-heavy"}>Falcon Heavy</Link>
            </li>
            <li onClick={() => dispatch(changeName("/dream"))}>
              <Link to={"dream"}>Dream</Link>
            </li>
            <li onClick={() => dispatch(changeName("/starship"))}>
              <Link to={"starship"}>Starship</Link>
            </li>
            <li onClick={() => dispatch(changeName("/human-spaceflight"))}>
              <Link to={"human-spaceflight"}>Human Spaceflight</Link>
            </li>
            <li onClick={() => dispatch(changeName("/rideshare"))}>
              <Link to={"rideshare"}>RideShare</Link>
            </li>
            <li onClick={() => dispatch(changeName("/shop"))}>
              <Link to={"shop"}>Shop</Link>
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
