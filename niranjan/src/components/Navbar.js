import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/Navbar.css'
export default function Navbar() {
  return (
    <nav class="flex align-center">
  <p>Niranjan</p>
  <ul>
    <li class="big-screens">
      <Link to="/home">Home</Link>
      {/* <a href="#">Store</a> */}
      <Link to="/about">About Us</Link>
      <Link to="/signup" class="btn register">Register</Link>
      <Link to="/login" class="btn login">Log In</Link>
    </li>
    <li class="small-screens">
      <i class="fa-solid fa-bars"></i>
    </li>
  </ul>
</nav>   
  )
}
