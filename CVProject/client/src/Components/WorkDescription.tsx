import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.scss';

const WorkDescription: React.FC = () => {
  const handleIconClick = (iconName: string) => {
    console.log(`${iconName} clicked`);
  };

  return (
    <div className="work-description-page">
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

      <div className="work-description-container">
        <div className="job-detail-card">
          <div className="job-title-section">
            <h1 className="job-title">Senior PHP Laravel Developer</h1>
            <img src="google-logo-9834 1.png" alt="Job" className="job-image" />
          </div>
          <div className="job-options">
            <span className="job-option">FULL TIME</span>
            <span className="job-option">REMOTE</span>
          </div>
          <p className="job-location">Google - Cairo, Egypt</p>
          <p className="job-posted-time">Posted 4 hours ago</p>
          <div className="job-stats">
            <div className="job-stat">
              <span className="stat-value">220</span>
              <span className="stat-label">Applicants for</span>
              <span className="stat-sub-label">1 open position</span>
            </div>
            <div className="job-stat">
              <span className="stat-value">0</span>
              <span className="stat-label">Viewed</span>
            </div>
            <div className="divider"></div>
            <div className="job-stat">
              <span className="stat-value">21</span>
              <span className="stat-label">In Consideration</span>
            </div>
            <div className="divider"></div>
            <div className="job-stat">
              <span className="stat-value">199</span>
              <span className="stat-label">Not Selected</span>
            </div>
          </div>
          <button className="apply-button">Apply for job</button>
        </div>

        <div className="job-details-card">
          <h2 className="card-title">Job Details</h2>
          <ul className="details-list">
            <li> Experience Needed: 5 To 8 Years</li>
            <li> Career Level: Experienced (Non-Manager)</li>
            <li> Education Level: Bachelor's Degree</li>
            <li> Salary: Confidential</li>
            <li> Job Categories: IT/Software Development / Engineering - Telecom/Technology</li>
            <li> Skills And Tools: HTML / Information Technology (IT) / Design / CSS / Computer Science</li>
          </ul>
        </div>

        <div className="job-description-card">
          <h2 className="card-title">Job Description</h2>
          <ul className="description-list">
            <li>• Write “clean”, well-designed code</li>
            <li>• Produce detailed specifications</li>
            <li>• Troubleshoot, test and maintain the core product software and databases to ensure strong optimization and functionality</li>
            <li>• Contribute in all phases of the development lifecycle</li>
            <li>• Follow industry best practices</li>
            <li>• Develop and deploy new features to facilitate related procedures and tools if necessary</li>
          </ul>
        </div>

        <div className="job-requirements-card">
          <h2 className="card-title">Job Requirements</h2>
          <ul className="requirements-list">
            <li>• Proven software development experience in PHP</li>
            <li>• Demonstrable knowledge of web technologies including HTML, CSS, Javascript, etc.</li>
            <li>• Good knowledge of relational databases, version control tools, and of developing web services</li>
            <li>• Passion for best design and coding practices and a desire to develop new bold ideas</li>
            <li>• BS/MS degree in Computer Science, Engineering, or a related subject</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkDescription;
