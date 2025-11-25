import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import aboutImg from "../assets/img/HERO2.jpg";

// animation libraries
import AOS from "aos";
import "aos/dist/aos.css";

import PureCounter from "@srexi/purecounterjs";
import Testimonials from "../components/Testimonials";

export default function About() {
  useEffect(() => {
    AOS.init();
    new PureCounter();
  }, []);

  return (
    <main className="main">

      {/* Global Breadcrumb */}
      <Breadcrumb title="About Us" />

      {/* About Us Section */}
      <section id="about-us" className="section about-us">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={aboutImg} className="img-fluid" />
            </div>

            <div
              className="col-lg-6 order-2 order-lg-1 content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Why Families Trust Meloyan Academy</h3>
               <p className="fst-italic" style={{fontWeight:500}}>
             At Meloyan Academy, every student receives the individualized support they need to succeed — academically, emotionally, and confidently. Our approach blends expert teaching with a warm, encouraging environment that helps learners grow at their own pace.
            </p>

              <ul>
                <li><i className="bi bi-check-circle"></i> Personalized learning plans</li>
              <li><i className="bi bi-check-circle"></i> Expert teachers & counsellors</li>
              <li><i className="bi bi-check-circle"></i>Supportive & inclusive environment</li>
              <li><i className="bi bi-check-circle"></i> Clear communication with parents</li>
            
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Counts Section */}
      <section id="counts" className="section counts light-background">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Students</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="64"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Courses</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="42"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Events</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="24"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Trainers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
<Testimonials/>
    </main>
    
  );
}
