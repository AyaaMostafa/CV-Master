import React from 'react';
import '../../style/jobsStyle.scss';

function JobsPage() {
  return (
    <div className="jobspage">
      <h2 className="jobspage-h2">
        Meapal job
        <span className="highlight"> offers</span>
      </h2>

      <h2 className="jobspage-h2">
        Lorem, ipsum dolor sit amet, consectetur adipisicing elit
      </h2>

      <p className="jobs-text">
        Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Vero dolores
        magnam a itaque culpa necessitatibus tempora repudiandae libero maxime
        harum sed distinctio saepe sapiente sint quod placeat beatae. Lorem,
        ipsum dolor sit amet, consectetur adipisicing elit. Vero dolores magnam
        a itaque culpa necessitatibus tempora repudiandae libero maxime harum
        sed distinctio saepe sapiente sint quod placeat beatae.
      </p>

      <button className="application-button" type="button">
        Spontaneous application
      </button>
    </div>
  );
}
export default JobsPage;
