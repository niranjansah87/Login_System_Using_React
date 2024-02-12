// import React from 'react'
// import Navbar from './Navbar'
import '../assets/home.css'
import AuthNavbar from './AuthNavbar'; // Import the 'AuthNavbar' component
import UnAuthNavbar from './UnAuthNavbar'; // Import the 'UnAuthNavbar' component
import React, { useState,useEffect } from 'react'; // Import the 'useState' hook from the 'react' package

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        console.log('Stored Auth Token:', authToken);

        const response = await fetch('http://localhost:5000/api/auth/checklogin', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'auth-token': authToken, // Corrected header name
          },
        });
        // console.log('Full response:', response);
        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Check login status error:', error.message);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);
  return (
    <>
      <div>
        {isLoggedIn ? (
          <>
            <AuthNavbar />
            <h1>My name is Niranjan Sah</h1>
          </>
        ) : (
          <UnAuthNavbar />
        )}
      </div>
    </>
  )
}
