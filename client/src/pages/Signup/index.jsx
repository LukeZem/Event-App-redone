import axios from "axios";
import { useState, useContext } from "react";
import { authContext } from "../../context/AuthProvider";


const Signup = () => {
    const { formData, setFormData } = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const { message, setMessage } = useState('');
    const { user, setUser } = useContext(authContext);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefualt();
        if (formData.password !== formData.password2) {
            setMessage('Passwords must match!');
            return;
        }
        try {
            const response = axios.post({
                url: '/servers/signup',
                method: 'POST',
                data: formData
            });
            setMessage(response.data.message || 'You have successfully signed up!');
        } catch (err) {
            console.log(err.response?.data?.message || "Something failed in form submission:");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <label>Confirm Password</label>
                <input type="password" name="password2" value={formData.password2} onChange={handleChange} />
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            {message && <p>{message}</p>} {/* if message exists, display it */}
        </div>
    );
};

export default Signup;