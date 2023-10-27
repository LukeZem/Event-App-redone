import React from 'react'
import './index.css'
import { useEffect } from 'react'

const ViewEmployee = ({ employees, setEmployees }) => {

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios('/server/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEmployees();
  }, [])



  return (
    <div className="event-list">
      <h1>My List Of Events</h1>
      {employees.map(event => (
        <Event key={event._id} event={event} setEvents={setEvents} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default ViewEmployee