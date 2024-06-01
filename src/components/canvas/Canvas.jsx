import React from 'react'
import './canvas.css'
import Home from '../../pages/home/Home'
import {
  Route,
  Routes,
} from "react-router-dom";
import Faqs from '../../pages/faqs/Faqs';
import DispatchService from '../../pages/dispatchservice/DispatchService';
import Voiceservice from '../voiceservice/Voiceservice';
import Nonvoiceservice from '../nonvoiceservice/Nonvoiceservice';
import About from '../../pages/about/About';
import Reviewask from '../../pages/reviewask/Reviewask';

export default function Canvas() {
  return (
    <>
      <div className="wp-otr-canvas animate__animated animate__slideInUp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dispatchservice" element={<DispatchService />} />
          <Route path="/voice" element={<Voiceservice />} />
          <Route path="/nonvoice" element={<Nonvoiceservice />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviewask />} />
        </Routes>
      </div>
    </>
  )
}
