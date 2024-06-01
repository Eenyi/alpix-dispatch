import React from 'react'
import './tailpopup.css'
import { useDispatch } from 'react-redux'
import { toggleTailpopup } from "./../../redux/store";
import { useSelector } from "react-redux";

export default function Tailpopup() {

    const menuVisible = useSelector((state) => state?.isTailpopup);
    const header = useSelector((state) => state?.headerTailpopup);
    const content = useSelector((state) => state?.contentTailpopup);
    const dispatch = useDispatch();

    return (
        <>
            {menuVisible && (
                <div className="wp-otr-bpomenu">
                    <div className="wp-otr-tailpopup animate__animated animate__zoomIn">
                        <div className="wp-inr-tailpopup">
                            <h1>{header}</h1>
                            <p>{content.split(/\n/).map((line, index) => <span key={index}>{line}</span>)}</p>
                        </div>
                        <div className="bpomenu-cancel">
                            <button onClick={() => dispatch(toggleTailpopup({
                                isTailpopup: false,
                                headerTailpopup: "",
                                contentTailpopup: ""
                            }))} className='animate__animated animate__rubberBand'>❌</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
