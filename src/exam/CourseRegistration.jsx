import { useState } from "react";

export default function CourseRegistration() {

  const courseData = {
    "1-1": ["Mathematics", "Physics", "Programming in C","Java-1","FWD"],
    "1-2": ["Chemistry", "Data Structures", "Digital Logic"],
    "2-1": ["Java-2", "Operating Systems", "Computer Networks"],
    "2-2": ["DBMS", "Software Engineering", "Web Development"],
    "3-1": ["Machine Learning", "Artificial Intelligence", "Cloud Computing"],
    "3-2": ["Big Data", "Cyber Security", "IoT"],
    "4-1": ["Deep Learning", "Blockchain", "Data Mining"],
    "4-2": ["Project", "Internship", "Advanced AI"]
  };

  const [id, setId] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCheckbox = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      id,
      year,
      semester,
      courses: selectedCourses
    };
    const existing = JSON.parse(localStorage.getItem("studentCourses")) || [];
    existing.push(studentData);

    localStorage.setItem("studentCourses", JSON.stringify(existing));

    alert("Course Registered Successfully");
  };

  const key = `${year}-${semester}`;
  const courses = courseData[key] || [];

  return (
    <div>

      <h2>Course Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <br /><br />

        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
        <br /><br />

        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option value="">Select Semester</option>
          <option value="1">Sem 1</option>
          <option value="2">Sem 2</option>
        </select>

        <h3>Courses</h3>

        {courses.map((course, index) => (
          <div key={index}>
            <input
              type="checkbox"
              onChange={() => handleCheckbox(course)}
            />
            {course}
          </div>
        ))}

        <br />
        <button type="submit">Register</button>

      </form>

    </div>
  );
}