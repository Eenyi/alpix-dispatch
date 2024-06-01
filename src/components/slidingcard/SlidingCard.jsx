import React from 'react'
// import s1 from './../../asset/dumy-slide-1.jpg'
// import s2 from './../../asset/dumy-slide-2.jpg'
// import s3 from './../../asset/dumy-slide-3.jpg'
import './slidingcard.css'
import { useSelector } from 'react-redux'
import apiRoutes from '../../resources/apiUrls'

export default function SlidingCard() {
  const sliderPics = useSelector((state) => state?.sliderPics)
  return (
    <>
      <div className="wp-otr-carousel">
        <div className="wp-inr-carousel">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {sliderPics.map((sliderPic, index) => {
                return <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                  <img src={apiRoutes.SLIDER_PIC + `_display?path=${sliderPic.path}`} className="d-block w-100 wp-shape" alt="..." />
                </div>
              })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
