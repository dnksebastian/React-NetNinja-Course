import React from "react";

function EventList({eventList, handleClickP}) {
    return (
        eventList.map((event, index) => (
            <React.Fragment key={event.id}>
              <h2>
                {index} - {event.title}
              </h2>
              <button
                onClick={() => {
                  handleClickP(event.id);
                }}
              >
                delete event
              </button>
            </React.Fragment>))
    )
}

export default EventList;


// Course solution:

// import React from 'react'

// export default function EventList({ events, handleClick }) {
//   return (
//     <div>
//       {events.map((event, index) => (
//         <React.Fragment key={event.id}>
//           <h2>{index} - {event.title}</h2>
//           <button onClick={() => handleClick(event.id)}>delete event</button>
//         </React.Fragment>
//       ))}
//     </div>
//   )
// }