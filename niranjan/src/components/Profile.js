import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    contact: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/getuser', {
          method: 'POST',
          credentials: 'include', // Include credentials if using cookies for authentication
        });

        if (response.ok) {
          const user = await response.json();
          setUserData(user);
        } else {
          console.error('Failed to fetch user data:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch user data error:', error.message);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="update-profile">
      <h1>Profile</h1>

      <form action="#" encType="multipart/form-data">
        <div className="flex">
          <div className="inputBox">
            <span>Full name :</span>
            <input type="text" name="update_name" value={userData.name} className="box" disabled />
            <span>Email :</span>
            <input type="email" name="update_email" value={userData.email} className="box" disabled />
          </div>

          <div className="inputBox">
            <span>Contact Number</span>
            <input value={userData.contact} className="box" disabled />
          </div>
        </div>

        <Link to="/index" className="delete-btn">
          Go back
        </Link>
      </form>
    </div>
  );
}
