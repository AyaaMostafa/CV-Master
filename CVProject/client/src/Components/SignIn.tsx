import React from 'react';
import '../style/style.scss';  

const SignInComponent = () => {
  return (
    <div className="signin-container">
      <img src="home pic1-01 1.png" alt="Background" className="background-image" />
      
      <div className="signin-form-container">
        <h2>Sign In and Start Applying For Jobs</h2>
        <form className="signin-form">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" placeholder="Email" className="form-input" required />
          
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" placeholder="Password" className="form-input" required />
          
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button className="signin-button">Sign In</button>
        </form>
        <p className="signup-prompt">
          Don't have an account? <a href="#" className="signup-link">Sign Up</a>
        </p>
        
        <div className="opportunities-section">
          <span className="opportunities-text">Looking to post jobs?</span>
          <a href="#" className="create-account-link">Create an Employee account</a>
        </div>
      </div>
      
      <button className="company-button">Company?</button>
    </div>
  );
};

export default SignInComponent;
