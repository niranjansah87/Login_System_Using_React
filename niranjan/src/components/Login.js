

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/login.css'
export default function Login() {
  const login = () => {
    var body = document.body;
    body.classList.toggle("opened");
  }

  const playVideo = () => {
    var video = document.getElementById("myVideo");
    video.muted = false;
    video.play().catch(error => {
      console.error("Autoplay was prevented:", error);
    });
  }

  useEffect(() => {
    var video = document.getElementById("myVideo");
    video.click();

    var audio = document.getElementById("myAudio");
    audio.play().catch(error => {
      console.error("Autoplay was prevented:", error);
    });
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
          <li><Link onClick={login} className="login">Sign in</Link></li>
        </ul>
      </header>

      <main className="login-form">
        <div onclick="{login()}" class="close-login-form">&times;</div>
        <form action="">
          <h1>Login</h1>
          <div class="input-group">
            <input type="text" placeholder="Username" />
            <label>Username</label>
            <button><svg width="20px" height="20px" stroke-width="1.1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#8c8c8c"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="#8c8c8c" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#8c8c8c" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
          </div>

          <div class="input-group">
            <input type="password" placeholder="Password" />
            <label>Password</label>
            <button><svg width="20px" height="20px" stroke-width="1.1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#8c8c8c"><path d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20H6.6C6.26863 20 6 19.7314 6 19.4V12.6C6 12.2686 6.26863 12 6.6 12H8M16 12V8C16 6.66667 15.2 4 12 4C8.8 4 8 6.66667 8 8V12M16 12H8" stroke="#8c8c8c" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
          </div>

          <div class="remember">
            <div class="checkbox-group">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>

            <Link to="/">Forgot password?</Link>
          </div>

          <button class="login-button">Login</button>
          <p>Don't have an account? <Link class="sign-up" to="/signup">Sign up</Link></p>
        </form>
      </main>
    </>
  );
}
