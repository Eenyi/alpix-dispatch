import React from 'react'
import './interactioncard.css'
import Fetch from '../../resources/fetch';
import apiRoutes from '../../resources/apiUrls';
import store, { showAlert, readFromRequests, removeFromRequests } from '../../redux/store';

export default function customerinteractioncard({
    id,
    css,
    name,
    email,
    company,
    description,
    read,
    category,
}) {
    function readRequest(e) {
        e.preventDefault();
        Fetch(apiRoutes.REQUESTS + `?id=${id}&read=${true}`, "get").then(
            response => {
                if (response?.status) {
                    store.dispatch(readFromRequests({
                        id: id,
                        category: category,
                    }))
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
                        alertText: "[DB||Timeout-Error]:Request Timeout"
                    }))
                }
            }
        )
    }
    function removeRequest(e) {
        e.preventDefault();
        Fetch(apiRoutes.REQUESTS + `?id=${id}`, "get").then(
            response => {
                if (response?.status) {
                    store.dispatch(removeFromRequests({
                        id: id,
                        category: category,
                    }))
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
                        alertText: "[DB||Timeout-Error]:Request removal failed"
                    }))
                }
            }
        )
    }
    return (
        <>
            <div className={css}>
                <div>
                    <p
                        style={{ display: read ? "none" : "block" }}
                    > Mark as read <i
                        className="fa-solid fa-check-double"
                        onClick={readRequest}
                    >
                        </i>
                    </p>
                    <i
                        className="fa-solid fa-trash"
                        onClick={removeRequest}
                    >
                    </i>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
                <div>
                    <p>{company}</p>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}
