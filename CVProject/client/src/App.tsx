import React from 'react';
import HeaderComponent from './Components/HeaderComponent';
import SignInComponent from './Components/SignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import logo from './Images/Group84.png'; 

// @ts-ignore
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HeaderComponent />} />
      <Route path="/signin" element={<SignInComponent />} />
    </Routes>
  </Router>
  );
}

export default App;