import React from 'react'
import './itemwithdeleteicon.css'
import Fetch from '../../resources/fetch';
import apiRoutes from '../../resources/apiUrls';
import store, { showAlert, removeFromService } from '../../redux/store';

export default function ServiceItem({
    name,
    id,
}) {
    function removeService(e) {
        e.preventDefault();
        Fetch(apiRoutes.SERVICES + `?id=${id}`, "get").then(
            response => {
                if (response?.status) {
                    store.dispatch(removeFromService(id))
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
                        alertText: "[DB||Timeout-Error]:Service removal failed"
                    }))
                }
            }
        )
    }
    return (
        <>
            <div className="wp-otr-slider-img">
                <p>{name}</p>
                <i className="fa-solid fa-trash" onClick={removeService} />
            </div>
        </>
    )
}
