/* eslint-disable max-len */
import React from 'react';
import '../../style/visionStyle.scss';

function OurVisionPage() {
  return (
    <div className="visionpage">
      <h2 className="visionpage-h2">
        Meapal
        <span className="highlight"> Vision</span>
      </h2>

      <p className="vision-text">
        The company&apos;s vision is to leverage its extensive experience in information technology and communications to deliver the most suitable and best integrated solutions for executing its projects. By combining innovative technologies with industry best practices, we aim to enhance operational efficiency and drive success for our clients. Our commitment to continuous improvement and adaptation allows us to meet the evolving needs of the market, ensuring that we provide cutting-edge solutions that not only fulfill client requirements but also exceed their expectations.
      </p>

      <h2 className="visionpage-h2">
        Locations,
        <span className="highlight"> Statistics </span>
        and
        <span className="highlight"> Values</span>
      </h2>

      <img className="vision-img" src="implantation.png" alt="implantation" />
      <img
        className="vision-img"
        src="CORELIA_Strategic_Partners.png"
        alt="Corelia Strategic Partners"
      />
    </div>
  );
}
export default OurVisionPage;
