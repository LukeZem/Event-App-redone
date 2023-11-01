import React from 'react'
import './index.css'
import { useEffect } from 'react'
import axios from 'axios'

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
      {employees.map((employee) => {
        return (
          <div key={employee._id}>
            <h3>{employee.name}</h3>
            <p>{employee.age}</p>
            <p>{employee.role}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ViewEmployee