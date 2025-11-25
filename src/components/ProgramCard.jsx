import React from "react";
import { Link } from "react-router-dom";

const ProgramCard = ({ id, title, description, img, delay }) => {
  return (
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={delay}>
      <div
        className="program-card"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
          padding: "24px",
          minHeight: "330px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            borderRadius: "16px",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h4 style={{ fontWeight: "700", color: "white" }}>{title}</h4>

          <p className="mt-3" style={{ fontSize: "15px" }}>
            {description}
          </p>

          <Link to={`/program/${id}`} className="mt-2 d-inline-block Programbtn">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
