import React from 'react'
import './reviewcard.css'

export default function Reviewcard({
    stars,
    name,
    service,
    comments
}) {
    const starIcons = [];
    for (let index = 0; index < stars; index++) {
        starIcons.push(
            <i key={index} className="fa-solid fa-star animate__animated animate__zoomIn"></i>
        )
    }
    return (
        <div className="wp-otr-reviewcard animate__animated animate__zoomIn">
            <div className="wp-star animate__animated animate__zoomIn">
                {starIcons}
            </div>
            <h5>{name}</h5>
            <span>{service}</span>
            <span>{comments}</span>
        </div>
    )
}
