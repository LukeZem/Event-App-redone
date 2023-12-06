import React from 'react'
import './index.css'
import { useEffect } from 'react'
import axios from 'axios'

const ViewPeople = ({ people, setPeople }) => {

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios('/server/people');
        setPeople(response.data);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };
    fetchPeople();
  }, [])



  return (
    <div className="event-list">
      <h1>Groups</h1>
      {people.map((person) => {
        return (
          <div key={person._id}>
            <h3>{person.name}</h3>
            <p>{person.role}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ViewPeople