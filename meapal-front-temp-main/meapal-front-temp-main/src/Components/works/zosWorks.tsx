/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import '../../style/visionStyle.scss';

function ZosWorks() {
  return (
    <div className="visionpage">
      <h2 className="visionpage-h2">
        What is
        <span className="highlight"> z/OS? </span>
      </h2>

      <p style={{ marginBottom: '15px' }} className="vision-text mb-3">

        z/OS is a 64-bit operating system designed for IBM z/Architecture mainframes, emphasizing zero downtime ("Z" for Zero Downtime) to ensure continuous availability. Introduced by IBM in October 2000 as the successor to OS/390, z/OS offers a stable, secure environment for mainframe applications and remains relevant in modern computing. This robust system supports a wide range of applications and can run programs from other platforms, integrating advanced AI and machine learning capabilities to meet the evolving demands of today’s technology landscape.
      </p>

      <h2 className="visionpage-h2">
        z/OS Team
        <span className="highlight"> Mission </span>
      </h2>
      <p style={{ marginBottom: '2px' }} className="vision-text mb-3">
        <ul>
          <li>To be the leading provider of innovative and reliable system programming solutions that enable our clients to achieve their business objectives. </li>
          <li>Help Corelia/MEAPAL to get new opportunities and become bigger and bigger.</li>
          <li>Introduce a good service with high quality on time. and keep our customer data secure and save.</li>
        </ul>
      </p>
      <h2 className="visionpage-h2">
        z/OS Team
        <span className="highlight"> Skills</span>
      </h2>
      <p className="vision-text">
        <ul>
          <li>z/OS System Programmers</li>
          <li>IMS System Programmers</li>
          <li>DB2 for System z System Administration (SysDBA)</li>
          <li>DB2 for System z Database Administration (DBA)</li>
          <li>CICS System Programmers</li>
          <li>COBOL Developer Programmer</li>
          <li>MQ on System z (WebSphere)</li>
          <li>Security Administration (RACF and ACF2)</li>
          <li>SAP/DBA Administration</li>
        </ul>

      </p>
      <h2 className="visionpage-h2">
        Success with actual
        <span className="highlight"> Customers</span>
      </h2>
      <p className="vision-text mb-0">
        <ul>
          <li>Managing AXWAY mainframe LPARS for two years</li>
          <li>Installation and configuration for DFRMM on all AXWAY LPARS</li>
          <li>Installation and customization for DELL software on all AXWAY LPARS</li>
          <li>Hardware upgrade from z14 to z16</li>
          <li>z/OS upgrade from z/OS v2.3 to v2.5</li>
          <li>CARMF Systems Administration</li>
          <li>3M Administration</li>
        </ul>
      </p>
      <img className="vision-img" src="public/zos-works-1.png" alt="datascience-1" />
      <h2 className="visionpage-h2">
        Customers
        <span className="highlight"> we worked with</span>
      </h2>
      <p className="vision-text mb-0">
        <ul>
          <li>SIO Egypt</li>
          <li>KAU King Abd Elaziz University</li>
          <li>GACA General Authority of Civil Aviation KSA</li>
          <li>SBM Saudi Business Machines KSA, General Partner of IBM WTC</li>
        </ul>

      </p>
      <img className="vision-img" src="public/zos-works-2.png" alt="datascience-1" />
    </div>
  );
}
export default ZosWorks;
