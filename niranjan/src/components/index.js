import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import AuthNavbar from "./AuthNavbar";
import UnAuthNavbar from "./UnAuthNavbar";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Make a request to your backend to check if the user is logged in
        const response = await fetch(
          "http://localhost:5000/api/auth/checklogin",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Check login status error:", error.message);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <div>
      {isLoggedIn ? <AuthNavbar /> : <UnAuthNavbar />}
      <h1>My name is Niranjan Sah</h1>
    </div>
  );
}
