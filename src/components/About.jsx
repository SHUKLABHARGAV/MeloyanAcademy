// import React from "react";
// import aboutData from "../data/aboutData";

// const About = () => {
//   return (
//     <>
//       {aboutData.map((item, index) => {
//         const isEven = index % 2 === 0;

//         return (
//           <section key={index} className="about section">
//             <div className="container">
//               <div className="row gy-4 align-items-center">

//                 {/* LEFT SIDE */}
//                 {isEven ? (
//                   <div className="col-lg-6 left-img" data-aos="fade-up">
//                     <img src={item.img} className="img-fluid about-img" alt="" />
//                   </div>
//                 ) : (
//                   <div
//                     className="col-lg-6 content"
//                     data-aos="fade-up"
//                     data-aos-delay="200"
//                   >
//                     <h3>{item.title}</h3>

//                     {item.description.map((para, i) => (
//                       <p key={i} className="fst-italic" style={{ fontWeight: 500 }}>
//                         {para}
//                       </p>
//                     ))}

//                     <ul>
//                       {item.points.map((p, i) => (
//                         <li key={i}>
//                           <i className="bi bi-check-circle"></i> {p}
//                         </li>
//                       ))}
//                     </ul>

//                     <a href="#" className="read-more"><span>Read More</span></a>
//                   </div>
//                 )}

//                 {/* RIGHT SIDE */}
//                 {!isEven ? (
//                   <div className="col-lg-6" data-aos="fade-up">
//                     <img src={item.img} className="img-fluid about-img" alt="" />
//                   </div>
//                 ) : (
//                   <div
//                     className="col-lg-6 content"
//                     data-aos="fade-up"
//                     data-aos-delay="200"
//                   >
//                     <h3>{item.title}</h3>

//                     {item.description.map((para, i) => (
//                       <p key={i} className="fst-italic" style={{ fontWeight: 500 }}>
//                         {para}
//                       </p>
//                     ))}

//                     <ul>
//                       {item.points.map((p, i) => (
//                         <li key={i}>
//                           <i className="bi bi-check-circle"></i> {p}
//                         </li>
//                       ))}
//                     </ul>

//                     <a href="#" className="read-more"><span>Read More</span></a>
//                   </div>
//                 )}

//               </div>
//             </div>
//           </section>
//         );
//       })}
//     </>
//   );
// };

// export default About;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aboutData from "../data/aboutData";

const About = () => {
  return (
    <section className="about section">
      <div className="container">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="aboutSwiper"
        >
          {aboutData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <SwiperSlide key={index}>
                <div className="row gy-4 align-items-center">

                  {/* LEFT SIDE */}
                  {isEven ? (
                    <div className="col-lg-6 left-img" data-aos="fade-up">
                      <img src={item.img} className="img-fluid about-img" alt="" />
                    </div>
                  ) : (
                    <div
                      className="col-lg-6 content"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <h3>{item.title}</h3>

                      {item.description.map((para, i) => (
                        <p key={i} className="fst-italic" style={{ fontWeight: 500 }}>
                          {para}
                        </p>
                      ))}

                      <ul>
                        {item.points.map((p, i) => (
                          <li key={i}>
                            <i className="bi bi-check-circle"></i> {p}
                          </li>
                        ))}
                      </ul>

                      <a href="#" className="read-more"><span>Read More</span></a>
                    </div>
                  )}

                  {/* RIGHT SIDE */}
                  {!isEven ? (
                    <div className="col-lg-6" data-aos="fade-up">
                      <img src={item.img} className="img-fluid about-img" alt="" />
                    </div>
                  ) : (
                    <div
                      className="col-lg-6 content"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <h3>{item.title}</h3>

                      {item.description.map((para, i) => (
                        <p key={i} className="fst-italic" style={{ fontWeight: 500 }}>
                          {para}
                        </p>
                      ))}

                      <ul>
                        {item.points.map((p, i) => (
                          <li key={i}>
                            <i className="bi bi-check-circle"></i> {p}
                          </li>
                        ))}
                      </ul>

                      <a href="#" className="read-more"><span>Read More</span></a>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
};

export default About;
