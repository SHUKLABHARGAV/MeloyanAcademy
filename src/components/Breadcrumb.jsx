import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>

      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="current">{title}</li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumb;
