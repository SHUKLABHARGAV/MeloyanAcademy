
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// use your uploaded tab images (the system will transform the local path into a URL)
 
import tab1 from "../assets/img/tabs/tab-1.png";
import tab2 from "../assets/img/tabs/tab-2.png";
import tab3 from "../assets/img/tabs/tab-3.png";
import tab4 from "../assets/img/tabs/tab-4.png";
import tab5 from "../assets/img/tabs/tab-5.png";

const TabPane = ({ id, title, lead, body, imgSrc }) => (
  <div className={`tab-pane ${id === "tab-1" ? "active show" : ""}`} id={id}>
    <div className="row align-items-center">
      {/* left text column */}
      <div className="col-lg-8 details order-2 order-lg-1">
        <h3>{title}</h3>
        <p className="fst-italic">{lead}</p>
        <p>{body}</p>
      </div>

      {/* right image column - vertically centered */}
      <div className="col-lg-4 text-center order-1 order-lg-2 d-flex align-items-center justify-content-center">
        <img src={imgSrc} className="img-fluid tab-side-img" alt="" />
      </div>
    </div>
  </div>
);

const CourseTabs = () => {
  return (
    <section id="tabs" className="tabs section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {/* vertical nav */}
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
              </li>
            </ul>
          </div>

          {/* tab content */}
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <TabPane
                id="tab-1"
                title="Architecto ut aperiam autem id"
                lead="Qui laudantium consequatur laborum sit qui ad sapiente dila parde..."
                body="Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint..."
                imgSrc={tab1}
              />

              <TabPane
                id="tab-2"
                title="Unde praesentium sed"
                lead="Qui laudantium voluptatem..."
                body="Veniam suscipit repellendus..."
                imgSrc={tab2}
              />

              <TabPane
                id="tab-3"
                title="Pariatur explicabo vel"
                lead="Eos voluptatibus quo..."
                body="Iure officiis odit rerum. Harum sequi eum illum corrupti..."
                imgSrc={tab3}
              />

              <TabPane
                id="tab-4"
                title="Fuga dolores inventore laboriosam ut est accusamus"
                lead="Totam aperiam accusamus. Repellat consequuntur iure voluptas..."
                body="Eaque consequuntur consequuntur libero expedita in voluptas..."
                imgSrc={tab4}
              />

              <TabPane
                id="tab-5"
                title="Est eveniet ipsam sindera pad rone matrelat sando reda"
                lead="Omnis blanditiis saepe eos autem qui sunt debitis porro quia."
                body="Exercitationem nostrum omnis. Ut reiciendis repudiandae minus..."
                imgSrc={tab5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseTabs;
