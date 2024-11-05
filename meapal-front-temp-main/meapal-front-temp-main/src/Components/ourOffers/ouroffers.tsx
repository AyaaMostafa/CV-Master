import React from 'react';
import '../../style/ouroffers.scss';

function OurOffers() {
  return (
    <div className="offerspage">
      <h2 className="offerspage-h2">
        Meapal
        <span className="highlight"> Offers</span>
      </h2>

      <img src="offer.png" alt="offer" className="offers-img" />

      <img src="competences.png" alt="competences" className="offers-img" />

      <div className="img-list-sm">
        <img src="offers-li-1.png" alt="offer" className="img-list-sm-item" />
        <img src="offers-li-2.png" alt="offer" className="img-list-sm-item" />
        <img src="offers-li-3.png" alt="offer" className="img-list-sm-item" />
        <span className="img-list-sm-item">
          ISAE
          <br />
          <strong>3402</strong>
        </span>
        <img src="offers-li-4.png" alt="offer" className="img-list-sm-item" />
        <img src="offers-li-5.png" alt="offer" className="img-list-sm-item" />
        <img src="offers-li-6.png" alt="offer" className="img-list-sm-item" />
      </div>
      <div className="img-list-lg">
        <img src="cert1.png" alt="offer" className="img-list-lg-item" />
        <img src="cert2.png" alt="offer" className="img-list-lg-item" />
        <img src="cert3.png" alt="offer" className="img-list-lg-item" />
      </div>
    </div>
  );
}

export default OurOffers;
