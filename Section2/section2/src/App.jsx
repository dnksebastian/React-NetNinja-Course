// import React, { useState } from "react";
import { useState } from "react";
import "./App.css";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import EventList from './components/EventList.jsx';

function App() {
  // const [name, setName] = useState('mario')
  // let name = "mario";
  const [showModal, setShowModal] = useState(false);

  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  console.log(showModal);

  const handleClick = (id) => {
    // name = 'luigi'
    // setName('luigi');
    // console.log(name)
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal((prevState) => !prevState);
  };

  const subtitle = "All the lates events in Marioland";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />
      <Title title="another title" subtitle="another subtitle" />
      {/* <h1>My name is {name}</h1> */}
      {/* <button onClick={handleClick}>Change name</button> */}

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}

      {showEvents && <EventList eventList={events} handleClickP={handleClick}>

      </EventList>


        // events.map((event, index) => (
        //   <React.Fragment key={event.id}>
        //     <h2>
        //       {index} - {event.title}
        //     </h2>
        //     <button
        //       onClick={() => {
        //         handleClick(event.id);
        //       }}
        //     >
        //       delete event
        //     </button>
        //   </React.Fragment>
        // ))
        }

      {/* <Modal>
        <h2>10% Off Coupon Code!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}

      {/* {showModal && <Modal handleClose={handleClose}>
      <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit nam et reprehenderit quibusdam temporibus officia dolorum quo sint nemo quis, laborum, quasi nisi fugit praesentium debitis repudiandae! Sapiente, omnis.</p>
        <a href="#">find out more...</a>
      </Modal>} */}

      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
      <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit nam et reprehenderit quibusdam temporibus officia dolorum quo sint nemo quis, laborum, quasi nisi fugit praesentium debitis repudiandae! Sapiente, omnis.</p>
        <a href="#">find out more...</a>
      </Modal>}

<div>
  <br />
      <button onClick={handleClose}>Open Modal</button>
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
</div>

    </div>
  );
}

export default App;
