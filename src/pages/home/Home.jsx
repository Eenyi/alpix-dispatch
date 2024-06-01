import React from "react";
import "./home.css";
import Info from "../../components/info/Info";
import SlidingCard from "../../components/slidingcard/SlidingCard";
import out from './../../asset/outbound.png'
import inb from './../../asset/inbound.png'
import dnd from './../../asset/dnd.png'
import off from './../../asset/backoff.png'
import Tailpiece from "../../components/tailpiece/Tailpiece";
import { useEffect } from "react";
import Fetch from "../../resources/fetch";
import apiRoutes from "../../resources/apiUrls";
import store, { setSliderPics } from "../../redux/store";

export default function Home() {
  useEffect(() => {
    Fetch(apiRoutes.SLIDER_PIC + `?id=all`, "get").then(
      (response) => {
        store.dispatch(setSliderPics(response?.payload))
      }
    )
  }, [])
  return (
    <>
      <div className="wp-home-up">
        <div className="wp-canvas-left animate__animated animate__zoomIn">
          <SlidingCard />
        </div>
        <div className="wp-canvas-right animate__animated animate__zoomIn">
          <Info />
        </div>
      </div>
      <div className="wp-home-down animate__animated animate__zoomIn">
        <div className="wp-intro">
          <h1 className="intro-head">
            INTRODUCTION
          </h1>
          <h4 className="intro-sub-head">
            What we are doing
          </h4>
          <p className="intro-body">
            Alpix Dispatch BPO is here with the aim of providing a comprehensive solution to our customer’s outsourcing needs. We are a team of passionate, dedicated, and talented people who can work as a third hand of your business for call answering and dispatch with intense care and efficiency. We are thriving toward customer satisfaction and quick turnaround time with accuracy and security. We are flexible and cooperative and can guarantee high efficiency.
          </p>
        </div>
        <div className="wp-job">
          <div className="jobs-left">
            <div className="job-content">
              <div className="job-logo">
                <img src={out} alt="" className="job-img" />
              </div>
              <div className="job-text">
                <h6 className="job-h">OUTBOUND CALL CENTER SERVICES</h6>
                <p className="job-p">We are highly trained live agents are adaptive and flexible and have experience working across B2B and B2C campaigns with equal effectiveness.</p>
              </div>
            </div>
            <div className="job-content">
              <div className="job-logo">
                <img src={inb} alt="" className="job-img" />
              </div>
              <div className="job-text">
                <h6 className="job-h">INBOUND CALL CENTER SERVICES</h6>
                <p className="job-p">We are handling customer services. We are perfectly placed to offer your business a complete outsourced customer services department, allowing you to concentrate on your core business activity.</p>
              </div>
            </div>
          </div>
          <div className="jobs-right">
            <div className="job-content">
              <div className="job-logo">
                <img src={off} alt="" className="job-img" />
              </div>
              <div className="job-text">
                <h6 className="job-h">BACK OFFICE SERVICES</h6>
                <p className="job-p">If you are managing a small or a medium size business and you are looking for a solution to outsource your tasks then Back Office Support might be the solution for you.</p>
              </div>
            </div>
            <div className="job-content">
              <div className="job-logo">
                <img src={dnd} alt="" className="job-img" />
              </div>
              <div className="job-text">
                <h6 className="job-h">DESIGNING AND DEVELOPMENT SERVICES</h6>
                <p className="job-p">Alpix Dispatch BPO is providing continuously the best possible and complete web design and development services. If you want to implement your innovative imagination and unique business ideas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tailpiece />
    </>
  );
}

