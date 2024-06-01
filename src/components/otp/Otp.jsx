import React from 'react'
import './otp.css'

export default function Otp() {
    return (
        <>
            <div className="wp-otr-bpomenu">
                <div className="wp-otr-contact-info-card animate__animated animate__zoomIn">
                    <div className="wp-inr-contact-info-card wp-height">
                        <h1>OTP Varification</h1>
                        <br />
                        <form action="/" method="post">
                            <div className="otp-container">
                                <input type="text" className="otp-input" maxLength="1"/>
                                <input type="text" className="otp-input" maxLength="1"/>
                                <input type="text" className="otp-input" maxLength="1"/>
                                <input type="text" className="otp-input" maxLength="1"/>
                            </div>
                            <br />
                            <input type="submit" value="Proceed" />
                        </form>
                        <span className='wp-otp-message'>⚠ Any Error Message</span>
                    </div>
                    <div className="bpomenu-cancel">
                        <button className='animate__animated animate__rubberBand'>❌</button>
                    </div>
                </div>
            </div>
        </>
    )
}
