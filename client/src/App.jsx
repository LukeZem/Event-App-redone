import { useState } from 'react';
import './App.css'
import EventForm from './components/EventForm'
import EventList from './components/EventList'

function App() {

  const [events, setEvents] = useState([]);

  return (
    <>
      <h1>My Events</h1>
      <EventForm setEvents={setEvents} />
      <EventList events={events} setEvents={setEvents} />
    </>
  )
}

export default App
