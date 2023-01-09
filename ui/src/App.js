import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/Signup';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return(
   
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App;
