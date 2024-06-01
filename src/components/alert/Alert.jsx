import React, { useEffect } from 'react'
import './alert.css'
import { useSelector } from 'react-redux'
import store, { showAlert } from '../../redux/store'

export default function Alert() {
    const alertText = useSelector(state => state?.alertText)
    const alertType = useSelector(state => state?.alertType)
    useEffect(() => {
        let interval = setInterval(() => {
            store.dispatch(showAlert({
                alertDisplay: false,
                alertText: '',
                alertType: '',
            }))
        }, 3000)
        return () => clearInterval(interval)
    })
    return (
        <>
            <div
                className="wp-otr-alert animate__animated animate__bounceIn"
                style={{ backgroundColor: alertType === "message" ? "green" : "red" }}>
                <span>{alertType === "message" ? "✔️ " : "⚠️ "}{alertText}</span>
            </div>
        </>
    )
}
