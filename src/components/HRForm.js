import React, { useState } from "react";
import { leaveData } from "../data";

const HRForm = () => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  const handleUpdate = () => {
    const person = leaveData.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );

    if (person) {
      person.balance = parseInt(balance);
      alert(`Updated ${name}'s balance to ${balance}`);
    } else {
      leaveData.push({ name, balance: parseInt(balance) });
      alert(`Added new record for ${name}`);
    }

    setName("");
    setBalance("");
  };

  return (
    <div>
      <h2>HR: Update Leave Record</h2>
      <input
        type="text"
        placeholder="Staff name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Leave balance"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default HRForm;
