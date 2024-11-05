/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../style/visionStyle.scss';
import Carousel from 'react-multi-carousel';

function VerbatimVisionPage() {
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
    <div className="visionpage">
      <h2 className="visionpage-h2">
        We value our
        <span className="highlight"> Customers</span>
      </h2>

      <p className="vision-text">
        Customer satisfaction is at the core of everything we do, and we prioritize it in every aspect of our services. We are committed to understanding and meeting our clients' unique needs, consistently delivering reliable, high-quality solutions designed to exceed expectations. By maintaining open communication and a proactive approach, we ensure clients feel supported and valued throughout our partnership. We continuously seek feedback to improve our services, and our dedicated team goes above and beyond to address concerns promptly. At our company, customer satisfaction is not just a goal—it's a commitment that drives our passion for excellence.
      </p>
      <p className="vision-text">
        We proudly serve a diverse range of customers across various industries, including healthcare, finance, retail, government, and more. Each client benefits from our tailored approach, designed to meet their unique needs and industry requirements. By delivering reliable, high-quality solutions and providing responsive support, we consistently achieve high levels of customer satisfaction. Our clients trust us not only for our technical expertise but also for our commitment to helping them succeed in their respective fields. The positive feedback and long-term partnerships we build are a testament to the dedication and satisfaction our clients experience with our services.
      </p>
      <div className="homepage-responsive">
        <h2 className="homepage-responsive-h2">
          Customer We
          <span className="highlight"> proudly </span>
          Worked With...
        </h2>
        <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-4">
          Setting technical standards that help provide structured support services
        </p>
        <div className="container-fluid mb-5 mt-3">
          <Carousel responsive={responsive}>
            <img src="Safran_-_logo_2016.png" alt="Logo 1" className="small-logo" />
            <img src="Sanofi-Logo-Vector.png" alt="Logo 2" className="small-logo" />
            <img src="Thales.png" alt="Logo 3" className="small-logo" />
            <img src="cbp_logo.png" alt="Logo 3" className="small-logo" />
            <img src="Murex_logo.png" alt="Logo 3" className="small-logo" />
          </Carousel>
        </div>
        <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-5">
          Providing customer data protection services
        </p>
        <div className="container-fluid mb-5 mt-3">
          <Carousel responsive={responsive}>
            <img src="filhet_logo.png" alt="Logo 1" className="small-logo" />
            <img src="cbp_logo.png" alt="Logo 3" className="small-logo" />
            <img src="Thales.png" alt="Logo 3" className="small-logo" />
            <img style={{ width: '100px' }} src="3m-logo.png" alt="Logo 2" className="small-logo" />
            <img src="Safran_-_logo_2016.png" alt="Logo 3" className="small-logo" />
          </Carousel>
        </div>
        <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-5">
          Setting up customer storage spaces through the company's data center.
        </p>
        <div className="container-fluid mb-5 mt-3">
          <Carousel responsive={responsive}>
            <img src="Safran_-_logo_2016.png" alt="Logo 3" className="small-logo" />
            <img src="cbp_logo.png" alt="Logo 3" className="small-logo" />
            <img src="Thales.png" alt="Logo 3" className="small-logo" />
            <img src="1280px-Logo-raptdev.png" alt="Logo 1" className="small-logo" />
            <img src="Safran_-_logo_2016.png" alt="Logo 3" className="small-logo" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default VerbatimVisionPage;
