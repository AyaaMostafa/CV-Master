import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.scss';

const Cv: React.FC = () => {
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
              <div className="profile-name">Kimberley Tyler-Smith</div>
              <div className="profile-job-title">PHP Programmer/Web Developer</div>
              <div className="profile-location">Liverpool, United Kingdom</div>
            </div>
          </div>
          <img src="Group 8565.png" alt="Profile" className="profile-image" />
        </div>
        <div className='all-section'>
        <div className="info-section">
          <div className="info-group">
            <div className="info-title">General Info</div>
            <div className="info-item">
              <span className="info-label">Age:</span> <span className="info-value">29</span>
            </div>
            <div className="info-item">
              <span className="info-label">Experience:</span> <span className="info-value">Programmer</span>
            </div>
            <div className="info-item">
              <span className="info-label">Minimum Salary:</span> <span className="info-value">8,000 USD / month</span>
            </div>
            <div className="info-item">
              <span className="info-label">Job Search Status:</span> <span className="info-value">Actively searching</span>
            </div>
            <div className="info-item">
              <span className="info-label">Gender:</span> <span className="info-value">Female</span>
            </div>
            <div className="info-item">
              <span className="info-label">Highest education:</span> <span className="info-value">Bachelor</span>
            </div>
          </div>

          <div className="info-group">
            <div className="info-title">Contact Info</div>
            <div className="contact-info">
              <div className="contact-item">
                <img src="Vector.png" alt="Phone" className="contact-icon" />
                <span className="contact-text">+44 123456789</span>
              </div>
              <div className="contact-item">
                <img src="Envelope.png" alt="Email" className="contact-icon" />
                <span className="contact-text">first.last@gmail.com</span>
              </div>
              <div className="contact-item">
                <img src="Download.png" alt="Download" className="contact-icon" />
                <span className="contact-text">Download CV</span>
              </div>
            </div>

            <div className="info-group">
              <div className="info-title">General Info</div>
              <div className="info-item">
                <span className="info-label">Job Titles and Keywords:</span> <span className="info-value">Backend Developer</span>
              </div>
              <div className="info-item">
                <span className="info-label">Job Categories:</span> <span className="info-value">IT/Software Development · Engineering</span>
              </div>
              <div className="info-item">
                <span className="info-label">Job Types:</span> <span className="info-value">Full Time · Part Time · Freelance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="languages-card">
            <div className="card-title"> <strong>Languages</strong></div>
            <div className="card-content">
              <div className="language-item">
                <div className="language-title">
                  <strong>Arabic</strong>
                </div>
                <div className="stars">
                  <img src="Star.png" alt="Star" className="star-icon" />
                  <img src="Star.png" alt="Star" className="star-icon" />
                  <img src="Star.png" alt="Star" className="star-icon" />
                  <img src="Star.png" alt="Star" className="star-icon" />
                </div>
                <div className="language-level">Beginner</div>
              </div>

              <div className="language-item">
                <div className="language-title">
                  <strong>English</strong>
                </div>
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
        <div className="experience-section">
          <div className="experience-header">
            <span className="experience-title">Experience</span>
            <img src="Add.png" alt="Add" className="small-icon" />
            <img src="Pencil.png" alt="Edit" className="experience-icon" />
          </div>
          <div className="experience-item">
            <img src="Rectangle 55.png" alt="PHP Developer" className="experience-image" />
            <div className="experience-details">
              <div className="experience-role">PHP Developer</div>
              <div className="experience-company">Polyhire - Full time</div>
              <div className="experience-duration">Jan 2022 - Present . 2 years</div>
              <div className="experience-location">London, United Kingdom</div>
            </div>
          </div>
          <div className="experience-divider"></div>
          <div className="experience-item">
            <img src="Rectangle 55.png" alt="PHP Developer" className="experience-image" />
            <div className="experience-details">
              <div className="experience-role">PHP Developer</div>
              <div className="experience-company">Polyhire - Full time</div>
              <div className="experience-duration">Jan 2022 - Present . 2 years</div>
              <div className="experience-location">London, United Kingdom</div>
            </div>
          </div>
        </div>
        

        <div className="experience-section">
          <div className="experience-header">
            <span className="experience-title">Education</span>
            <img src="Add.png" alt="Add" className="small-icon" />
            <img src="Pencil.png" alt="Edit" className="experience-icon" />
          </div>
          <div className="experience-item">
            <img src="Rectangle 55.png" alt="Degree" className="experience-image" />
            <div className="experience-details">
              <div className="experience-role">University of New York</div>
              <div className="experience-company">Bachelor of Science Computer Science</div>
              <div className="experience-duration">Sep 2011 - Aug 2015</div>
              <div className="experience-location">Grade: Good</div>
            </div>
          </div>
          
        </div>
             <div className="experience-section">
          <div className="experience-header">
            <span className="experience-title">licenses & certifications</span>
            <img src="Add.png" alt="Add" className="small-icon" />
            <img src="Pencil.png" alt="Edit" className="experience-icon" />
          </div>
          <div className="experience-item">
            <img src="Rectangle 55.png" alt="PHP Developer" className="experience-image" />
            <div className="experience-details">
              <div className="experience-role">PHP Developer</div>
              <div className="experience-company">Polyhire - Full time</div>
              <div className="experience-duration">Jan 2022 - Present . 2 years</div>
              <div className="experience-location">London, United Kingdom</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Cv;
