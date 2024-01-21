// frontend/src/components/Index.js
import React, { useState, useEffect } from "react";
import AuthNavbar from "./AuthNavbar";
import UnAuthNavbar from "./UnAuthNavbar";

export default function Index() {
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
        console.log('Full response:', response);
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
  );
}

