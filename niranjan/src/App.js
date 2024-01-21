import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Index from './components/index';
import Profile from './components/Profile';

function App() {
  // Add state for login user
  // eslint-disable-next-line
  const [loginUser, setLoginUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/index' element={<Index />} />
          <Route exact path="/about" element={<About />} />
          {/* Pass setLoginUser as a prop to Login component */}
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
