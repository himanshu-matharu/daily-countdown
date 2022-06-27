import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Date.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Date = () => {
  const initialDate = moment().toDate();
  const [date, setDate] = useState({
    day: initialDate.getDate(),
    month: monthNames[initialDate.getMonth()],
  });

  useEffect(() => {
    let lastTimeout = 0;
    let setupReload = function() {
      const timeUntilMidnight = moment().diff(
        moment()
          .endOf("day")
          .add(1, "ms"),
        "ms"
      );
      return setTimeout(function() {
        lastTimeout = setupReload();
        const currDate = moment().toDate();
        setDate({
          day: currDate.getDate(),
          month: monthNames[currDate.getMonth()],
        });
      }, timeUntilMidnight);
    };

    lastTimeout = setupReload();
    return () => {
      clearInterval(lastTimeout);
    };
  }, [setDate]);

  return (
    <div className="date">
      <span className="date-day">{date.day}</span>
      <span className="date-month">{date.month}</span>
    </div>
  );
};

export default Date;
