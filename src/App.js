import React, { useEffect } from "react";
import Flip from "./components/Flip";
import Date from "./components/Date";
import MainFrame from "./components/MainFrame";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Daily Countdown";
  }, []);

  return (
    <div className="center-flex">
      <div className="App-wrapper">
        <MainFrame />
        <div className="App">
          <Date />
          <Flip />
        </div>
      </div>
    </div>
  );
}

export default App;
