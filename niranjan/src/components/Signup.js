import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/signup.css';

export default function Signup() {
    const history = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '' // Added confirmPassword field
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError(''); // Clear error when user starts typing
        setUser({
            ...user,
            [name]: value
        });
    };

    const register = async () => {
        const { name, email, password, confirmPassword } = user;

        if (name && email && password && confirmPassword) {
            if (password !== confirmPassword) {
                setError('Password and Confirm Password do not match.');
                return;
            }

            try {
                const response = await axios.post('http://localhost:5000/api/auth/signup', user);

                if (response && response.data) {
                    console.log(response.data);
                    // Redirect to the login page after successful signup
                    history('/login');
                } else {
                    console.error('Invalid response format after signup.');
                    setError('An error occurred during signup.');
                }
            } catch (error) {
                console.error(error.response?.data || error.message);
                setError(error.response?.data?.error || 'An error occurred during signup.');
            }
        } else {
            setError('Invalid input. Please fill in all fields.');
        }
    };

    return (
        <>
            <div className="signup">
                <form>
                    <div className="box">
                        <div className="form">
                            <h2>Signup page</h2>
                            <div className="inputBox">
                                <input type="text" value={user.name} onChange={handleChange} name="name" required />
                                <span>Full Name</span>
                                <i></i>
                            </div>
                            <div className="inputBox">
                                <input type="email" value={user.email} onChange={handleChange} name="email" required />
                                <span>Email</span>
                                <i></i>
                            </div>
                            <div className="inputBox">
                                <input type="number" value={user.contact} onChange={handleChange} name="contact" required />
                                <span>Contact Number</span>
                                <i></i>
                            </div>
                            <div className="inputBox">
                                <input type="password" value={user.password} onChange={handleChange} name="password" required />
                                <span>Password</span>
                                <i></i>
                            </div>
                            <div className="inputBox">
                                <input type="password" value={user.confirmPassword} onChange={handleChange} name="confirmPassword" required />
                                <span>Confirm Password</span>
                                <i></i>
                            </div>
                            {error && <div className="error-message">{error}</div>}
                            <div className="links">
                                <Link to="/login">Login</Link>
                            </div>
                            <input type="button" value="Sign up" onClick={register} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
