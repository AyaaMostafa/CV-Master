import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/style.scss';
import UserAPIs from '../api/user.api'; 

const Explore: React.FC = () => {
  const [publicProfile, setPublicProfile] = useState(true);
  const [publicVisibility, setPublicVisibility] = useState(true);
  const [immediateStart, setImmediateStart] = useState(false);
  const [jobListings, setJobListings] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true); 

  const handleIconClick = (iconName: string) => {
    console.log(`${iconName} clicked`);
  };

  const JobItem: React.FC<{ job: any }> = ({ job }) => (
    <Link to="/work-description" className="job-item">
      <div className="job-content">
        <div className="job-header">
          <span className="job-title">{job.title}</span>
          <div className="job-options">
            <span className="option">{job.type}</span>
            <span className="option">{job.remote ? 'Remote' : 'On-site'}</span>
          </div>
        </div>
        <div className="job-location">{job.company} - {job.location}</div>
        <div className="job-details">
          {job.details}
        </div>
        <div className="job-time">
          {job.timeAgo}
        </div>
      </div>
      <img src={job.logoUrl} alt="Job Icon" className="job-icon" />
    </Link>
  );

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const api = new UserAPIs();
        const response = await api.fetchJobListings();
        setJobListings(response.data); 
      } catch (error) {
        console.error('Error fetching job listings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobListings();
  }, []);

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
          <div className="exp-info-card">
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

        {loading ? (
          <div>Loading job listings...</div>
        ) : (
          jobListings.map((job, index) => (
            <JobItem key={index} job={job} />
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
