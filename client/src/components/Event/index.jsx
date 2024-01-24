/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react'
import './index.css'

const Event = ({ event, handleDelete, setEvents }) => {
    //  we will have many of this compnent!

    // EACH ONE will have a showform state
    const [show, setShow] = useState(false);
    const [newDescription, setNewDescription] = useState(event.description);

    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        console.log(date.getDate());
        const day = (date.getDate() + 1).toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0-indexed
        const year = date.getFullYear();

        console.log(`LOGGING RESULT OF DATE CALC: ${month}/${day}/${year}`);
        return `${month}/${day}/${year}`;
    };

    
    const handleClick = (eventId) => {
        // axios call to PUT route
        // id,   new information
        // PUT            /events/:idOfEvent/
        axios({
            url: `/server/events/${eventId}`,
            method: "PUT",
            data: {
                description: newDescription
            }
            // FIND THIS IN THE REQ.BODY
        }).then((response) => {

            setEvents((events) => {
                // find the event to change
                // replace it with response.body
                // response.body is the UPDATED object 
                // []

                let stateCopy = events.map((eventObj) => {
                    if (eventObj._id === response.data._id) {
                        return response.data;
                    } else {
                        return eventObj
                    }
                });
                return stateCopy


            })
        })
    }

    return (
        <div>
            <div key={event._id} className="event-item">
                <button onClick={() => handleDelete(event._id)}>Delete</button>
                <button onClick={() => setShow(!show)}>Edit</button>
                <h2>{event.title}</h2>
                <p>Date: {formatDate(event.date)}</p>
                <p>Location: {event.location}</p>
                <p>Description: {event.description}</p>
                <div className="organizer">
                    <strong>Organizer:</strong>
                    <p>Name: {event.organizer.name}</p>
                    <p>Role: {event.organizer.role}</p>
                </div>
                {/* show form? */}
                {show ? <form onSubmit={(e) => e.preventDefault()} >
                    <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                    <button onClick={() => handleClick(event._id)} >Update this Event</button>
                </form>
                    : <></>}
            </div>
        </div>
    )
}

export default Event