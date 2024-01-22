// Index.js
import React, { useState, useEffect } from "react";
import AuthNavbar from "./AuthNavbar";
import UnAuthNavbar from "./UnAuthNavbar";

export default function Index({ setIsLoggedIn }) {
  const [isLoggedInLocal, setIsLoggedInLocal] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await fetch('http://localhost:5000/api/auth/checklogin', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'auth-token': authToken,
          },
        });

        if (response.ok) {
          setIsLoggedInLocal(true);
          setIsLoggedIn(true);
        } else {
          setIsLoggedInLocal(false);
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Check login status error:', error.message);
        setIsLoggedInLocal(false);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, [setIsLoggedIn]);

  return (
    <div>
      {isLoggedInLocal !== null ? (
        isLoggedInLocal ? (
          <>
            <AuthNavbar />
            <h1>My name is Niranjan Sah</h1>
          </>
        ) : (
          <UnAuthNavbar />
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}