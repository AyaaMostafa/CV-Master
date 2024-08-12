import React from 'react';
import HeaderComponent from './Components/HeaderComponent';
import SignInComponent from './Components/SignIn';
import SignUpComponent from './Components/SignUp';
import CompanySignIn from './Components/CompanyLogIn';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import CompanySignUp from './Components/CompanySignUp';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderComponent />} />
        <Route path="/signin" element={<SignInComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/company-signin" element={<CompanySignIn/>} />
        <Route path="/companysignup" element={<CompanySignUp />} />
      </Routes>
    </Router>
  );
};


export default App;