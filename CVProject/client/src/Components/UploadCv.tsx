import React from 'react';
import { useNavigate } from 'react-router-dom';

const UploadCv: React.FC = () => {
  const navigate = useNavigate();

  const handleUploadCvClick = () => {
    navigate('/cv');
  };

  const handleIconClick = (iconName: string) => {
    console.log(`${iconName} clicked`);
  };

  return (
    <div className="upload-cv-container">
      <header className="upload-cv-header">
        <div className="comp-icon-container">
          <img src="Group 84.png" alt="Company Icon" className="comp-icon" />
        </div>
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

      <div className="upload-cv-content">
        <div className="upload-cv-details">
          <div className="upload-cv-header-text">
            <strong>Upload Your CV</strong> <span>— Optional</span>
          </div>
          <p className="upload-cv-support-text">Supported files: .docx, .doc or .pdf, with maximum size of 5MB</p>
          <button className="upload-cv-button" onClick={handleUploadCvClick}>Upload Your CV</button>
        </div>
        <div className="button-container">
          <button className="back-button">Back</button>
          <button className="get-started-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default UploadCv;
