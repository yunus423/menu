import React, { useState } from "react";
import "../../components/navbar/navbar.css";
import { AiOutlineRocket, AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="container navbar">
      <div className="logo">
        <AiOutlineRocket size={35} color="orangered" />
        <p className="logo-text">
          Lucy.<span>com</span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}
        >
          <li onClick={hideMenu}>
            <a href="#">Home</a>
          </li>
          <li onClick={hideMenu}>
            <a href="#">Features</a>
          </li>
          <li onClick={hideMenu}>
            <a href="#">Download</a>
          </li>
          <li onClick={hideMenu}>
            <a href="#">subscribe</a>
          </li >
          <li onClick={hideMenu} className="nav-btn">
            <a className="btn btn-orange" href="#">
              Get started
            </a>
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
         <RiCloseLine size={27} color="#fff" />
        ) : (
            <AiOutlineBars size={27} color="#fff" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
