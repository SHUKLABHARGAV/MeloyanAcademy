import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";

const Counts = () => {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <section id="counts" className="section counts light-background">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center">
              <span data-purecounter-start="0" data-purecounter-end="1232" className="purecounter"></span>
              <p>Students</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center">
              <span data-purecounter-start="0" data-purecounter-end="64" className="purecounter"></span>
              <p>Courses</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center">
              <span data-purecounter-start="0" data-purecounter-end="42" className="purecounter"></span>
              <p>Events</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center">
              <span data-purecounter-start="0" data-purecounter-end="24" className="purecounter"></span>
              <p>Trainers</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Counts;
