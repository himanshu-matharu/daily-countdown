import React from "react";
import Flip from "./components/Flip";
import Date from "./components/Date";
import mainFrame from "./assets/main_frame.svg";
import "./App.css";

function App() {
  return (
    <div className="center-flex">
      <div className="App" style={{ backgroundImage: `url(${mainFrame})` }}>
        <Date />
        <Flip />
      </div>
    </div>
  );
}

export default App;
