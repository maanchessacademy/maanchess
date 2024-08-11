import React from 'react'
import "./Callusa.css"

const Callusa = () => {

    const phoneNumber = '+917649866386';
    const handleCall = () => {
        window.location.href = `TEL:${phoneNumber}`;
        console.log("clicked");

    }

    return (
        // <button className="btna" onClick={handleCall}>

        // </button>
        <button class="cssbuttons-io-button" onClick={handleCall}>
            Get started
            <div class="icon">
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </button>

    )
}

export default Callusa