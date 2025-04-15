import React, { useState } from "react";
import { leaveData } from "../data";

const StaffView = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const record = leaveData.find(
      (emp) => emp.name.toLowerCase() === name.toLowerCase()
    );
    setResult(record || { name, balance: "Not Found", mc: "-" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Check Leave and MC  Balance</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>

        {result && (
          <div style={styles.result}>
            <p><strong>{result.name}</strong></p>
            <p>Annual Leave Remaining: <strong>{result.balance}</strong></p>
            <p>MC Remaining: <strong>{result.mc}</strong></p>
            <p>Updated as of 15 April 2025</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "60px", // pushed down from top
    backgroundColor: "#f2f2f2",
    minHeight: "100vh",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginRight: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "6px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    fontSize: "18px",
  },
};

export default StaffView;
