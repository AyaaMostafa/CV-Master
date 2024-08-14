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
import UploadCv from './Components/UploadCv';
import Cv from './Components/Cv';
import Explore from './Components/Explore';
import WorkDescription from './Components/WorkDescription';






function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HeaderComponent />} />
        <Route path="/signin" element={<SignInComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/company-signin" element={<CompanySignIn/>} />
        <Route path="/companysignup" element={<CompanySignUp />} />
        <Route path="/upload-cv" element={<UploadCv />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/work-description" element={<WorkDescription />} />
       
      </Routes>
    </Router>
  );
  
};


export default App;