import { useEffect, useState } from "react";

export default function APIDemo() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("https://dummy-json.mock.beeceptor.com/companies")
      .then(res => res.json())
      .then(data => setCompanies(data));
  }, []);

  return (
    <div>

      <h2>API Demo - Companies</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Industry</th>
            <th>Employees</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.industry}</td>
              <td>{c.employeeCount}</td>
              <td>{c.country}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}