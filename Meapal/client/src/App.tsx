import React from 'react';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// @ts-ignore
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Home" element={<HomePage />} />
    
      
    </Routes>
  </Router>
);
}

export default App;
