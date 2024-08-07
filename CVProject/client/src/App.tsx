import React from 'react';
import HeaderComponent from './Components/HeaderComponent';
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
    <div className="App">
      <HeaderComponent />
      
    </div>
  );
}

export default App;