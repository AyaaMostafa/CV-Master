import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserAPIs from '../api/user.api';
import { jwtDecode } from "jwt-decode";

const UploadCv: React.FC = () => {
  const navigate = useNavigate();
  const [applicantId, setApplicantId] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const token = localStorage.getItem('authToken');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!applicantId || !file) {
      setError('Please provide all required fields.');
      return;
    }

    if (!token) {
      setError('User not authenticated.');
      return;
    }

    const userAPIs = new UserAPIs();

    try {
      await userAPIs.uploadCVApi(applicantId, file, token);
      setSuccess('CV uploaded successfully!');
      setError(null);
    } catch (err: any) {
      setError('Failed to upload CV.');
      setSuccess(null);
      console.error('Upload error:', err);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleGetStartedClick = async () => {
    if(token && file){
    const decodedToken = jwtDecode(token);
    //@ts-ignore
    const applicantId = decodedToken.id;
    const userAPIs = new UserAPIs();
    const response = await userAPIs.uploadCVApi(applicantId, file, token);
    if(response){
      navigate('/cv', { state: { applicantId} });
    }

    
    } 
  };

  return (
    <div className="upload-cv-container">
      <header className="upload-cv-header">
        <div className="comp-icon-container">
          <img src="Group 84.png" alt="Company Icon" className="comp-icon" />
        </div>
        <div className="icon-container">
          <img src="Notification_12.png" alt="Icon 1" className="header-icon" onClick={() => console.log('Icon 1 clicked')} />
          <div className="icon-separator"></div>
          <img src="Vector.png" alt="Icon 2" className="header-icon" onClick={() => console.log('Icon 2 clicked')} />
          <div className="icon-separator"></div>
          <img src="Group 253.png" alt="Icon 3" className="header-icon" onClick={() => console.log('Icon 3 clicked')} />
        </div>
      </header>

      <div className="upload-cv-content">
        <div className="upload-cv-details">
          <div className="upload-cv-header-text">
            <strong>Upload Your CV</strong> <span>— Optional</span>
          </div>
          <p className="upload-cv-support-text">Supported files: .docx, .doc or .pdf, with a maximum size of 5MB</p>
          <form onSubmit={handleSubmit} className="upload-cv-form">
            <div className="form-group">
              <label htmlFor="cv-file">CV File:</label>
              <input
                type="file"
                id="cv-file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
            </div>
            <button type="submit" className="upload-cv-button">Upload Your CV</button>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
          </form>
        </div>
        <div className="button-container">
          <button className="back-button" onClick={handleBackClick}>Back</button>
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCv;
