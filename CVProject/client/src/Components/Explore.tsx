import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.scss';  

const Explore: React.FC = () => {

  const handleIconClick = (iconName: string) => {
    console.log(`${iconName} clicked`);
  };

  return (
    <div className="explore-page" style={{ backgroundColor: '#f0f0f0' }}>
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

      <div className="job-list">
        <div className="small-white-div">
          <span className="small-div-title">Recommended</span>
        </div>
        <div className="job-item-wrapper">
          <Link to="/work-description" className="job-item">
            <div className="job-content">
              <div className="job-header">
                <span className="job-title">Senior PHP Laravel Developer</span>
                <div className="job-options">
                  <span className="option">Full Time</span>
                  <span className="option">Remote</span>
                </div>
              </div>
              <div className="job-location">Google - Cairo, Egypt</div>
              <div className="job-details">
                Experienced (Non-Manager) · 5-8 Yrs of Exp · HTML · Information Technology (IT) · Design · CSS ·
              </div>
              <div className="job-time">
                Science · Development · Software Development · PHP · Software · JavaScript · 51 minutes ago
              </div>
            </div>
            <img src="google-logo-9834 1.png" alt="Job Icon" className="job-icon" />
          </Link>
          <img src="Group 8565.png" alt="Profile" className="profile-image" />
          <div className="languages-card">
            <div className="card-title"><strong>Languages</strong></div>
            <div className="card-content">
              <div className="language-item">
                <div className="language-title"><strong>Arabic</strong></div>
                <div className="stars">
                  <img src="Star.png" alt="Star" className="star-icon" />
                  <img src="Star.png" alt="Star" className="star-icon" />
                  <img src="Star.png" alt="Star" className="star-icon" />
                  <img src="Star.png" alt="Star" className="star-icon" />
                </div>
                <div className="language-level">Beginner</div>
              </div>
              <div className="language-item">
                <div className="language-title"><strong>English</strong></div>
                <div className="stars">
                  <img src="Star.png" alt="Star" className="star-icon" />
                  <img src="Star.png" alt="Star" className="star-icon" />
                  <img src="Star.png" alt="Star" className="star-icon" />
                  <img src="Star.png" alt="Star" className="star-icon" />
                </div>
                <div className="language-level">Fluent</div>
              </div>
            </div>
          </div>
        </div>
        {Array.from({ length: 6 }).map((_, index) => (
          <Link to="/work-description" key={index} className="job-item">
            <div className="job-content">
              <div className="job-header">
                <span className="job-title">Senior PHP Laravel Developer</span>
                <div className="job-options">
                  <span className="option">Full Time</span>
                  <span className="option">Remote</span>
                </div>
              </div>
              <div className="job-location">Google - Cairo, Egypt</div>
              <div className="job-details">
                Experienced (Non-Manager) · 5-8 Yrs of Exp · HTML · Information Technology (IT) · Design · CSS ·
              </div>
              <div className="job-time">
                Science · Development · Software Development · PHP · Software · JavaScript · 51 minutes ago
              </div>
            </div>
            <img src="google-logo-9834 1.png" alt="Job Icon" className="job-icon" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;
