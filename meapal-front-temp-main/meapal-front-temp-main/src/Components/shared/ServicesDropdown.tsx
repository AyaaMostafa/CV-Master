import React from 'react';
import '../../style/servicesDropdown.scss';
import { Link } from 'react-router-dom';
interface ServicesDropdownProps {
  selectedNav: string;
  setNav: (name: string, path: string) => void;
}

interface ServicesDropdownProps {
    selectedNav: string;
    setNav: (name: string, path: string) => void;
  }
  
  const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ selectedNav, setNav }) => {
    return (
      <div className="services-dropdown">
        <div className="section">
          <h2>Development</h2>
          <ul className="project-list" style={{ padding: 0 }}>
            {['Camel', 'CandiJob', 'Cybersecurity', 'OppyDetector'].map((project) => (
              <li key={project} style={{ listStyleType: 'none', marginBottom: '8px' }}>
                <Link
                  to="/works-development" 
                  className={`nav-link ${selectedNav === project ? 'active' : ''}`}
                  onClick={() => setNav(project, '/works-development')} 
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'block',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#007bff')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
                >
                  {project}
                </Link>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="section">
          <h2>Data Science</h2>
          <ul className="project-list" style={{ padding: 0 }}>
            {['IVS', 'Terminal'].map((project) => (
              <li key={project} style={{ listStyleType: 'none', marginBottom: '8px' }}>
                
                <Link
                  to="works-development"
                  className={`nav-link ${selectedNav === project ? 'active' : ''}`}
                  onClick={() => setNav(project, '/works-development')} 
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'block',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#007bff')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
                >
                  {project}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ServicesDropdown;