import React, { useEffect } from "react";
import "./info.css";
import Fetch from "../../resources/fetch";
import apiRoutes from "../../resources/apiUrls";
import { useDispatch, useSelector } from "react-redux";
import {
  setMail,
  setTelephone,
} from "../../redux/store";

export default function Info() {
  const telephone = useSelector((state) => state?.telephone)
  const mail = useSelector((state) => state?.mail)
  const dispatch = useDispatch();
  useEffect(() => {
    Fetch(apiRoutes.CONTACT_INFO, "get").then(
      response => {
        dispatch(setTelephone(response?.telephone))
        dispatch(setMail(response?.mail))
      }
    )
  })

  return (
    <>
      <div className="wp-info">
        <div className="info-div">
          <div className="info-icon">
            <i className="fa-solid fa-mobile"></i>
          </div>
          <div className="info-text">
            <div className="info-up">Call Us Today</div>
            <div className="info-down">{telephone}</div>
          </div>
        </div>
        <div className="info-div">
          <div className="info-icon">
            <i className="fa-solid fa-envelopes-bulk"></i>
          </div>
          <div className="info-text">
            <div className="info-up">Mail Us Today</div>
            <div className="info-down">{mail}</div>
          </div>
        </div>
      </div>
    </>
  );
}
