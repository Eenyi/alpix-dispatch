import React from 'react'
import './header.css'
import trademark from './../../asset/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleBpoServiceMenu, toggleLogin } from "./../../redux/store";

export default function Header() {

  const dispatch = useDispatch();

  return (
    <>
      <div className="wp-otr-header">
        <div className="wp-inr-header-logo-div animate__animated animate__zoomIn">
          <Link to="/" className='' style={{ textDecoration: 'none'}}><img className='wp-header-logo' src={trademark} alt="..." /></Link>
        </div>
        <div className="wp-inr-header">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/" className='wp-i-c  animate__animated animate__fadeInUpBig'><span>Home</span></Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/dispatchservice" className='wp-i-c  animate__animated animate__fadeInUpBig'><span>Dispatch Service</span></Link>
          <div onClick={() => dispatch(toggleBpoServiceMenu())} className='wp-i-c  animate__animated animate__fadeInUpBig'><span>BPO Services</span></div>
          {/* <Link to="/sectors" className='wp-i-c  animate__animated animate__fadeInUpBig'><span>Sectors</span></Link> */}
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/about" className='wp-i-c  animate__animated animate__fadeInUpBig'><span>About US</span></Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/faqs" className='wp-i-c  animate__animated animate__fadeInUpBig'><span>FAQs</span></Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/reviews" className='wp-i-c  animate__animated animate__fadeInUpBig'><span>Reviews & Ask</span></Link>
          <div onClick={() => dispatch(toggleLogin())} className='wp-header-icon  animate__animated animate__fadeInDownBig'><i className="fa-solid fa-user-gear"></i></div>
        </div>
      </div>
    </>
  )
}
