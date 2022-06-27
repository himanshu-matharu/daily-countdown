import React, { useEffect, useRef } from "react";
import { ReactComponent as Seperator } from "../assets/seperator.svg";
import { ReactComponent as Terminal } from "../assets/terminal_seperator.svg";
import { ReactComponent as Header } from "../assets/ticker_header.svg";
import Tick from "@pqina/flip";
import "./Flip.css";

const Flip = () => {
  const divRef = useRef();
  const tickRef = useRef();

  // Setup the timer scheduler
  const setupTimer = function(tick) {
    Tick.count.schedule("every day at 00:00", {
      format: ["h", "m", "s"],
    }).onupdate = function(value) {
      tick.value = {
        h: value[0],
        m: value[1],
        s: value[2],
      };
    };
  };

  // Make the tick instance and store it in a ref
  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
      setupTimer(tick);
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      didInit,
    });

    return () => Tick.DOM.destroy(tickValue);
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker-header">
        <Header />
      </div>
      <div ref={divRef} className="tick">
        <div data-layout="horizontal">
          <div>
            <Terminal />
          </div>
          <span data-key="h" data-transform="pad(00)" data-view="flip"></span>
          <div>
            <Seperator />
          </div>
          <span data-key="m" data-transform="pad(00)" data-view="flip"></span>
          <div>
            <Seperator />
          </div>
          <span data-key="s" data-transform="pad(00)" data-view="flip"></span>
          <div>
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flip;
