import React from 'react';
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
          <a href="#" className="explore-link">EXPLORE</a>
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
      </div>

      <div className="cv-info-container">
        <div className="image-container">
          <div className="large-image">
            <img src="Group 281.png" alt="Large" />
          </div>
          <div className="small-images">
            <img src="Group 282.png" alt="Small 1" className="small-image" />
            <img src="Group 283.png" alt="Small 2" className="small-image" />
          </div>
        </div>
        
      
        <div className="languages-section">
          <h3 className="languages-title">Languages</h3>
          <div className="experience-icons">
            <img src="Add.png" alt="Add Icon" className="small-icon" />
            <img src="Pencil.png" alt="Edit Icon" className="small-icon" />
          </div>
          <div className="languages-images">
            <img src="Group 8567.png" alt="Language 1" className="language-image" />
           
          </div>
          <div className="languages-images">
            <img src="Group 8566.png" alt="Language 3" className="language-image" />
            
          </div>
        </div>
      </div>

      <div className="experience-section">
        <div className="experience-header">
          <h3 className="experience-title">Experience</h3>
          <div className="experience-icons">
            <img src="Add.png" alt="Add Icon" className="small-icon" />
            <img src="Pencil.png" alt="Edit Icon" className="small-icon" />
          </div>
        </div>

        <div className="experience-content">
          <img src="Group 333.png" alt="Experience 1" className="experience-image" />
          <hr className="divider" />
          <img src="Group 333.png" alt="Experience 2" className="experience-image" />
        </div>
      </div>
    </div>
  );
};

export default Cv;
