import React from "react";
import founderImg from "../assets/img/founder.jpg";

const FounderSection = () => {
  return (
    <section id="founder" className="founder section">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Left Text Section */}
          <div className="col-lg-6 founder-content">
            <h2 className="founder-title">Meet the Founder</h2>

            <h3 className="founder-name">Alina Meloyan, M.Ed., M.Sc.</h3>
            <p className="founder-role">Founder & Head Instructor</p>

            <p className="founder-quote">
              “I believe that with the right guidance, every student can succeed 
              in math — and even enjoy it.”
            </p>

            <ul className="founder-list">
              <li>Master’s in Mathematics</li>
              <li>Master’s in Developmental Psychology</li>
              <li>10+ years of experience as a teacher & school counsellor</li>
              <li>ABA Therapist and Family & Individual Counsellor</li>
              <li>Expert in cultural adaptation & learning strategies</li>
            </ul>

            <a href="https://alinameloyan.com" target="_blank" rel="noreferrer" className="founder-btn">
              Visit Website
            </a>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 text-center">
            <img src={founderImg} alt="founder" className="founder-img" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
