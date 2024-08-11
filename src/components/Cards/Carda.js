import React from 'react'
import "./Carda.css"


const Carda = ({ img, msg }) => {
    return (
        <>
            <div className="cardCollection">
                <div className="cardCollectionimg">
                    <img src={img} alt="asdf" />
                </div>
                <div className="cardCollectiontextBox">
                    <div className="cardCollectiontextContent">
                        <p className="cardCollectionh1">{msg}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carda  