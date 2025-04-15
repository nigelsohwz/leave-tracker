import React, { useState } from "react";
import "./App.css";

function App() {
  const [staffList, setStaffList] = useState([]);
  const [name, setName] = useState("");
  const [leaves, setLeaves] = useState("");

  const addStaff = () => {
    if (name && leaves !== "") {
      setStaffList([...staffList, { name, leaves }]);
      setName("");
      setLeaves("");
    }
  };

  return (
    <div className="container">
      <h1>Leave Balance Tracker</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Staff Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Balance Leaves"
          value={leaves}
          onChange={(e) => setLeaves(e.target.value)}
        />
        <button onClick={addStaff}>Add</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Balance Leaves</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff, index) => (
            <tr key={index}>
              <td>{staff.name}</td>
              <td>{staff.leaves}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
