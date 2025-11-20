import { useParams } from "react-router-dom";
import courses from "../data/coursesData";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Breadcrumb from "../components/Breadcrumb";
import CourseTabs from "../components/CourseTabs";
const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) return <h2>Course not found</h2>;

  return (
    <>
      {/* 🔶 Your Reusable Breadcrumb Component */}
      <Breadcrumb title={course.title} />

      {/* COURSE DETAILS SECTION */}
      <section id="courses-course-details" className="courses-course-details section">
        <div className="container" data-aos="fade-up">
          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-8">
              <img src={course.image} className="img-fluid mb-4" alt="" />

              <h3>{course.title}</h3>
              <p>{course.longDescription || course.description}</p>
            </div>

            {/* RIGHT SIDE INFO BOXES */}
            <div className="col-lg-4">
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Trainer</h5>
                <p>{course.instructor}</p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Course Fee</h5>
                <p>${course.price}</p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Available Seats</h5>
                <p>{course.seats || 30}</p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Schedule</h5>
                <p>{course.schedule || "5.00 pm - 7.00 pm"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL TABS (Same design as template) */}
    <CourseTabs course={course} />
    </>
  );
};

export default CourseDetails;
