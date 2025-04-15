import React from "react";
import StaffView from "./components/StaffView";
// import HRForm from "./components/HRForm"; ← removed this line

function App() {
  return (
    <div className="App">
      <h1>Leave Balance Tracker</h1>
      <StaffView />
      {/* <hr />
      <HRForm /> ← removed this */}
    </div>
  );
}

export default App;
