import React, { useEffect } from "react";
import AOS from "aos";
import programData from "../data/programData";
import ProgramCard from "./ProgramCard";

const ProgramsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section" style={{ paddingTop: "60px" }}>
      <div className="container">
        <div className="row gy-4">
          {programData.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              link={program.link}
              img={program.img}
              delay={program.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
