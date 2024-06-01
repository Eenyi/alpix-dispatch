import React from 'react'
import './faqs.css'
import Tailpiece from "../../components/tailpiece/Tailpiece";
import { useSelector } from 'react-redux';


export default function Faqs() {
  const telephone = useSelector((state) => state?.telephone)
  return (
    <div className="wp-otr-faq">
      <div className="wp-inr-faq">
        <h3 className='faq-h animate__animated animate__fadeInUp'>FREQUENTLY ASKED QUESTIONS</h3>
        <p className="faq-p animate__animated animate__zoomIn">Dispatch center is the back bone for every transportation company. Only the experienced and professional dispatchers can boost your business to the next level. We deliver what we commit. Our call answering service is not limited to call answering and dispatching only, we take full responsibility of your business and growth.</p>
        <p className="faq-q animate__animated animate__backInUp">How does the 5-day free trial work?</p>
        <p className="faq-a animate__animated animate__zoomIn">After speaking with the sales team, we just need 7 days to get your city knowledge and surrounding area and about your company SOPs. We will assign you a professional dispatch manager to train your team. After the training is completed, we will give you the go-ahead to transfer the live calls. Your trail will be expired exactly after 14 days.</p>
        <p className="faq-q animate__animated animate__backInUp">Can i get a demo of the call answering service first? </p>
        <p className="faq-a animate__animated animate__zoomIn">You bet! Our sales team will explain you about the demo. We just need the training about your company SOPs to start the free Trail. Rest our experienced dispatchers will handle everything.</p>
        <p className="faq-q animate__animated animate__backInUp">Is the free trial really free? </p>
        <p className="faq-a animate__animated animate__zoomIn">Absolutely! We don’t require a credit card or any other payment information to get started on the free trial for Call Answering Service.</p>
        <p className="faq-q animate__animated animate__backInUp">Can you provide a toll-free number during the trial? </p>
        <p className="faq-a animate__animated animate__zoomIn">We can provide either a toll-free number or a local phone number during your free trial period. Our toll-free numbers are based on availability with prefixes including; 800, 855, 866, 888, etc. For local numbers, our sales representatives will ask you which area code you prefer.</p>
        <p className="faq-q animate__animated animate__backInUp">Can I talk to someone before sign up? </p>
        <p className="faq-a animate__animated animate__zoomIn">Absolutely! We are a 24/7 live Call answering service after all. Our Sales Team can always be reached by calling 1-888-492-5838.</p>
        <p className="faq-q animate__animated animate__backInUp">Do you need a credit card info to sign up? </p>
        <p className="faq-a animate__animated animate__zoomIn">You do not need a credit card or any other form of payment to sign up for the trial. However, if you wish to continue service once the trial is over then you can choose your any payment method for our answering service.</p>
        <p className="faq-q animate__animated animate__backInUp">How can I pay for the Call answering service? </p>
        <p className="faq-a animate__animated animate__zoomIn">Alpix Dispatch is an independent call center. You have the flexibility to pay according to your convenience by check, by wire transfer or by credit card after the receipt of invoice.</p>
        <p className="faq-q animate__animated animate__backInUp">Is the service available 24 hours a day or just during business hours? </p>
        <p className="faq-a animate__animated animate__zoomIn">Our Call answering service is available 24 hours a day, 7 days a week, 365 days a year, including all holidays. Since you decide when you want to forward calls to us, it’s up to you whether or not we are answering calls 24/7 or just during certain times.</p>
        <p className="faq-q animate__animated animate__backInUp">Is there an extra fee to answer my calls on a holiday? </p>
        <p className="faq-a animate__animated animate__zoomIn">Nope! We do not charge any extra or hidden fees to answer your calls over a holiday, weekend, or after hours. Our rates stay the same no matter the day or time.</p>
        <div className="faq-live animate__animated animate__zoomIn">
          <h1>QUESTIONS? LIVE ANSWERS AT</h1>
          <h2>{telephone}</h2>
          <p>Outsourcing your dispatch center to Alpix Dispatch means 70% savings on wages and giving business is in safe hands. Our Taxi Call Answering Service and Limo Answering Service can boost your company to the next level with help of our professional dispatchers and marketing experts.</p>
        </div>
        <Tailpiece />
      </div>
    </div>
  )
}
