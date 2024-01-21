import React from 'react';
import { Link } from 'react-router-dom';

export default function UnAuthNavbar() {
  return (
    <nav className="flex align-center">
      <p>Niranjan</p>
      <ul>
        <li className="big-screens">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/signup" className="btn register">
            Sign Up
          </Link>
          <Link to="/login" className="btn login">
            Log In
          </Link>
        </li>
        <li className="small-screens">
          <i className="fa-solid fa-bars"></i>
        </li>
      </ul>
    </nav>
  );
}
