/* eslint-disable max-len */
import React from 'react';
import '../../style/visionStyle.scss';

function ITWorks() {
  return (
    <div className="visionpage">
      <h2 className="visionpage-h2">
        Meapal
        <span className="highlight"> Pilotage </span>
        Team
      </h2>

      <p style={{ marginBottom: '15px' }} className="vision-text mb-3">

        Our Pilotage IT Support Team operates around the clock, providing seamless support 24/7 through three dedicated shifts (AM, PM, and Night). New team members undergo a rigorous one-month training period to ensure they meet our high standards of service. With over 150 clients relying on us, the team handles approximately 100 tickets daily, maintaining efficient, responsive service for each request. The team consists of 16 skilled pilots who are committed to managing client needs with expertise and reliability at all hours.
      </p>

      <h2 className="visionpage-h2">
        Pilotage
        <span className="highlight"> Mission </span>
      </h2>
      <p style={{ marginBottom: '2px' }} className="vision-text mb-3">
        Being the single point of contact for IT related advice and support and be recognized as an excellent service provider.
        <ul>
          <li>Delivering proactive, knowledgeable, and reliable service as the first point of contact, offering advice and support for centrally provided IT services</li>
          <li>Supporting and developing staff to ensure the delivery of excellent quality service</li>
          <li>Continually developing and improving services and processes</li>
          <li>Taking positive action to maintain a high level of customer satisfaction</li>
        </ul>
      </p>
      <h2 className="visionpage-h2">
        Action
        <span className="highlight"> Plan</span>
      </h2>
      <img className="vision-img" src="it-works-2.png" alt="datascience-1" />
      <h2 className="visionpage-h2">
        Clients
        <span className="highlight"> Support Strategy</span>
      </h2>
      <img className="vision-img" src="it-works-3.png" alt="datascience-1" />
    </div>
  );
}
export default ITWorks;
