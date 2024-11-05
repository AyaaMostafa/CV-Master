/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../style/homePage.scss';
import { useTranslation } from 'react-i18next';
import '../../languages/i18n.js';

function HomePage() {
  const { t } = useTranslation();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="container-fluid">
        <div className="homepage-responsive">
          <p className="homepage-responsive-text">
            {t('dataScienceParagraph')}
          </p>
          <h2 className="homepage-responsive-h2">
            {t('futureOfWorld')}
            <span className="highlight">
              {' '}
              {t('linked')}
              {' '}
            </span>
            {t('toIntelligence')}
          </h2>
          <p className="homepage-responsive-text">
            “
            {t('visionParagraph')}
           
            ”
          </p>
          <button type="button" className="vision-button">{t('meapalVision')}</button>
          <p className="homepage-responsive-text mt-4">{t('homeKnowHow')}</p>
          <h2 className="homepage-responsive-h2">
            <span className="title-highlight">
              {t('meapal')}
              {' '}
            </span>
            <span className="highlight">{t('values')}</span>
          </h2>
        </div>
        <div className="homepage">
          <main className="homepage-content">
            <div className="cards-container">
              <div className="card purple-card">
                <h3 className="card-title">{t('performanceAndInnovation')}</h3>
                <p className="card-subtitle">{t('ourCommitment')}</p>
                <span className="card-link">{t('seeMore')}</span> 
              </div>
              <div className="card red-card">
              <h3 className="card-title">{t('skillAndTeamCohesion')}</h3>
              <p className="card-subtitle">{t('skillParagraph')}</p>
              <span className="card-link">{t('seeMore')}</span> 
              </div>
              <div className="card purple-card">
              <h3 className="card-title">{t('customerSatisfaction')}</h3>
              <p className="card-subtitle">{t('customerParagraph')}</p>
                <span className="card-link">{t('seeMore')}</span> 
              </div>
            </div>
          </main>
        </div>
        <div className="homepage-responsive">
          <h2 className="homepage-responsive-h2 mt-3">
          <span className="title-highlight">{t('meapal')}</span>
          <span className="highlight">{t('services')}</span>
          </h2>
        </div>
      </div>

      <div className="homepage">
        
      </div>
      <div className="info-box-container mt-3 mb-5">
        <div className="info-box-responsive">
          <div className="row ms-5">
            <div className="col-9">
              <h2 className="homepage-responsive-h2">
              {t('aimsAndScopeIn')}
                <span className="highlight"> {t('technicalSupport')}</span>
              </h2>
              <p className="homepage-responsive-text">
              {t('pilotageSupportText')}
              </p>
              <button type="button" className="vision-button mb-3">   {t('discover')}</button>
            </div>
            <div className="col-3">
              <img style={{ width: '260px' }} src="/public/handshake-img.png" alt="handshake" />
            </div>
          </div>
        </div>
        {/* <img alt="planet-background" className="planet-background-right" src="/public/planet (2).png" /> */}
      </div>
      <div className="info-box-container-right mt-3 mb-5">
        <div className="info-box-responsive-right mb-0">
          <div className="row ms-2">
            <div className="col-3">
              <img style={{ width: '260px' }} src="/public/Mask group.png" alt="handshake" />
            </div>
            <div className="col-9">
              <p className="homepage-responsive-text mb-1 mt-2" />
              <h2 className="homepage-responsive-h2">
              {t('aimsAndScopeIn')}
                <span className="highlight"> {t('dataScience')} </span>
              </h2>
              <p className="homepage-responsive-text">
              {t('dataScienceText')}
              </p>
              <button type="button" className="vision-button mb-3">{t('discover')}</button>
            </div>
          </div>
        </div>
        {/* <img alt="planet-background" className="planet-background-right" src="/public/planet (2).png" /> */}
      </div>
      <div className="homepage-responsive mb-3 mt-3">
        <div className="homepage-responsive-text">
          <h2 className="homepage-responsive-h2">
          {t('seeMeapal')}
          <span className="highlight"> <h3>{t('references')}</h3> </span>
          </h2>
        </div>
      </div>
      <div style={{ height: '50px' }} className="container mb-3">
        <Carousel responsive={responsive}>
          <img src="Safran_-_logo_2016.png" alt="Logo 1" className="small-logo" />
          <img src="Sanofi-Logo-Vector.png" alt="Logo 2" className="small-logo" />
          <img src="Thales.png" alt="Logo 3" className="small-logo" />
          <img src="Safran_-_logo_2016.png" alt="Logo 1" className="small-logo" />
          <img src="Sanofi-Logo-Vector.png" alt="Logo 2" className="small-logo" />
          <img src="Thales.png" alt="Logo 3" className="small-logo" />
        </Carousel>
      </div>
    </>
  );
}
export default HomePage;
