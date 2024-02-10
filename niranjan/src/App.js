import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Index from './components/index';
import Profile from './components/Profile';
import forgotPassword from './components/forgotPassword';
function App() {
  // Add state for login user
  // eslint-disable-next-line no-unused-vars
  // const [loginUser, setLoginUser] = useState(null);
  const [, setLoginUser] = useState(null);
  const [,setIsLoggedIn] = useState(false);
  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/index" element={<Index setLoginUser={setLoginUser} setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/forget" element={<forgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
