import { useEffect, useState } from "react";

export default function RegisteredCourses() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    const stored = JSON.parse(localStorage.getItem("studentCourses"));

    if (Array.isArray(stored)) {
      setStudents(stored);
    } else if (stored) {
      setStudents([stored]); // convert old object to array
    } else {
      setStudents([]);
    }

  }, []);

  return (
    <div>

      <h2>Registered Courses</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Semester</th>
            <th>Courses</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.year}</td>
              <td>{student.semester}</td>
              <td>{student.courses.join(", ")}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}