import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        {/* LOGO */}
        {/* <a href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="logo" />
        </a> */}
        <a href="/" className="logo">
  <img src={logo} alt="Meloyan Academy" />
</a>


        {/* GET STARTED (mobile only) */}
        <a className="btn-getstarted d-xl-none" href="#courses">Get Started</a>

        {/* MOBILE ICON */}
        <i
          className={`mobile-nav-toggle d-xl-none bi ${mobileOpen ? "bi-x" : "bi-list"}`}
          onClick={toggleMenu}
        ></i>

        {/* NAV MENU */}
        <nav id="navmenu" className={`navmenu ${mobileOpen ? "mobile-nav-active" : ""}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
            <li><Link to="/trainers" onClick={toggleMenu}>Trainers</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>

        {/* DESKTOP GET STARTED */}
        <a className="btn-getstarted d-none d-xl-block" href="#courses">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Navbar;
