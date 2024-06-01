import React, {
    useState
} from 'react'
import './contactinfocard.css'
import Info from './../info/Info'
import { useDispatch, useSelector } from 'react-redux'
import store, { showAlert, toggleInfoCard } from '../../redux/store'
import Fetch from '../../resources/fetch'
import apiRoutes from '../../resources/apiUrls'

export default function Contactinfocard() {
    const infoCardDisplay = useSelector((state) => state?.infoCardDisplay)
    const infoCardHeader = useSelector((state) => state?.infoCardHeader)
    const infoCardCategory = useSelector((state) => state?.infoCardCategory)
    const [requesteeName, setRequesteeName] = useState("");
    const [requesteeEmail, setRequesteeEmail] = useState("");
    const [requesteeCompany, setRequesteeCompany] = useState("");
    const [requesteeDescription, setRequesteeDescription] = useState("");
    const dispatch = useDispatch();
    function submitRequest(e) {
        e.preventDefault();
        if (
            requesteeName !== ""
            && requesteeEmail !== ""
            && requesteeCompany !== ""
        ) {
            Fetch(apiRoutes.REQUESTS, "post", JSON.stringify({
                "request_category": infoCardCategory,
                "requestee_name": requesteeName,
                "requestee_email": requesteeEmail,
                "requestee_company": requesteeCompany,
                "requestee_description": requesteeDescription,
            }), "json").then(
                (response) => {
                    if (response?.status) {
                        setRequesteeName("");
                        setRequesteeEmail("");
                        setRequesteeCompany("");
                        setRequesteeDescription("");
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
                            alertText: response?.error
                        }))
                    }
                }
            )
        }
    }
    return (
        <>
            {infoCardDisplay &&
                (<div className="wp-otr-bpomenu">
                    <div className="wp-otr-contact-info-card animate__animated animate__zoomIn">
                        <div className="wp-inr-contact-info-card">
                            <Info />
                            <h1>{infoCardHeader}</h1>
                            <form
                                action=""
                                method="post"
                                onSubmit={submitRequest}
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    value={requesteeName}
                                    onChange={(e) => {
                                        setRequesteeName(e.target.value)
                                    }}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    value={requesteeEmail}
                                    onChange={(e) => {
                                        setRequesteeEmail(e.target.value)
                                    }}
                                    required
                                />
                                <input
                                    type="text"
                                    name="companyname"
                                    placeholder='Company Name'
                                    value={requesteeCompany}
                                    onChange={(e) => {
                                        setRequesteeCompany(e.target.value)
                                    }}
                                    required
                                />
                                <textarea
                                    name="description"
                                    placeholder='Description'
                                    value={requesteeDescription}
                                    onChange={(e) => {
                                        setRequesteeDescription(e.target.value)
                                    }}
                                ></textarea>
                                <input type="submit" value="Submit Request" />
                            </form>
                        </div>
                        <div className="bpomenu-cancel">
                            <button onClick={() => dispatch(toggleInfoCard({
                                infoCardDisplay: false,
                                infoCardHeader: "",
                                infoCardCategory: "",
                            }))} className='animate__animated animate__rubberBand'>❌</button>
                        </div>
                    </div>
                </div>)}
        </>
    )
}
