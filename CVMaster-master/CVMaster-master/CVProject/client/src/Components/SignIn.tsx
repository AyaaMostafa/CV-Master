import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/style.scss';
import UserAPIs from '../api/user.api'; 

const SignInComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const userAPIs = new UserAPIs();

    try {
     
      const response = await userAPIs.loginUserApi({ email, password });
      console.log(response);

     
      const token = response.data.token
      console.log(token);
      ; 
      if (token) {
        localStorage.setItem('authToken', token);
        console.log('Sign-in successful. Token stored in localStorage.');
        navigate('/upload-cv');
      } else {
        setError('Sign-in failed. Token not received.');
      }
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
        <h3>Sign In and Start Applying For Jobs</h3>
        <form className="signin-form">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
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
          Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
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

export default SignInComponent;
