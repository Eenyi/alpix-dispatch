import React from 'react'
import './deletereview.css'
import Fetch from '../../resources/fetch';
import apiRoutes from '../../resources/apiUrls';
import store, { showAlert, removeFromComments } from '../../redux/store';

export default function Deletereview({
    id,
    rating,
    name,
    service,
    comment
}) {
    const starIcons = [];
    for (let index = 0; index < rating; index++) {
        starIcons.push(
            <span key={index}>⭐</span>
        )
    }
    function removeReview(e) {
        e.preventDefault();
        Fetch(apiRoutes.COMMENTS + `?id=${id}`, "get").then(
            response => {
                if (response?.status) {
                    store.dispatch(removeFromComments(id))
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
                        alertText: "[DB||Timeout-Error]:Comment removal failed"
                    }))
                }
            }
        )
    }
    return (
        <>
            <div className="wp-otr-del-review">
                <div>
                    <p>{starIcons}</p>
                    <i className="fa-solid fa-trash" onClick={removeReview}></i>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{service}</p>
                </div>
                <div>
                    <p>{comment}</p>
                </div>
            </div>
        </>
    )
}
