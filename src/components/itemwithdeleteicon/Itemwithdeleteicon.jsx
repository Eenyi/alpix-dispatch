import React from 'react'
import './itemwithdeleteicon.css'
import Fetch from '../../resources/fetch';
import apiRoutes from '../../resources/apiUrls';
import store, { showAlert, removeFromSliderPic } from '../../redux/store';

export default function Sliderimg({
  name,
  id,
}) {
  function removePic(e) {
    e.preventDefault();
    Fetch(apiRoutes.SLIDER_PIC + `?id=${id}&path=${name}`, "get").then(
      response => {
        if (response?.status) {
          store.dispatch(removeFromSliderPic(id))
          store.dispatch(showAlert({
            alertDisplay: true,
            alertType: "message",
            alertText: response?.message
          }))
        }
        else {
          store.dispatch(showAlert({
            alertDisplay: true,
            alertType: "error",
            alertText: "[DB||Timeout-Error]:Image deletion failed"
          }))
        }
      }
    )
  }
  return (
    <>
      <div className="wp-otr-slider-img">
        <p>{name}</p>
        <i className="fa-solid fa-trash" onClick={removePic} />
      </div>
    </>
  )
}
