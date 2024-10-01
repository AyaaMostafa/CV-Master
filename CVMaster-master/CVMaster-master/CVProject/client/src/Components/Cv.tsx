import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserAPIs from '../api/user.api';
import { jwtDecode } from "jwt-decode";
import '../style/style.scss';

const Cv: React.FC = () => {
  
  const [cvData, setCvData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const tokenLocalStorage = localStorage.getItem('authToken');
  //@ts-ignore
  const decodedToken = jwtDecode(tokenLocalStorage);
  console.log('decoded token',decodedToken);
  //@ts-ignore
  const applicantId = decodedToken.id;
  useEffect(() => {
    const fetchCv = async () => {
      if (!applicantId || !tokenLocalStorage) {
        setError('Invalid applicant ID or user not authenticated.');
        return;
      }

      const userAPIs = new UserAPIs();

      try {
        const response = await userAPIs.getCvApi(applicantId, tokenLocalStorage);
        setCvData(response.data);
        setError(null);
      } catch (err: any) {
        setError('Failed to fetch CV data.');
        console.error('Fetch error:', err);
      }
    };

    fetchCv();
  }, [applicantId, tokenLocalStorage]);

  const handleIconClick = (iconName: string) => {
    console.log(`${iconName} clicked`);
  };

  
  console.log('Decoded Token:', decodedToken);

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
        {error && <p className="error-message">{error}</p>}
        {cvData ? (
          <div className="cv-content">
            <div className="profile-section">
              <img src={cvData.profileImage || 'default-profile.png'} alt="Profile" className="profile-image" />
              <div className="profile-text">
                <div className="profile-name">{cvData.name}</div>
                <div className="profile-job-title">{cvData.jobTitle}</div>
                <div className="profile-location">{cvData.location}</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-content">
                <div className="switch-item">
                  <label>
                    <span>Public profile</span>
                    <input type="checkbox" checked={cvData.publicProfile} readOnly />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="divider"></div>
                <div className="switch-item">
                  <label>
                    <span>Public Visibility</span>
                    <input type="checkbox" checked={cvData.publicVisibility} readOnly />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="divider"></div>
                <div className="switch-item">
                  <label>
                    <span>Available for immediate start</span>
                    <input type="checkbox" checked={cvData.immediateStart} readOnly />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className='all-section'>
              <div className="info-section">
                <div className="info-group">
                  <div className="info-title">General Info</div>
                  <div className="info-item">
                    <span className="info-label">Age:</span> <span className="info-value">{cvData.age}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Experience:</span> <span className="info-value">{cvData.experience}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Minimum Salary:</span> <span className="info-value">{cvData.minimumSalary} USD/month</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Job Search Status:</span> <span className="info-value">{cvData.jobSearchStatus}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Gender:</span> <span className="info-value">{cvData.gender}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Highest education:</span> <span className="info-value">{cvData.highestEducation}</span>
                  </div>
                </div>

                <div className="info-group">
                  <div className="info-title">Contact Info</div>
                  <div className="contact-info">
                    <div className="contact-item">
                      <img src="Vector.png" alt="Phone" className="contact-icon" />
                      <span className="contact-text">{cvData.phone}</span>
                    </div>
                    <div className="contact-item">
                      <img src="Envelope.png" alt="Email" className="contact-icon" />
                      <span className="contact-text">{cvData.email}</span>
                    </div>
                    <div className="contact-item">
                      <img src="Download.png" alt="Download" className="contact-icon" />
                      <span className="contact-text"><a href={cvData.cvDownloadUrl} download>Download CV</a></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="languages-card">
                <div className="card-title"><strong>Languages</strong></div>
                <div className="card-content">
                  {cvData.languages.map((language: any, index: number) => (
                    <div className="language-item" key={index}>
                      <div className="language-title">
                        <strong>{language.name}</strong>
                      </div>
                      <div className="stars">
                        {[...Array(language.level)].map((_, i) => (
                          <img src="Star.png" alt="Star" className="star-icon" key={i} />
                        ))}
                      </div>
                      <div className="language-level">{language.proficiency}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="experience-section">
              <div className="experience-header">
                <span className="experience-title">Experience</span>
                <img src="Add.png" alt="Add" className="small-icon" />
                <img src="Pencil.png" alt="Edit" className="experience-icon" />
              </div>
              {cvData.experienceList.map((experience: any, index: number) => (
                <div className="experience-item" key={index}>
                  <img src="Rectangle 55.png" alt="Experience" className="experience-image" />
                  <div className="experience-details">
                    <div className="experience-role">{experience.role}</div>
                    <div className="experience-company">{experience.company}</div>
                    <div className="experience-duration">{experience.duration}</div>
                    <div className="experience-location">{experience.location}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="experience-section">
              <div className="experience-header">
                <span className="experience-title">Education</span>
                <img src="Add.png" alt="Add" className="small-icon" />
                <img src="Pencil.png" alt="Edit" className="experience-icon" />
              </div>
              {cvData.educationList.map((education: any, index: number) => (
                <div className="experience-item" key={index}>
                  <img src="Rectangle 55.png" alt="Degree" className="experience-image" />
                  <div className="experience-details">
                    <div className="experience-role">{education.institution}</div>
                    <div className="experience-company">{education.degree}</div>
                    <div className="experience-duration">{education.duration}</div>
                    <div className="experience-location">{education.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="loading-message">Loading CV data...</p>
        )}
      </div>
    </div>
  );
};

export default Cv;
