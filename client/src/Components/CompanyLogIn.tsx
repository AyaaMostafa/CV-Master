import React from 'react';
import { Link } from 'react-router-dom'; 
import '../style/style.scss';  

const CompanySignIn = () => {
  return (
    <div className="signup-container">
      <img
        src="Group 220 (1).png" 
        alt="Background"
        className="background-image"
      />
      <img
        src="Group 86.png" 
        alt="Left Image"
        className="comp-icon"
      />
      <div className="comp-sigin-content">
        <div className="left-images">
          <img src="Group 250.png" alt="Left Image" className="left-image" />
          <img src="Group 251.png" alt="Below Left Image" className="below-left-image" />
        </div>
        <div className="comp-signin-form-container">
          <h3>Sign In to a Company Account to Start Hiring Now</h3>
          <form className="signin-form">
            <div className="form-group">
              <label className="form-label" htmlFor="email">Business email</label>
              <input type="email" id="email" className="form-input" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input type="password" id="password" className="form-input" placeholder="Enter your password" required />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="signin-button">Sign In</button>
          </form>
          <div className="signup-prompt">
            <p>Don't have an account? <Link to="/companysignup" className="signup-link">Sign up</Link></p>
          </div>
        </div>
      </div>
      <button className="company-button">Search for jobs?</button>
    </div>
  );
};

export default CompanySignIn;
