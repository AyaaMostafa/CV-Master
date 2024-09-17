import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import '../style/style.scss';
import UserAPIs from '../api/user.api'; 
import { useNavigate } from 'react-router-dom';

const SignUpComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('applicant'); 
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userAPIs = new UserAPIs();
    const userData = {
      firstName,
      lastName,
      email,
      password,
      mobile,
      "role" :"applicant"
    }; 

    try {
      const response = await userAPIs.registerUserApi(userData);
      setSuccess('Registration successful. Please log in.');
      console.log('Registration successful:', response.data);
      navigate('/signin')
    } catch (err: any) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', err);
    }
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
          <h2>Sign Up and Start Applying For Jobs</h2>
          <form className="signup-form" onSubmit={handleSignUp}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name" className="form-label">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                  className="form-input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name" className="form-label">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last Name"
                  className="form-input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            
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
            <div className="password-input-container">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            
            <label htmlFor="mobile" className="form-label">Mobile</label>
            <input
              type="text"
              id="mobile"
              placeholder="Mobile"
              className="form-input"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            
            <label htmlFor="role" className="form-label">Role</label>
            <select
              id="role"
              className="form-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="applicant">Applicant</option>
              <option value="company">Company</option>
              <option value="admin">Admin</option>
            </select>
            
            <button className="signup-button" type="submit">Sign Up</button>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            {success && <p className="success-message">{success}</p>} {/* Display success message */}
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
