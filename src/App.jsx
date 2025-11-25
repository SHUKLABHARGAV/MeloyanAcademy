import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";
import ProgramDetails from "./components/ProgramDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
       <Route path="/trainers" element={<Trainers />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/program/:id" element={<ProgramDetails />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
