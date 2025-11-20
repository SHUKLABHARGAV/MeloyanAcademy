import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { trainerData } from "../data/trainerData";

function Trainers() {
  return (
    <>
      <Breadcrumb title="Trainers" />

      <section className="trainers section">
        <div className="container">
          <div className="row gy-5">

            {trainerData.map((trainer) => (
              <div
                key={trainer.id}
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
              >
                <div className="member-img">
                  <img src={trainer.img} className="img-fluid" alt={trainer.name} />

                  <div className="social">
                    <a href={trainer.social.twitter}><i className="bi bi-twitter-x"></i></a>
                    <a href={trainer.social.facebook}><i className="bi bi-facebook"></i></a>
                    <a href={trainer.social.instagram}><i className="bi bi-instagram"></i></a>
                    <a href={trainer.social.linkedin}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>

                <div className="member-info text-center">
                  <h4>{trainer.name}</h4>
                  <span>{trainer.role}</span>
                  <p>{trainer.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
