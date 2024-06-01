import React from 'react'
import './about.css'
import Tailpiece from '../../components/tailpiece/Tailpiece'

export default function About() {
    return (
        <>
            <div className="wp-otr-about animate__animated animate__fadeInUp">
                <h1>ABOUT US</h1>
                <p className='animate__animated animate__zoomIn'>Welcome to Alpix Dispatch Management. We are a leading dispatch service provider, specializing in serving taxi, limo, and non-emergency medical transportation companies in the United States and Canada. With a team of over 300 dedicated professionals, our call takers and dispatchers are available 24/7 to ensure efficient and seamless service. Many transportation companies have experienced significant revenue growth by leveraging our Call Answering and Dispatch Service. At Alpix Dispatch-BPO Services, we believe in doing things differently and passionately. We view the BPO industry as a means of continually growing one's business by acquiring new customers, retaining existing ones, and delivering service excellence - a winning formula that yields rich dividends. As an IT-enabled services provider, we offer a range of back-office solutions, including data entry, virtual assistant support, equity research, and data modeling. Additionally, we have expertise in web-based application development, utilizing cutting-edge open-source technologies to create innovative solutions for our customers. Our commitment to excellence, passion for innovation, and customer-centric approach set us apart. We are dedicated to making a meaningful impact in the industries we serve.</p>
                <div className=" animate__animated animate__zoomIn wp-inr-about">
                    <i className="fa-solid fa-handshake"></i>
                    <h3>WHY COMPANIES LOVE TO WORK WITH US</h3>
                    <p>Alpix Dispatch BPO is a dependable and trustworthy Taxi and Limo Dispatch center.Outsourcing Call Answering Service ,Dispatch service and certain back office work is the wiser decision that every company chooses, because it lessens time, resource, and money that you can save to concentrate more in enhancing your business and gain more profit. We value our clients as we put forth them first to bring best result out of an every/great effort.</p>
                    <i className="fa-solid fa-hand-holding-heart"></i>
                    <h3>BENEFITS YOU CAN GET FROM US </h3>
                    <p>Certainly, outsourcing your Call Answering and dispatch service to Alpix Dispatch will always benefit your company because it is cost effective which will make your life more easy,you don’t need hire and train your dispatchers again and again.You will be having stress free dispatch center,positive feed back from your customers and significant increase in revenue. Alpix Dispatch-BPO is the best solution for all your outsourcing requirements with eminent resources.</p>
                </div>
            </div>
            <Tailpiece />
        </>
    )
}
