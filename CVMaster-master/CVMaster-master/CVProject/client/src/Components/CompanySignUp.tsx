import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import '../style/style.scss';
import UserAPIs from '../api/user.api'; 

const CompanySignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

   
    const userAPIs = new UserAPIs();

  
    const companyData = {
      name,
      firstName,
      lastName,
      mobile,
      email,
      password,
      role: 'company',
      address: '123 Startup'
    };

    try {
    
      const response = await userAPIs.registerCompanyApi(companyData);
      console.log('Registration successful:', response.data);
      navigate('/company-signin');
    } catch (err: any) {
      setError('Registration failed. Please check your details.');
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="comp-signup-container">
      <img src="Group 220 (1).png" alt="Background" className="background-image" />
      <img src="Group 86.png" alt="Icon" className="comp-icon" />

      <div className="main-content">
        <button className="company-button">Search for jobs?</button>
        <div className="comp-signup-content">
          <div className="left-images">
            <img src="Group 250.png" alt="Left Image" className="left-image" />
            <img src="Group 251.png" alt="Below Left Image" className="below-left-image" />
          </div>
          <div className="comp-signup-form-container">
            <h2>Create a Company Account to Start Hiring Now</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="company-name" className="form-label">Company Name</label>
                <input
                  type="text"
                  id="company-name"
                  placeholder="Company Name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

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

              <div className="form-group">
                <label htmlFor="mobile-number" className="form-label">Mobile Number</label>
                <input
                  type="text"
                  id="mobile-number"
                  placeholder="Mobile Number"
                  className="form-input"
                  value={mobile}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>

              <label htmlFor="email" className="form-label">Business email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <label htmlFor="password" className="form-label">Create your password</label>
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

              <div className="form-group">
                <label htmlFor="role" className="form-label">Which role are you hiring for?</label>
                <input
                  type="text"
                  id="role"
                  placeholder="Role"
                  className="form-input"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="signup-button">Create Company Account</button>
              {error && <p className="error-message">{error}</p>}
            </form>
            <p className="signin-prompt">
              Already In ITjob? <Link to="/signin" className="signin-link">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySignUp;
