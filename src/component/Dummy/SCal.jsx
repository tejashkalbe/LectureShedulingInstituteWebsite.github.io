import React from 'react'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import locales from 'date-fns/locale/en-US';
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Scal.module.css"
import ModelEvent from "../Event/ModelEvent"
import { useState } from 'react';


const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const SCal = ({allEvents}) => {
  const [modal,setModal] = useState(false);
  const [details,setDetails] = useState({})


  const handleClick=(e)=>{
    setModal(true);
    console.log(modal);
    setDetails({title:e.title,date:e.start,students:e.students})
  }

  const Close=()=>{
    setModal(false);
  }
  return (
    <div className={styles.outer}>
    <h2 className={styles.h2}>Join Class</h2>
    <div className={styles.container}>
      
        <Calendar
        className={styles.calendar}
          localizer={localizer}
          events={allEvents}
          onSelectEvent={(event)=>{
            console.log(event.title)
            console.log(event.start)
            console.log(event.students)
            handleClick(event);
          }

        }
          startAccessor="start"
          endAccessor="end"
          selectable
        />
    </div>
        {modal && <ModelEvent className={styles.modal} close={Close} details={details}/>}
    </div>

  )
}

export default SCal;