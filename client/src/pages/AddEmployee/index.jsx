import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        role: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevState) => ({
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
                url: '/server/employees', // make route then fill this.,
                data: employee // employee data goes here
            })
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                console.log("employee added to DB", response.data);
            } else {
                console.error("Error adding employee", response.data)
            }
        } catch (err) {
            console.error('Error sending request', err)
        }
        setEmployee({
            name: "",
            age: "",
            role: ""
        })
    }


    return (
        <div>
            <h1>Create an Employee</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={employee.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="title">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={employee.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="title">Role:</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={employee.role}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default AddEmployee