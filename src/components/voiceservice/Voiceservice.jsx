import React from 'react'
import './voiceservice.css'
import Tailpiece from '../tailpiece/Tailpiece'
import taxiandlimo from './../../asset/taxiandlimo.png'
import retantaion from './../../asset/retentation.png'
import telesales from './../../asset/telesales.png'
import ordertaking from './../../asset/ordertaking.png'
import appointmentsetting from './../../asset/appointmentsetting.png'
import leadgeneration from './../../asset/leadgeneration.png'
import l1l2l3 from './../../asset/l1l2l3.png'
import directresponse from './../../asset/directresponse.png'
import customerloyality from './../../asset/customerloyality.png'
import Bposervicecard from '../bposervicecard/Bposervicecard'
import callquality from './../../asset/callquality.png'
import marketresearch from './../../asset/marketresearch.png'
import customerserv from './../../asset/customerserv.png'

export default function Voiceservice() {
  return (
    <>
      <div className="wp-otr-voice">
        <h1 className='animate__animated animate__fadeInUp'>VOICE SERVICES</h1>
        <p className='animate__animated animate__zoomIn'>The services we render are tailor-made for success, ensuring that they fit your requirements.</p>
        <p className='animate__animated animate__zoomIn'>The Alpix Dispatch BPO Services voice process is focused on equipping representatives to liaise with contacts and customers to achieve tasks. The agents handling voice processes are given the updated information on products/services of clients across the globe. The internal research is done by our team of efficient professionals with support from the managers and supervisors.</p>
      </div>
      <div className="wp-inr-voice">
      <Bposervicecard
            imageSrc={taxiandlimo}
            heading="TAXI AND LIMO DISPATCH SERVICE"
            paragraph="We are using advanced technology for taxi booking and dispatch system for the quick response rates to calls from commuters in order to improve the efficiency and effectiveness of driver operations and to provide convenience and ease of use to commuters. We offer the most cost effective fleet dispatch system on the market. We are currently the only system that offers a complete dispatch solution for both Pre booked rides and in app direct vehicle hailing.
            The booking system is optimized to automatically assign jobs to the nearest vehicle. And it even looks into the future! By analyzing each vehicle’s job queue, the system is able to determine which vehicle will be closest at the scheduled time of pick up! With in app direct hailing, drivers burn less fuel cruising for jobs. Passengers can find your cab even if it does n’t drive right in front of them. Also as the passenger enters all the information, you will save money on call center staff."
          />
          <Bposervicecard
            imageSrc={retantaion}
            heading="RETENTION / CANCELLATIONS"
            paragraph="At Alpix Dispatch BPO Services, we help retain your customers while making efforts at gaining new customers for you. Our customer retention strategies are unique and we ensure that our customer service meets expectations of customers so that they remain loyal to businesses for a longer period. Retention is essential for the overall growth of businesses and Alpix Dispatch follows the right approach to make it possible.
            Our highly skilled agents handle voice processes like cancellations of bookings, reservations and orders with high levels of accuracy and efficiency. Customers may want to cancel reservations and bookings, and the customer service representatives must act fast. These are activities that must be done with immediacy and our representatives are well trained in doing that."
          />
          <Bposervicecard
            imageSrc={telesales}
            heading="TELE-SALES"
            paragraph="Alpix Dispatch BPO Services provides dedicated telesales services for managing business’ business to business (B2B) and business to consumer (B2C) telesales programs. Our telesales agents are chosen well and each agent is trained to meet expectations of clients. We have agents who can identify the right opportunity to convert leads into prospects, convert prospects into customers, and convert inquiry/service calls to sales transactions.
            To achieve success in telesales, Alpix Dispatch BPO monitors the response rates very closely. The managers make the necessary adjustments in the telesales programs to achieve the desired results in a short time. Our telesales department uses predictive dialers and also comes up with attractive offers that make prospects respond repeatedly. Alpix Dispatch BPO offers you detailed reporting and dedicated management for the telesales programs."
          />
          <Bposervicecard
            imageSrc={ordertaking}
            heading="ORDER TAKING"
            paragraph="Order taking is an inbound BPO process that requires 100% accuracy and efficiency, and Alpix Dispatch BPO Services fit the purpose perfectly. Trusting us with order taking service means that you do not have to miss any customer calls. Our 24/7 order taking services are customizable and scalable to meet the business requirements of customers.
            We have the equipments and expertise necessary to handle high levels of inbound call traffic. Alpix Dispatch has the latest technology and a flexible workforce that makes handling high call volumes with a personal touch possible. Our order taking services are efficient enough to ensure that the right products reach intended recipients within the stipulated delivery time."
          />
          <Bposervicecard
            imageSrc={appointmentsetting}
            heading="APPOINTMENT SETTING"
            paragraph="At Alpix Dispatch BPO Services we do the appointment setting and appointment reminders for your companies, businesses and organizations. Alpix Dispatch has the experience and the skills required for taking your leads and making the calls, as well as for setting the sales appointments and conducting the follow-up reminders. Through effective campaigns, we provide qualified prospects to your business and sales employees.
            We are reputed for our highly successful generation of leads into appointments that are secured. Our strategies are always customized depending on the needs of business’ products/services. We are also responsible for real-time appointment cancellations as well as well as rescheduling."
          />
          <Bposervicecard
            imageSrc={leadgeneration}
            heading="LEAD GENERATION"
            paragraph="Lead generation services offered by Alpix Dispatch BPO Services help businesses reach a wider market that the marketing efforts of businesses are not reaching. Our lead generation services are designed to cater to the business to business (B2B) markets as well as the business to consumer (B2C) markets. We utilize several methods such as tele-prospecting, customer surveys, lead nurturing, and integrated marketing services for generating huge amounts of targeted leads.
            Alpix Dispatch BPO’s lead generation activities are designed to impact the bottom line instantly. Our cost effective solutions successfully offer qualified leads to businesses of all sizes and volumes. We underst5and that lead generation is essential for a business to survive and design services accordingly."
          />
          <Bposervicecard
            imageSrc={l1l2l3}
            heading="L0 / L1 / L2 TECHNICAL SUPPORT"
            paragraph="At Alpix Dispatch BPO Services we offer technical support to customers facing technical issues with client’s products through our efficient tech-savvy representatives. The technical support offered by our efficient agents is of different levels; the levels are categorized as L0, L1 and L2. Alpix Dispatch assigns agents for offering technical support according to the individual agent’s level of technical understanding and expertise.
            The inbound calls from customers are categorized into different levels according to the complexity of technical issues inAlpix Dispatch BPO. Our agents simplify the solutions to technical issues as much as possible and make the solutions clear to customers, so that products/services of businesses stay ahead of competition. Our responses are quick and our services are exceptional to give you happier customers."
          />
          <Bposervicecard
            imageSrc={directresponse}
            heading="DIRECT RESPONSE"
            paragraph="Alpix Dispatch BPO Services can handle direct response services meeting expectations of clients. We help to increase the ROI and conversion rates and also enable to reduce call handling costs. The source of direct response can be infomercials, email marketing, television, radio, and print media; Alpix Dispatch handles various direct response challenges like call spikes, call volume fluctuations, staffing issues and other challenges.
            Alpix Dispatch BPO’s proven track record for its direct response services gets more and more clients seeking its services. We leverage the latest call center technology to measure and drive results for direct response. Our prequalified direct response call center agents help you see results in no time and in exchange of very reasonable fees."
          />
          <Bposervicecard
            imageSrc={customerloyality}
            heading="CUSTOMER LOYALTY PROGRAMS"
            paragraph="Alpix Dispatch BPO Services understands that customer loyalty programs are necessary for the excellence of businesses/companies. We emphasize on the design of business products and also the operational execution of the businesses. We devise several strategies for enabling customers to be loyal to businesses and keep making repeat purchases.
            Alpix Dispatch BPO’s representatives collect data on customer behavior for analyzing trends, influencing consumers’ purchase habits, and reward customer loyalty. The loyalty schemes designed by Alpix Dispatch can include reward cards, pay-for-membership cards, and discounts/promotional offers. We believe that customer engagement is important and work towards achieving it for retaining customers for businesses for long."
          />
          <Bposervicecard
            imageSrc={callquality}
            heading="CALL QUALITY AUDIT PROGRAM"
            paragraph="Alpix Dispatch BPO Services records and audits each and every call that is handled by the representatives to maintain quality in its services. Alpix Dispatch assesses the adequacy of its human resource management, its governance processes, as well as its internal controls and financial management policies through the audit programs. We regularly review our staff activities, as well as review, analyze and test the financial documents.
            Alpix Dispatch’s call quality audit programs helps motivate agents to do better work as they know that their activities are monitored closely. Our audit programs are designed to enhance the functioning of the overall call center operations. Our call quality audit programs are effective and assures clients that the best services are offered to them."
          />
          <Bposervicecard
            imageSrc={marketresearch}
            heading="MARKET RESEARCH & SURVEYS"
            paragraph="Alpix Dispatch BPO Services offers a range of market research and survey services for helping businesses in collection of market intelligence, measure interest of consumers in product/service offerings, and gain actionable feedback at reasonable rates. Our research is based on purchase situations, demographics, as well as usage situations. We offer survey services that present simple questionnaires to consumers so that they are interested in answering.
            Alpix Dispatch BPO offers quantitative and qualitative market research and survey services. Our interviewers/representatives are unbiased collectors of market information. We update you on the market developments and help businesses in planning improvements for their products/services as per the market demand."
          />
          <Bposervicecard
            imageSrc={customerserv}
            heading="CUSTOMER SERVICE"
            paragraph="At Alpix Dispatch BPO Services, we develop special training programs so that our customer service representatives can take calls from customers promptly and resolve their issues regarding products/services of clients meeting client’s expectations. The agents offer superior quality customer service over the phone in Alpix Dispatch BPO’s voice processes and are skilled to offer cost effective solutions in a short time.
            All agents are trained to handle the pressures of call traffic at the BPOs when they have to offer high levels of customer service to even difficult customers so as to retain them for long as customers for businesses. Customer service forms the platform for all call center operations, and Alpix Dispatch strives hard to maintain the high levels of services its representatives offer to business customers on behalf of customers."
          />
      </div>
      <Tailpiece />
    </>
  )
}
