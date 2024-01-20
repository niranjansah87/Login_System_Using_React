import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/login.css';
import axios from 'axios';

export default function Login({ setLoginUser }) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const login = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', user);
      alert(response.data.message);
      setLoginUser(response.data.authToken); // Assuming authToken is the token you want to set
      history('/index');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error as needed
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  const toggleLoginForm = () => {
    var body = document.body;
    body.classList.toggle('opened');
  };

  const playVideo = () => {
    var video = document.getElementById('myVideo');
    if (video) {
      video.muted = false;
      video.play().catch((error) => {
        console.error('Autoplay was prevented:', error);
      });
    }
  };

  useEffect(() => {
    var video = document.getElementById('myVideo');
    if (video) {
      video.play().catch((error) => {
        console.error('Autoplay was prevented:', error);
      });
    }

    var audio = document.getElementById('myAudio');
    if (audio) {
      audio.play().catch((error) => {
        console.error('Autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <>
      <video autoPlay id="myVideo" loop muted onClick={playVideo}>
        <source src="/video/login.mp4" type="video/mp4" />
      </video>

      <audio autoPlay loop id="myAudio">
        <source src="/sound/login.mp3" type="audio/mp3" />
      </audio>

      <header className="container">
        <ul>
          <li>
            <Link onClick={toggleLoginForm} className="login">
              Sign in
            </Link>
          </li>
        </ul>
      </header>

      <main className="login-form">
        <div onClick={toggleLoginForm} className="close-login-form">
          &times;
        </div>
        <form onSubmit={login}>
          <h1>Login</h1>
          <div className="input-group">
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <label>Email</label>
            <button type="button">
              <svg
                width="20px"
                height="20px"
                strokeWidth="1.1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#8c8c8c"
              >
                <path
                  d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
                  stroke="#8c8c8c"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                  stroke="#8c8c8c"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>

          <div className="input-group">
            <input
              type="password"
              value={user.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
            />
            <label>Password</label>
            <button type="button">
              <svg
                width="20px"
                height="20px"
                strokeWidth="1.1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#8c8c8c"
              >
                <path
                  d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20H6.6C6.26863 20 6 19.7314 6 19.4V12.6C6 12.2686 6.26863 12 6.6 12H8M16 12V8C16 6.66667 15.2 4 12 4C8.8 4 8 6.66667 8 8V12M16 12H8"
                  stroke="#8c8c8c"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>

          <div className="remember">
            <div className="checkbox-group">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>

            <Link to="/">Forgot password?</Link>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
          <p>
            Don't have an account?{' '}
            <Link className="sign-up" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
