import { useState } from 'react';
import './App.css'
import EventForm from './components/EventForm'
import EventList from './components/EventList'
import AddPerson from './pages/AddPerson';
import ViewPerson from './pages/ViewPeople';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";

function App() {

  const [events, setEvents] = useState([]);
  const [people, setPeople] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <EventForm setEvents={setEvents} />
            <EventList events={events} setEvents={setEvents} />
          </>
        } />
        <Route path='/people' element={
          <>
            <AddPerson setPeople={setPeople} />
            <ViewPerson people={people} setPeople={setPeople}/>
          </>
        } />
      </Routes>


    </>
  )
}

export default App
