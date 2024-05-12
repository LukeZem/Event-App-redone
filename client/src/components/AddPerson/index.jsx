import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddPerson = ({ setPersons }) => {

    const [person, setPerson] = useState({
        name: "",
        role: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerson((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        console.log("form submitted");
        e.preventDefault();
        try {
            const response = await axios({
                method: "POST",
                url: '/server/person', // make route then fill this.,
                data: person // person data goes here
            })
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                console.log("person added to DB", response.data);
                setPersons(prevPersons => [...prevPersons, response.data]);
            } else {
                console.error("Error adding person", response.data)
            }
        } catch (err) {
            console.error('Error sending request', err)
        }
        setPerson({
            name: "",
            role: ""
        })
    }


    return (
        <div>
            <h1>Create an person</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={person.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="title">Role:</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={person.role}
                        onChange={handleInputChange}
                    />
                </div>
                <button type='submit'>Add person</button>
            </form>
        </div>
    )
}

export default AddPerson