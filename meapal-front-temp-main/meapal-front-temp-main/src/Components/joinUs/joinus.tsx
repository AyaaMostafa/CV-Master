/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../style/joinus.scss';

function JoinUs() {
  return (
    <div>
      <div className="join-us-container">
        <h1 className="join-us-title">
          Join
          {' '}
          <span className="red-text">us</span>
        </h1>
        <p className="join-us-subtitle">Invest in your talent - join us!</p>
        <p className="join-us-description">
          We are always on the lookout for new talents. Whatever your talent, whatever your level of
          {' '}
          <br />
          {' '}
          experience, come and show us what you can do. We’ll take the time to have a warm and fully
          {' '}
          <br />
          {' '}
          confidential talk with you. We believe in the profusion
          of your talents and that is what we invest in, so
          {' '}
          <br />
          {' '}
          the contracts for our positions are open-ended.
        </p>
        <div className="input-container">
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="first-name">PRÉNOM</label>
              <input type="text" id="first-name" />
            </div>
            <div className="input-group">
              <label htmlFor="last-name">NOM</label>
              <input type="text" id="last-name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">MAIL</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="cv">CV (PDF UNIQUEMENT)</label>
              <input type="file" id="cv" accept=".pdf" placeholder="Choose file" />
            </div>
            <div className="input-group">
              <label htmlFor="cover-letter" className="custom-placeholder">Choose file</label>
              <input type="file" id="cover-letter" accept=".pdf" />
            </div>
          </div>
        </div>
        <button type="submit" className="send-button">Send</button>
      </div>
    </div>
  );
}

export default JoinUs;
