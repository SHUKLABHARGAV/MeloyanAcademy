import React from "react";
import aboutImg from "../assets/img/about.jpg";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-6" data-aos="fade-up">
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi.</li>
              <li><i className="bi bi-check-circle"></i> Duis aute irure dolor.</li>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi.</li>
            </ul>
            <a href="#" className="read-more"><span>Read More</span></a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
