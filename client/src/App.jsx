import { useContext, useState } from "react";
import "./App.css";
import EventForm from "./components/EventForm";
import EventList from "./pages/EventList";
import AddPerson from "./components/AddPerson";
import ViewPerson from "./pages/ViewPeople";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { primaryContext } from "./context/PrimaryProvider"; // Adjust the path as necessary

function App() {
  const { events, setEvents, people, setPeople } = useContext(primaryContext);

  return (
    <>
      <div className="app">
        <Navbar className="navbar" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <EventForm setEvents={setEvents} />
                <div id="event-container">
                  <EventList events={events} setEvents={setEvents} />
                </div>
              </>
            }
          />
          <Route
            path="/people"
            element={
              <>
                <AddPerson setPeople={setPeople} />
                <ViewPerson people={people} setPeople={setPeople} />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
