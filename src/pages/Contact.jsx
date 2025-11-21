import React from "react";

const Contact = () => {
  return (
    <main className="main contact-page">

      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Contact</h1>
                <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Contact</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">

        {/* Google Map */}
        <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
          <iframe
            style={{ border: 0, width: "100%", height: "300px" }}
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.945275226943!2d-75.88698971678923!3d45.301063296482205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdffa354207551%3A0x8b7bc7b698a9d7cf!2sMELOYAN%20Academy!5e1!3m2!1sen!2sin!4v1763748028936!5m2!1sen!2sin" 
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">

            {/* INFO LEFT SIDE */}
            <div className="col-lg-4">

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>200-430 Hazeldean Rd, Ottawa, ON K2L 1E8</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>819 449 8507</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>meloyanacademy@gmail.com</p>
                </div>
              </div>

            </div>

            {/* CONTACT FORM */}
            <div className="col-lg-8">

              <form className="php-email-form" data-aos="fade-up" data-aos-delay="200" onSubmit={(e) => e.preventDefault()}>
                <div className="row gy-4">

                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>

                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                  </div>

                  <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Subject" required />
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control" rows="6" placeholder="Message" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit">Send Message</button>
                  </div>

                </div>
              </form>

            </div>

          </div>
        </div>

      </section>

    </main>
  );
};

export default Contact;
