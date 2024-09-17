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
import CompanyCv from './Components/CompanyCv';
import CompanyWorkDescription from './Components/CompanyWorkDescription';
import CompanyUploadCv from './Components/CompanyUploadCv';






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
        <Route path="/company-work-description" element={<CompanyWorkDescription/>} />
        <Route path="/companyuploadcv" element={<CompanyUploadCv />} />
        <Route path="/company-cv" element={<CompanyCv />} />
        
      </Routes>
    </Router>
  );
  
};


export default App;