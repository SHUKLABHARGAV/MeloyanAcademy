import React from "react";
import testimonialData from "../data/testimonialData";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What are they saying</p>
      </div>

      {/* Swiper */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          slidesPerView={"auto"}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 2, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img
                    src={item.img}
                    className="testimonial-img"
                    alt={item.name}
                  />

                  <h3>{item.name}</h3>
                  <h4>{item.role}</h4>

                  {/* Stars */}
                  <div className="stars">
                    {Array(item.stars)
                      .fill(0)
                      .map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                  </div>

                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{item.message}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
