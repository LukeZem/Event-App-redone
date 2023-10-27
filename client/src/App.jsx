import { useState } from 'react';
import './App.css'
import EventForm from './components/EventForm'
import EventList from './components/EventList'
import AddEmployee from './pages/AddEmployee';
import ViewEmployee from './pages/ViewEmployees';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";

function App() {

  const [events, setEvents] = useState([]);
  const [employees, setEmployees] = useState([]);

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
        <Route path='/employees' element={
          <>
            <AddEmployee setEmployees={setEmployees} />
            <ViewEmployee employees={employees} setEmployees={setEmployees}/>
          </>
        } />
      </Routes>


    </>
  )
}

export default App
