import React from 'react';
import { Link } from 'react-router-dom';
import '../style/headerStyle.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">
          <img src="Meapal logo new 2-03@3x.png" alt="Company Icon" className="logo-icon" />
        </div>
        <nav className="nav-links">
        <a href="/Home" className="nav-link" style={{ color: '#080200', textDecoration: 'none' }}> Home</a>
<a href="/know-how" className="nav-link" style={{ color: '#080200', textDecoration: 'none' }} > Know how </a>
<a href="/meapal" className="nav-link" style={{ color: '#080200', textDecoration: 'none' }}> Meapal</a>
<a href="/customers" className="nav-link" style={{ color: '#080200', textDecoration: 'none' }}> Customers</a>
<a href="/jobs" className="nav-link" style={{ color: '#080200', textDecoration: 'none' }}>Jobs</a>
 
</nav>
        <div className="language-icons">
          <span className="language-icon">FN</span>
          <div className="divider"></div>
          <span className="language-icon">EN</span>
          <div className="divider"></div>
          <span className="language-icon">AR</span>
        </div>
        <button className="contact-button">Contact us</button>
      </div>
    </header>
  );
};

export default Header;
