import { useContext, useState } from 'react';
import './App.css'
import EventForm from './components/EventForm'
import EventList from './components/EventList'
import AddPerson from './pages/AddPerson';
import ViewPerson from './pages/ViewPeople';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import { authContext } from './context/AuthProvider';

function App() {

  const [events, setEvents] = useState([]);
  const [people, setPeople] = useState([]);

  return (
    <>
      <div className='app'>

        <Navbar className='navbar' />
        <Routes>
          <Route path='/' element={
            <>
              <EventForm setEvents={setEvents} />
              <div id='event-container'>
                <EventList events={events} setEvents={setEvents} />
              </div>
            </>
          } />
          <Route path='/people' element={
            <>
              <AddPerson setPeople={setPeople} />
              <ViewPerson people={people} setPeople={setPeople} />
            </>
          } />
        </Routes>

      </div>
    </>
  )
}

export default App
