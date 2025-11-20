import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl d-flex align-items-center">

        <a href="/" className="logo d-flex align-items-center me-auto">
          <img src={logo} alt="" />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
           
          <li>
  <Link to="/" className="active">Home</Link>
</li>

<li>
  <Link to="/about">About</Link>
</li>

<li>
  <Link to="/courses">Courses</Link>
</li>

<li>
  <Link to="/trainers">Trainers</Link>
</li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="#courses">Get Started</a>
      </div>
    </header>
  );
};

export default Navbar;
