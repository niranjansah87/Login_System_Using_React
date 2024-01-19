import React from 'react'
import '../assets/signup.css'
import { Link } from 'react-router-dom';
export default function Signup() {
    
  return (
    <>
    <div className="signup">
    <form action="#" method="POST">
                 
    <div class="box">
        <div class="form">
            <h2>Signup page</h2>
            <div class="inputBox">
                <input type="text" name="first_name" required="required" />
                <span>Full Name</span>
                <i></i>
            </div>
            <div class="inputBox">
                <input type="email" name="email" required="required" />
                <span>Email</span>
                <i></i>
            </div>
            <div class="inputBox">
                <input type="number" name="last_name" required="required" />
                <span>Contact Number</span>
                <i></i>
            </div>
            <div class="inputBox">
                <input type="password" name="password1" required="required" />
                <span>Password</span>
                <i></i>
            </div>
            <div class="inputBox">
                <input type="password" name="password2" required="required" />
                <span>Confirm Password</span>
                <i></i>
            </div>
                  <div class="links">
                    <Link to="/login">Login</Link>
                  </div>
              <input type="submit" value="Sign up" />
              </div>
              </div>
              </form>
            

        
              </div>
    </>
  )
}
