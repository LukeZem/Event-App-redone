import React, { createContext, useState } from "react";

// Create a new context
export const primaryContext = createContext();

// Create a provider component
const PrimaryProvider = ({ children }) => {
  // Example state and functions

  const [events, setEvents] = useState([]);
  const [people, setPeople] = useState([]);

  // Provide the state and functions to the children components
  return (
    <primaryContext.Provider
      value={{
        events,
        setEvents,
        people,
        setPeople,
      }}
    >
      {children}
    </primaryContext.Provider>
  );
};

// Custom hook to access the context
export default PrimaryProvider;
