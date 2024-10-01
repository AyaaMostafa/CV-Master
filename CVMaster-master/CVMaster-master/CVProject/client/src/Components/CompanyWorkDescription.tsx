import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.scss';

const CompanyWorkDescription: React.FC = () => {
  const handleIconClick = (iconName: string) => {
    console.log(`${iconName} clicked`);
  };

  const similarJobs = [
    { title: 'Mohamed ali', location: '90%', time: '29 minutes ago' },
    { title: 'Mohamed ali', location: '70%', time: '29 minutes ago' },
    { title: 'Mohamed ali', location: '60%', time: '29 minutes ago' },
    { title: 'Mohamed ali', location: '55%', time: '29 minutes ago' },
    { title: 'Mohamed ali', location: '40%', time: '29 minutes ago' },
    { title: 'Mohamed ali', location: '30%', time: '29 minutes ago' },
  ];

  return (
    <div className="company-work-description">
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
            alt="Notification Icon"
            className="header-icon"
            onClick={() => handleIconClick('Notification Icon')}
          />
          <div className="icon-separator"></div>
          <img
            src="Vector.png"
            alt="Vector Icon"
            className="header-icon"
            onClick={() => handleIconClick('Vector Icon')}
          />
          <div className="icon-separator"></div>
          <img
            src="Group 253.png"
            alt="Profile Icon"
            className="header-icon"
            onClick={() => handleIconClick('Profile Icon')}
          />
        </div>
      </header>
      <div className='row-cards'>
      <div className="comp-work-description-container">
        <div className="job-detail-card">
          <div className="job-title-section">
            <h1 className="company-job-title">Senior PHP Laravel Developer</h1>
            <img src="Group 329-c.png" alt="Job" className="company-job-image" />
          </div>

          <div className="job-options">
            <span className="job-option">FULL TIME</span>
            <span className="job-option">REMOTE</span>
          </div>
          <p className="job-location">
  <span className="comp-job-location-company">Taaly</span> - <span className="com-job-location-city">Liverpool, United Kingdom</span>
</p>
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
          <div>
          <img src="Sign in.png" alt="Icon" className="download-icon" />
          <button className="apply-button">Download Applicants</button>
                
                </div>
          
          
        </div>

        <div className="job-details-card">
          <h2 className="card-title">Job Details</h2>
          <ul className="details-list">
            <li>Experience Needed: 5 To 8 Years</li>
            <li>Career Level: Experienced (Non-Manager)</li>
            <li>Education Level: Bachelor's Degree</li>
            <li>Salary: Confidential</li>
            <li>Job Categories: IT/Software Development / Engineering - Telecom/Technology</li>
            <li>
  <span className="skills-label">Skills And Tools:</span> HTML / Information Technology (IT) / Design / CSS / Computer Science
</li>
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
        <h2 className="comp-similar-jobs-title">Matching Candidates</h2>

        <div className="comp-similar-jobs-container">
          {similarJobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="comp-card-content">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-location">{job.location}</p>
                <p className="job-time">{job.time}</p>

              </div>
            </div>
          ))}
           <div className="see-more">See more</div>
       
      </div>
      </div>
    </div>
  );
};

export default CompanyWorkDescription;
