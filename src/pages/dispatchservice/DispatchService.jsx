import React from 'react'
import Info from '../../components/info/Info'
import './dispatchservice.css'
import Tailpiece from '../../components/tailpiece/Tailpiece'
import ServiceCard from '../../components/servicecard/ServiceCard'
import callAnswering from './../../asset/call-answering.png'
import twentyfour7 from './../../asset/24-7.png'
import limoSoft from './../../asset/limo-soft.png'
import qc from './../../asset/qc-certified.png'
import nda from './../../asset/nda.png'
import easyLife from './../../asset/easy-life.png'
import free from './../../asset/free-trial.png'
import growth from './../../asset/growth.png'
import report from './../../asset/reports.png'
import biLingual from './../../asset/bi-lingual.png'
import cServ from './../../asset/c-serv.png'
import { useDispatch } from 'react-redux'
import { toggleInfoCard } from '../../redux/store'
import { applyFreeHeader } from '../../resources/constants'

export default function DispatchService() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="wp-dserv-up">
        <div className="wp-canvas-left dserv">
          <h1 className='animate__animated animate__fadeInUp'>TAXI ANSWERING SERVICE</h1>
          <h4 className='animate__animated animate__backInUp'>ARE YOU LOOKING FOR PROFESSIONAL CALL TAKERS AND DISPATCHERS FOR YOUR TAXI AND LIMO BUSINESS?</h4>
          <p className='animate__animated animate__zoomIn'>You are at the right place. We know that when patrons are calling your company, they don’t have time to waste. That is why we provide around-the-clock, Taxi & Limo Dispatch Service, Taxi Dispatch Service, Taxi Call answering service, Taxi Dispatch Center, Taxi Call Center, Taxi Dispatch Software, Limo Dispatch Service, live-voice assistance for countless businesses across the country, both large and small. Prompt response is everything in your industry, so our dispatchers are committed to answering every inbound call within 3 rings or less. Every customer will get service on time which will be a great cause to increase customer retention and a significant increase in revenue.</p>
          <h4 className='animate__animated animate__backInUp'>BENEFITS TO WORK WITH US</h4>
          <p className='animate__animated animate__zoomIn'>Your taxi service does not operate in a vacuum. You have competitors who are looking for every possible advantage over your business. If you want to survive, you have to beat them to the punch. Let GDM be your partner in client support solutions. Whether we are answering inbound calls or offering virtual support for your online booking and payment program, our call center agents provide a higher echelon of telecommunications services, putting you on the road to an expanded client base and an increased bottom line.</p>
        </div>
        <div className="wp-canvas-right animate__animated animate__zoomIn">
          <Info />
        </div>
      </div>
      <div className="wp-derv-down animate__animated animate__fadeInUpBig">
        <h1>DISPATCH SERVICES</h1>
        <div className="wp-derv-content">
          <ServiceCard
            imageSrc={callAnswering}
            heading="CALL ANSWERING AND DISPATCH SERVICE"
            paragraph="Alpix Dispatch has more than 10 years of experience in handling dispatch for taxi, limo, and medical transportation companies. We have professional dispatchers available to serve your customers 24/7. We are professional to handle large and medium fleets. We are not the first option but are the last option in terms of quality dispatch and call answering services."
          />
          <ServiceCard
            imageSrc={twentyfour7}
            heading="PROFESSIONAL DISPACTHERS AVAILABLE 24/7"
            paragraph="Our operators are always available, 24 hours a day, 7 days a week, and 365 days a year. We know that taxis are needed at unpredictable times, so we are always at the ready, and we promise that your customers will be greeted by a courteous, professional call center representative."
          />
          <ServiceCard
            imageSrc={qc}
            heading="QUALITY CONTROL"
            paragraph="We record every single call for quality and training purposes so you will be getting access to call log to listen the recordings. We commit 100% up time not even a single call will be missed even in busy hours."
          />
          <ServiceCard
            imageSrc={limoSoft}
            heading="TAXI LIMO SOFTWARE"
            paragraph="Our dispatchers are fully trained to handle small and large fleet and expert in using all kinds of Taxi and Limo dispatch software. We provide services according to your requirement i.e. full time24/7, part time or only day/night shift ETC."
          />
          <ServiceCard
            imageSrc={nda}
            heading="NDA (NON DISCLOSURE AGREEMENT)"
            paragraph="We will sign a NDA with you and we will never disclose your information as a reference to any third party. We will not work with your competitor’s ever. We work with only one company from one city."
          />
          <ServiceCard
            imageSrc={easyLife}
            heading="MAKE YOUR LIFE EASIER"
            paragraph="You will be making your life easier and you don’t need to engage yourself in hiring and training new dispatchers again and again."
          />
          <ServiceCard
            imageSrc={free}
            heading="FREE TRAIL"
            paragraph="Our dispatchers are fully trained to handle small and large fleet and expert in using all kinds of Taxi and Limo dispatch software. We provide services according to your requirement i.e. full time24/7, part-time or only day/night shift, ETC."
          />
          <ServiceCard
            imageSrc={growth}
            heading="BUSINESS GROWTH"
            paragraph="Almost 30% growth in call volume by retaining the customers with professional customer service and taking responsibility of your business and customers."
          />
          <ServiceCard
            imageSrc={report}
            heading="COMPLETE REPORTING"
            paragraph="Complete analytical reporting of your business on daily, weekly and monthly basis."
          />
          <ServiceCard
            imageSrc={biLingual}
            heading="BILINGUAL STAFF"
            paragraph="your business must be able to assist Spanish-speaking clientele. We have Dispatchers on call who are fluent in both English and Spanish, so you will never have to worry that a language barrier is standing in the way of you and potential fares."
          />
          <ServiceCard
            imageSrc={cServ}
            heading="CONCIERGE SERVICE"
            paragraph="VIP clients expect VIP service. We can arrange wake-up calls for early morning shuttles, make outbound calls to drivers close to pick-up time to keep everyone on schedule, and even process payments prior to arrival for your customers’ convenience."
          />
        </div>
        <div className="wp-free-trial">
          <h1>Start your free trail for Call Answering and Dispatch service</h1>
          <h3>NO CREDIT CARD REQUIRED, NO STRINGS ATTACHED, EXPERIENCE THE FULL POWER OF OUR ANSWERING SERVICE, FOR FREE.</h3>
          <button onClick={() => dispatch(toggleInfoCard({
            infoCardDisplay: true,
            infoCardHeader: applyFreeHeader,
            infoCardCategory: "trial",
          }))} className="trial-btn">START MY FREE TRIAL</button>
        </div>
      </div>
      <Tailpiece />
    </>
  )
}
