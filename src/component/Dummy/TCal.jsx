import React from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import locales from "date-fns/locale/en-US";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import styles from "./Tcal.module.css";

// const locales = {
//   "en-US": require("date-fns/locale/en-US"),
// };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// const events = [
//   {
//     title: "Nephrologist Appointment, DR. Pankaj Kumar",
//     allDay: true,
//     start: new Date(2023, 9, 15),
//     end: new Date(2023, 9, 15),
//   },
//   {
//     name: "Tejas Kalbe",
//     title: "Dentist Appointment, DR. Tejas Kalbe",
//     start: new Date(2023, 9, 10),
//     end: new Date(2023, 9, 10),
//   },
//   {
//     name: "Aniket Tambe",
//     title: "Epidemiologist Appointment, DR. Aniket Tambe",
//     start: new Date(2023, 9, 5),
//     end: new Date(2023, 9,6),
//   },
// ];
const TCal = ({ allEvents, setAllEvents }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    students: "",
  });

  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        break;
      }

      setAllEvents([...allEvents, newEvent]);
    }
  }
  return (
    <>
      <h2>Add Class</h2>
      <div className={styles.container}>
        <div className={styles.App}>
          <select
            name="select"
            id="select"
            className={styles.all}
            onChange={(event) =>
              setNewEvent((prev) => ({ ...prev, title: event.target.value }))
            }
          >
            <option value="" disabled selected>
              Select Course
            </option>
            <option value="Full-Stack">Full Stack</option>
            <option value="Data-Science">Data Science</option>
            <option value="UI/UX">UI/UX</option>
          </select>
          <DatePicker
            className={styles.dpicker}
            placeholderText="Start Date"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
          <DatePicker
            className={styles.dpicker}
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <input
            className={styles.all}
            type="number"
            onChange={(event) =>
              setNewEvent((prev) => ({ ...prev, students: event.target.value }))}
            placeholder="Slot Quantity"
          />
          <button className={styles.button} onClick={handleAddEvent}>
            Add Event
          </button>
        </div>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 450, width: 750, margin: "50px" }}
        />
      </div>
    </>
  );
};

export default TCal;
