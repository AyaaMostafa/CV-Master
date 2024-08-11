import React from 'react';
import HeaderComponent from './Components/HeaderComponent';
import SignInComponent from './Components/SignIn';
import SignUpComponent from './Components/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderComponent />} />
        <Route path="/signin" element={<SignInComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
      </Routes>
    </Router>
  );
};


export default App;