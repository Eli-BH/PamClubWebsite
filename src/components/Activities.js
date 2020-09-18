import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Footer from "../components/Footer";

const Activities = () => {
  const handleEventClick = (e) => {
    alert(e.event.extendedProps.description);
  };
  return (
    <div>
      <div className="Activities container ">
        <h2>Check out our events!</h2>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          eventClick={handleEventClick}
          events={
            [
              // {
              //   title: "event 2",
              //   date: "2020-09-02",
              //   extendedProps: { description: "This is a placeholder" },
              // },
            ]
          }
          className="calendar"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Activities;
