import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/Navbar.css';

export default function AuthNavbar() {
  const history = useNavigate();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Make a request to the backend logout endpoint using Axios
      const response = await axios.get('/api/auth/logout', { withCredentials: true });

      if (response.status === 200) {
        // Clear any necessary state on the frontend
        // Redirect to the login page
        history('/login');
      } else {
        // Handle logout failure (e.g., display an error message)
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <nav className="flex align-center">
      <p>Niranjan</p>
      <ul>
        <li className="big-screens">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/signup" className="btn register">
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
}
