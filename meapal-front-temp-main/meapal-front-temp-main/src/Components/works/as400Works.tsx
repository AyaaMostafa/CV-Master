/* eslint-disable max-len */
import React from 'react';
import '../../style/visionStyle.scss';

function ASWorks() {
  return (
    <div className="visionpage">
      <h2 className="visionpage-h2">
        AS400 Team
        <span className="highlight"> Skills </span>
      </h2>

      <p style={{ marginBottom: '15px' }} className="vision-text mb-3">
        <ul>
          <li>Our Team Worked on system design and implementation, enhancing system performance and tuning.</li>
          <li>Configured and operated all backup and restore types (media management, BRMS).</li>
          <li>Installed, configured, and supported software replication solutions.</li>
          <li>Configured and implemented system security for all object types (obj-lib-user, etc.).</li>
          <li>Analyzed and operated on all hardware and software machine problems.</li>
          <li>Applied and upgraded cumulative PTFs for the operating system.</li>
          <li>Installed and operated DB2 databases.</li>
          <li>Worked on and supported the installation of LCM servers and business engine for the M3 project.</li>
        </ul>
      </p>
      <h2 className="visionpage-h2">
        AS400
        <span className="highlight"> Mission </span>
        And
        <span className="highlight"> Vision </span>
      </h2>
      <p className="vision-text">
        <p>Our Vision is to be one of the world’s leading IT Service producers and providers using our portfolio of services to differentiate our content ,build and Keep the strong team to be ready to cover our business needs. </p>
        <p>It is the mission to deliver professional services that result in the highest quality services product available while every aspect of your business with a high level of quality ,commitment and integrity. </p>
      </p>
      <h2 className="visionpage-h2">
        AS400 Team
        <span className="highlight"> Services</span>
      </h2>
      <p className="vision-text">
        <ul>
          <li>More than 20 clients</li>
          <li>66 AS400 AXWAY servers</li>
          <li>Adding 3 new servers</li>
          <li>AGL Group adding 38 servers</li>
        </ul>
      </p>
      <h2 className="visionpage-h2">
        Number of
        <span className="highlight"> Tickets & Partitions</span>
      </h2>
      <p className="vision-text">
        As we see the increase of tickets No in 2023 , As a result of the number of problems associated With AGL partitions
      </p>
      <img className="vision-img" src="public/as400-works-1.png" alt="datascience-1" />
      <h2 className="visionpage-h2">
        Project And
        <span className="highlight"> Achievements</span>
      </h2>
      <p className="vision-text">
        While providing technical support we noticed some points that should be worked on to improve the server’s performance, so we opened some projects in parallel our support
      </p>
      <img className="vision-img" src="public/as400-works-2.png" alt="datascience-1" />
    </div>
  );
}
export default ASWorks;
