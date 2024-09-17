import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/style.scss';

const CompanyCv: React.FC = () => {
  const [publicProfile, setPublicProfile] = useState(true);
  const [publicVisibility, setPublicVisibility] = useState(true);
  const [immediateStart, setImmediateStart] = useState(false);

  const handleIconClick = (iconName: string) => {
    console.log(`${iconName} clicked`);
  };

  return (
    <div className="cv-container">
      <header className="upload-cv-header">
        <div className="header-left">
          <img src="Group 84.png" alt="Company Icon" className="comp-icon" />
        </div>
        <nav className="explore-link-container">
          <Link to="/explore" className="explore-link">EXPLORE</Link>
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
            src="Group 253.png" 
            alt="Icon 3" 
            className="header-icon" 
            onClick={() => handleIconClick('Icon 3')} 
          />
        </div>
      </header>
      
      <div className="cv-content-container">
        <div className="cv-content">
          <div className="profile-section">
            <img src="Group 329.png" alt="Profile" className="profile-image" />
            <div className="profile-text">
              <div className="profile-name">Taaly</div>
              <div className="profile-job-title">Information technology services</div>
              <div className="profile-location">Liverpool, United Kingdom . 220 employees</div>
              <div className="social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src="Social (1).png" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://www.google.com.eg/" target="_blank" rel="noopener noreferrer">
                  <img src="Vector (1).png" alt="GitHub" className="social-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-content">
              <div className="switch-item">
                <label>
                  <span>Public profile</span>
                  <input 
                    type="checkbox" 
                    checked={publicProfile} 
                    onChange={() => setPublicProfile(!publicProfile)} 
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="divider"></div>
              <div className="switch-item">
                <label>
                  <span>Public Visibility</span>
                  <input 
                    type="checkbox" 
                    checked={publicVisibility} 
                    onChange={() => setPublicVisibility(!publicVisibility)} 
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="divider"></div>
              <div className="switch-item">
                <label>
                  <span>Available for immediate start</span>
                  <input 
                    type="checkbox" 
                    checked={immediateStart} 
                    onChange={() => setImmediateStart(!immediateStart)} 
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="company-all-section">
          <div className="company-info-section">
            <div className="info-group">
              <div className="info-title">Company Profile:</div>
              <div className="info-row">
                <span className="info-text">+44 123456789</span>
                <span className="info-text">Company Size: 220 employees</span>
              </div>
              <div className="info-row">
                <a href="mailto:HR@gmail.com" className="info-text">HR@gmail.com</a>
                <span className="info-text">Industry: Information technology services</span>
              </div>
              <span className="info-text1">Location : Liverpool, United Kingdom</span>
              <p className="info-paragraph">
                Taaly is a 1-on-1 gamified AI integration platform that connects new migrants with natives. You practice the new language using video chat with a native speaker moderated by AI to eventually be able to communicate with everyone and find your place in society.
              </p>
            </div>
          </div>
        </div>

        <Link to="/company-work-description" className="experience-section-link">
          <div className="experience-section">
            <div className="experience-header">
              <div className="comp-job-title">Open vacancies at Taaly</div>
              <img src="Add.png" alt="Add" className="small-icon" />
              <img src="Pencil.png" alt="Edit" className="experience-icon" />
            </div>
            <div className="experience-item">
              <div className="experience-details">
                <div className="comp-job-role">Senior PHP Laravel Developer</div>
                <div className="experience-company">Google - Cairo, Egypt</div>
                <div className="experience-duration">
                  Experienced (Non-Manager) · 5-8 Yrs of Exp · HTML · Information Technology (IT) · Design · CSS · 
                </div>
                <div className="experience-location">
                  Science · Development · Software Development · PHP · Software · JavaScript · 51 minutes ago
                </div>
              </div>
            </div>
            <div className="experience-divider"></div>
            <div className="experience-item">
              <div className="experience-details">
                <div className="comp-job-role">Senior PHP Laravel Developer</div>
                <div className="experience-company">PGoogle - Cairo, Egypt</div>
                <div className="experience-duration">
                  Experienced (Non-Manager) · 5-8 Yrs of Exp · HTML · Information Technology (IT) · Design · CSS · 
                </div>
                <div className="experience-location">
                  Science · Development · Software Development · PHP · Software · JavaScript · 51 minutes ago
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CompanyCv;
