// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import PureCounter from "@srexi/purecounterjs";
// import Breadcrumb from "../components/Breadcrumb";

// // Image imports (adjust paths if you store images elsewhere)
// import course1 from "../assets/img/course-1.jpg"; // uploaded file path (will be transformed)
// import course2 from "../assets/img/course-2.jpg";
// import course3 from "../assets/img/course-3.jpg";
// import trainer12 from "../assets/img/trainers/trainer-1-2.jpg";
// import trainer22 from "../assets/img/trainers/trainer-2-2.jpg";
// import trainer32 from "../assets/img/trainers/trainer-3-2.jpg";

// export default function Courses() {
//   useEffect(() => {
//     AOS.init({ once: true });
//     new PureCounter();
//   }, []);

//   return (
//     <main className="main courses-page">
//       {/* Global Breadcrumb (reusable) */}
//       <Breadcrumb title="Courses" />

//       {/* Courses Section */}
//       <section id="courses" className="courses section">
//         <div className="container">
//           <div className="row">

//             <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
//               <div className="course-item">
//                 <img src={course1} className="img-fluid" alt="Course 1" />
//                 <div className="course-content">
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <p className="category">Web Development</p>
//                     <p className="price">$169</p>
//                   </div>

//                   <h3><a href="/courses/website-design">Website Design</a></h3>
//                   <p className="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
//                   <div className="trainer d-flex justify-content-between align-items-center">
//                     <div className="trainer-profile d-flex align-items-center">
//                       <img src={trainer12} className="img-fluid" alt="Antonio" />
//                       <a href="#" className="trainer-link">Antonio</a>
//                     </div>
//                     <div className="trainer-rank d-flex align-items-center">
//                       <i className="bi bi-person user-icon"></i>&nbsp;50
//                       &nbsp;&nbsp;
//                       <i className="bi bi-heart heart-icon"></i>&nbsp;65
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> {/* End Course Item */}

//             <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
//               <div className="course-item">
//                 <img src={course2} className="img-fluid" alt="Course 2" />
//                 <div className="course-content">
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <p className="category">Marketing</p>
//                     <p className="price">$250</p>
//                   </div>

//                   <h3><a href="/courses/seo">Search Engine Optimization</a></h3>
//                   <p className="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
//                   <div className="trainer d-flex justify-content-between align-items-center">
//                     <div className="trainer-profile d-flex align-items-center">
//                       <img src={trainer22} className="img-fluid" alt="Lana" />
//                       <a href="#" className="trainer-link">Lana</a>
//                     </div>
//                     <div className="trainer-rank d-flex align-items-center">
//                       <i className="bi bi-person user-icon"></i>&nbsp;35
//                       &nbsp;&nbsp;
//                       <i className="bi bi-heart heart-icon"></i>&nbsp;42
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> {/* End Course Item */}

//             <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
//               <div className="course-item">
//                 <img src={course3} className="img-fluid" alt="Course 3" />
//                 <div className="course-content">
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <p className="category">Content</p>
//                     <p className="price">$180</p>
//                   </div>

//                   <h3><a href="/courses/copywriting">Copywriting</a></h3>
//                   <p className="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
//                   <div className="trainer d-flex justify-content-between align-items-center">
//                     <div className="trainer-profile d-flex align-items-center">
//                       <img src={trainer32} className="img-fluid" alt="Brandon" />
//                       <a href="#" className="trainer-link">Brandon</a>
//                     </div>
//                     <div className="trainer-rank d-flex align-items-center">
//                       <i className="bi bi-person user-icon"></i>&nbsp;20
//                       &nbsp;&nbsp;
//                       <i className="bi bi-heart heart-icon"></i>&nbsp;85
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> {/* End Course Item */}

//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/coursesData";

const Courses = () => {
  return (
    <div className="main-container">

      {/* Page Title + Breadcrumb */}
      <div className="page-title">
        <div className="heading py-5">
          <h1 className="text-center">Courses</h1>
          <p className="text-center">Explore our best learning programs.</p>
        </div>

        <nav className="breadcrumbs">
          <div className="container">
            <ol className="breadcrumb-list d-flex gap-2">
              <li><Link to="/">Home</Link></li>
              <li className="current">Courses</li>
            </ol>
          </div>
        </nav>
      </div>

      <section id="courses" className="courses section py-5">
        <div className="container">
          <div className="row">

            {coursesData.map((course) => (
              <div key={course.id} className="col-lg-4 col-md-6 mb-4">
                <div className="course-item" data-aos="zoom-in">
                  
                  <Link to={`/courses/${course.id}`}>
                    <img src={course.image} className="img-fluid" alt="" />
                  </Link>

                  <div className="course-content">
                    <div className="d-flex justify-content-between mb-2">
                      <p className="category">{course.category}</p>
                      <p className="price">${course.price}</p>
                    </div>

                    <h3>
                      <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </h3>

                    <p className="description">{course.description}</p>

                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img src={course.trainer.avatar} className="img-fluid" alt="" />
                        <a className="trainer-link">{course.trainer.name}</a>
                      </div>
                      <div className="trainer-rank d-flex">
                        <i className="bi bi-person"></i>&nbsp;{course.trainer.students}
                        &nbsp;&nbsp;
                        <i className="bi bi-heart"></i>&nbsp;{course.trainer.likes}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Courses;
