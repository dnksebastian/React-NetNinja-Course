import { useState } from 'react'
import './App.css'

function App() {
  // const [name, setName] = useState('mario')
  // let name = "mario";

  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ]);

  console.log(showEvents)

  const handleClick = (id) => {
    // name = 'luigi'
    // setName('luigi');
    // console.log(name)
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }
  
  return (
    <div className="App">
      {/* <h1>My name is {name}</h1> */}
      {/* <button onClick={handleClick}>Change name</button> */}

      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>)}

      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>delete event</button>
        </div>
      ))}
    </div>
  )
}

export default App
