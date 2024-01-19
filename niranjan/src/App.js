
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home'; // Import the 'Home' component
import About from './components/About'; // Import the 'About' component
import Login from './components/Login'; // Import the 'Login' component
import Signup from './components/Signup'; // Import the 'Signup' component
import Navbar from './components/Navbar'; // Import the 'Navbar' component
function App() {
  return (
                                                                <>
                                                                  <BrowserRouter>
                                                                  <Navbar/>
                                                                    <Routes>
                                                                      <Route index element={<Home/>}/>
                                                                      <Route exact path="/about" element={<About/>}/>
                                                                      <Route exact path="/login" element={<Login/>}/>
                                                                      <Route exact path="/signup" element={<Signup/>}/>
                                                                    </Routes>
                                                                  </BrowserRouter>
                                                                </>
   
  


   
  );
}

export default App;
