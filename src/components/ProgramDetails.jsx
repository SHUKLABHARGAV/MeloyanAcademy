import React from "react";
import { useParams } from "react-router-dom";
import programData from "../data/programData";
import Breadcrumb from "../components/Breadcrumb";

const ProgramDetails = () => {
  const { id } = useParams();
  const program = programData.find((item) => item.id === Number(id));

  if (!program) return <h2>Program not found</h2>;

  return (
    <>
      <Breadcrumb title={program.title} />

      <section className="program-details section">
        <div className="container" data-aos="fade-up">
          <div className="row g-4">

            {/* LEFT IMAGE */}
            <div className="col-lg-8">
              <img
                src={program.img}
                alt={program.title}
                className="img-fluid rounded mb-4"
                style={{ width: "100%", borderRadius: "12px" }}
              />

              <h2>{program.title}</h2>
              <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
                {program.description}
              </p>

              <a className="btn-get-started mt-3" href="/contact">
                Contact Us
              </a>
            </div>

            {/* RIGHT INFO BOX */}
            <div className="col-lg-4">
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Program Name</h5>
                <p>{program.title}</p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Suitable Grades</h5>
                <p>1–12 (varies by program)</p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Duration</h5>
                <p>Year-round</p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Mode</h5>
                <p>In-Person / Online</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramDetails;
