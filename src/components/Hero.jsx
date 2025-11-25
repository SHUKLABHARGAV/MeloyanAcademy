import React, { useEffect } from "react";
import AOS from "aos";
import heroBg from "../assets/img/hero4.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroBg} alt="" data-aos="fade-in" />

      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100">
      <h2> Math Can Be Exciting<br /></h2><h2 style={{fontWeight:800,color:"#dc9f6f"}}>And We’ll Show Your Child How</h2>
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
        At Meloyan Academy, we help children see math in a completely new light — without
the stress, without the confusion, and without the fear. Through clear explanations,
proven teaching strategies, and a supportive environment, we turn “I don’t get it” into “I
love this!”
        </p>
        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <a href="#courses" className="btn-get-started">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
