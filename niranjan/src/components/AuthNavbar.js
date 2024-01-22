import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/Navbar.css';

const AuthNavbar = () => {
  const history = useNavigate();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/logout', null, {
  withCredentials: true,
});

      // console.log('Logout response:', response);

      if (response.status === 200) {
        // Clear any necessary state on the frontend
        // Redirect to the login page
        history('/login');
      } else {
        // Handle logout failure (e.g., display an error message)
        console.error('Logout failed:', response.statusText);
        // Display an error message to the user
        alert('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Logout error:', error.message);
      // Display an error message to the user
      alert('Logout error. Please try again.');
    }
  };

  return (
    <nav className="flex align-center">
      <p>Niranjan</p>
      <ul>
        <li className="big-screens">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/profile" className="btn register">
            Profile
          </Link>
          <button onClick={handleLogout} className="btn login">
            Log Out
          </button>
        </li>
        <li className="small-screens">
          <i className="fa-solid fa-bars"></i>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNavbar;
