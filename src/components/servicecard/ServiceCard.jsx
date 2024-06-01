import React from 'react'
import './servicecard.css'

export default function ServiceCard(props) {
  const { imageSrc, heading, paragraph } = props;

  return (
    <div className="card-inner-wrap">
      <div className="card-img-wrap">
        <img src={imageSrc} alt="" />
      </div>
      <div className="card-content-wrap">
        <div className="card-details-wrap">
          <h4>{heading}</h4>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
