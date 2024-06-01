import React from 'react'
import './bposervicecard.css'

export default function Bposervicecard(props) {
    
    const { imageSrc, heading, paragraph } = props;

    return (
    <>
        <div className="wp-otr-bpocard animate__animated animate__zoomIn">
            <div className="wp-bpocard-img animate__animated animate__backInUp">
                <img src={imageSrc} alt="..."/>
            </div>
            <h2 className="wp-bpocard-h animate__animated animate__fadeInUp">{heading}</h2>
            <div className="wp-bpocard-p animate__animated animate__backInUp">{paragraph}</div>
        </div>
    </>
  )
}
