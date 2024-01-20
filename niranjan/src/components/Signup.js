import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import '../assets/signup.css';

export default function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const register = () => {
        const { name, email, password } = user;
        if (name && email && password) {
            axios.post("http://localhost:5000/api/auth/signup", user)
                .then(res => console.log(res))
                .catch(error => console.error(error));
        } else {
            alert("Invalid input");
        }
    };

    return (
        <>
            <div className="signup">
                <form action="#" method="POST">
                    <div className="box">
                        <div className="form">
                            <h2>Signup page</h2>
                            <div className="inputBox">
                                <input type="text" value={user.name} onChange={handleChange} name="name" required="required" />
                                <span>Full Name</span>
                                <i></i>
                            </div>
                            <div className="inputBox">
                                <input type="email" value={user.email} onChange={handleChange} name="email" required="required" />
                                <span>Email</span>
                                <i></i>
                            </div>
                            <div className="inputBox">
                                <input type="number" value={user.contact} onChange={handleChange} name="contact" required="required" />
                                <span>Contact Number</span>
                                <i></i>
                            </div>
                            <div className="inputBox">
                                <input type="password" value={user.password} onChange={handleChange} name="password" required="required" />
                                <span>Password</span>
                                <i></i>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="password2" required="required" />
                                <span>Confirm Password</span>
                                <i></i>
                            </div>
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
