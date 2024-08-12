import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import '../style/style.scss';  

const SignUpComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="signup-container">
      <img src="Group 220.png" alt="Background" className="background-image" />
      <img src="Group 86.png" alt="Icon" className="comp-icon" />
      
      <div className="signup-content">
        <div className="left-images">
          <img src="Group 250.png" alt="Left Image" className="left-image" />
          <img src="Group 251.png" alt="Below Left Image" className="below-left-image" />
        </div>
        <div className="signup-form-container">
          <h2>Sign In and Start Applying For Jobs</h2>
          <form className="signup-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name" className="form-label">First Name</label>
                <input type="text" id="first-name" placeholder="First Name" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name" className="form-label">Last Name</label>
                <input type="text" id="last-name" placeholder="Last Name" className="form-input" required />
              </div>
            </div>
            
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" placeholder="Email" className="form-input" required />
            
            <label htmlFor="password" className="form-label">Password</label>
            <div className="password-input-container">
              <input 
                type={passwordVisible ? 'text' : 'password'} 
                id="password" 
                placeholder="Password" 
                className="form-input" 
                required 
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            
            <button className="signup-button">Sign Up</button>
          </form>
          <p className="signin-prompt">
            Already have an account? <Link to="/signin" className="signin-link">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
