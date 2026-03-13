import { Link, Routes, Route } from "react-router-dom";
import Home from "../exam/Home";
import CourseRegistration from "../exam/CourseRegistration";
import RegisteredCourses from "../exam/RegisteredCourses";
import APIDemo from "../exam/APIDemo";
import PageNotFound from "../exam/PageNotFound";

export default function MainNavBar() {
  return (
    <div>

      <h2>Course Registration</h2>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/register">Course Registration</Link> |{" "}
        <Link to="/courses">Registered Courses</Link> |{" "}
        <Link to="/api">API Demo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<CourseRegistration />} />
        <Route path="/courses" element={<RegisteredCourses />} />
        <Route path="/api" element={<APIDemo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}