import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/style.scss';
import UserAPIs from '../api/user.api'

const CompanySignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const userAPIs = new UserAPIs();

    try {
  
      const companyData = { email, password };
      const response = await userAPIs.loginCompanyApi(companyData);
      console.log(response);
      console.log('Sign-in successful:', response.data);
      navigate('/companyuploadcv'); 
    } catch (err: any) {
      setError('Sign-in failed. Please check your credentials.');
      console.error('Sign-in error:', err);
    }
  };

  return (
    <div className="signin-container">
      <img src="Group 220.png" alt="Background" className="background-image" />
      <img src="Group 86.png" alt="Icon" className="comp-icon" />

      <div className="signin-form-container">
        <h3>Sign In to a Company Account to Start Hiring Now</h3>
        <form className="signin-form">
          <label htmlFor="email" className="form-label">Business email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button className="signin-button" onClick={handleSignIn}>Sign In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="signup-prompt">
          Don't have an account? <Link to="/companysignup" className="signup-link">Sign Up</Link>
        </p>

        <div className="signin-opportunities-section">
          <span className="opportunities-text">Looking to post jobs?</span>
          <a href="#" className="create-account-link">Create an Employee account</a>
        </div>
      </div>

      <button className="company-button">Company?</button>
    </div>
  );
};

export default CompanySignIn;
