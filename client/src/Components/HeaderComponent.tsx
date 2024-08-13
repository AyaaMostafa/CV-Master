import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../style/style.scss'; 

const HeaderComponent = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option: string) => {
    if (option === 'Employer') {
      navigate('/signin'); 
    } else if (option === 'Company') {
      navigate('/company-signin');
    } else {
      alert(`You selected: ${option}`);
    }
    setShowOptions(false); 
  };

  const handleIconClick = (iconName: string) => {
    alert(`Icon clicked: ${iconName}`);
  };

  return (
    <>
      <header className="header-container">
        <div className="image-title">
          <img src="Group 84.png" alt="Company Icon" className="header-image" />
        </div>
        <nav className="header-links">
          <a href="#" className="find-jobs-link">Find jobs</a>
          <a href="#" className="facial-recognition-link">Facial Recognition</a>
        </nav>
        <div className="icon-container">
          <img 
            src="Notification_12.png" 
            alt="Icon 1" 
            className="header-icon" 
            onClick={() => handleIconClick('Icon 1')} 
          />
          <div className="icon-separator"></div>
          <img 
            src="Vector.png" 
            alt="Icon 2" 
            className="header-icon" 
            onClick={() => handleIconClick('Icon 2')} 
          />
          <div className="icon-separator"></div>
          <img 
            src="User_2.png" 
            alt="Icon 3" 
            className="header-icon" 
            onClick={() => handleIconClick('Icon 3')} 
          />
        </div>
        <div className="text-button">
          <button className="header-button" onClick={handleButtonClick}>
            Register
          </button>
          {showOptions && (
            <div className="options-container">
              <button className="option-button" onClick={() => handleOptionClick('Employer')}>
                Employer?
              </button>
              <button className="option-button" onClick={() => handleOptionClick('Company')}>
                Company
              </button>
            </div>
          )}
        </div>
      </header>
      <div className="background-section">
        <img src="home pic1-01 1@2x.png" alt="background image" className="background-image" />
        <div className="text-overlay">
          <h1>Find The Best Job In The Middle East</h1>
          <p>Searching for vacancies & career opportunities? <strong>IT Jobs</strong> helps you in your job search in the Middle East</p>
        </div>
        <div className="form-overlay">
          <div className="form-inputs">
            <input type="text" placeholder="Enter Skills, Designations or Company Names" className="form-input" />
            <input type="text" placeholder="Enter City or Country" className="form-input" />
            <input type="text" placeholder="Enter In Years" className="form-input" />
          </div>
          <button className="search-button">Search Jobs</button>
        </div>
      </div>
      <div className="latest-jobs">
        <h2>Latest Jobs</h2>
      </div>
      <div className="cards-container">
        {Array(8).fill(null).map((_, index) => (
          <div key={index} className="job-card">
            <div className="card-content">
              <p className="job-title">PHP Laravel</p>
              <p className="job-location">Google-Cairo</p>
              <p className="job-time">29 minutes</p>
            </div>
          </div>
        ))}
      </div>
      <div className="top-companies">
        <div className="top-companies-content">
          <h2>Join Middle East Top Companies</h2>
          <p>Searching for vacancies & career opportunities in Middle East</p>
        </div>
        <div className="companies-cards-container">
          {Array(18).fill(null).map((_, index) => (
            <div key={index} className="company-card">
              <img 
                src={index % 2 === 0 ? "google-logo-9834 1.png" : "netflix-logo-png-2562 1.png"} 
                alt="Company Logo" 
                className="company-image" 
              />
            </div>
          ))}
        </div>
        <div className="facial-recognition-section">
          <div className="facial-recognition-image">
            <img src="download 1.png" alt="Facial Recognition" className="facial-recognition-img" />
          </div>
          <div className="facial-recognition-text">
            <h3>Facial Recognition</h3>
            <p>
              Video interviews offer a wealth of data. Data scientists use computer vision and audio analysis to evaluate candidates' non-verbal cues, speech patterns, and overall interview performance. This data-driven approach enhances the selection process.
            </p>
          </div>
          <button className="facial-recognition-button">Try Now</button>
        </div>
        <div className="opportunities-section">
          <h2>Get ready for more opportunities!</h2>
          <p>You are minutes away from the right job.</p>
          <button className="join-now-button">Join Now</button>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
