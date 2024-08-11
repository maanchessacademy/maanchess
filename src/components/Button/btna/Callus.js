import React from 'react'
import "./Callus.css"

import { FaPhoneAlt } from "react-icons/fa"

const Callus = (props) => {
    const title = props.title;

    const phoneNumber = '+918962206743';
    const handleCall = () => {
        window.location.href = `TEL:${phoneNumber}`
    }


    return (
        <button className="btn animate__animated animate__bounce" onClick={handleCall} >
            <div className='btn-call'><FaPhoneAlt /> <span>{title}</span></div>
        </button>

    )
}

export default Callus