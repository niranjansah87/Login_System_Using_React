import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/login.css';

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(''); // Clear error when user starts typing
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', user);
      // alert(response.data.message);
      setLoginUser(response.data.authToken);
      history('/index');
    } catch (error) {
      console.error('Login error:', error);

      if (error.response) {
        setError(error.response.data.message || 'An error occurred');
      } else {
        setError('Network error. Please try again.');
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
        <form onSubmit={handleSubmit}>
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

          {error && <div className="error-message">{error}</div>}
        </form>

        <p>
          Don't have an account?{' '}
          <Link className="sign-up" to="/signup">
            Sign up
          </Link>
        </p>
      </main>
    </>
  );
};

export default Login;
